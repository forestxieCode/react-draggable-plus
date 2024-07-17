
import { useEffect, useState } from 'react'
import Sortable, { type Options, type SortableEvent } from 'sortablejs'
import { error } from './utils/log'
import {
  extend,
  forEachObject,
  insertElement,
  insertNodeAt,
  isHTMLElement,
  isOn,
  isUndefined,
  mergeOptionsEvents,
  moveArrayElement,
  removeElement,
  removeNode
} from './utils'
import { RefOrValue, RefOrElement } from './types'

function defaultClone<T>(element: T): T {
  if (element === undefined || element === null) return element
  return JSON.parse(JSON.stringify(element))
}

let data: any = null
let clonedData: any = null

function setCurrentData(
  _data: typeof data = null,
  _clonedData: typeof data = null
) {
  data = _data
  clonedData = _clonedData
}

function getCurrentData() {
  return {
    data,
    clonedData
  }
}

const CLONE_ELEMENT_KEY = Symbol('cloneElement')

export interface DraggableEvent<T = any> extends SortableEvent {
  item: HTMLElement & { [CLONE_ELEMENT_KEY]: any }
  data: T
  clonedData: T
}
type SortableMethod = 'closest' | 'save' | 'toArray' | 'destroy' | 'option'

export interface UseDraggableReturn extends Pick<Sortable, SortableMethod> {
  /**
   * Start the sortable.
   * @param {HTMLElement} target - The target element to be sorted.
   * @default By default the root element of the ReactDraggablePlus instance is used
   */
  start: (target?: HTMLElement) => void
  pause: () => void
  resume: () => void
}

export interface UseDraggableOptions<T> extends Options {
  clone?: (element: T) => T
  immediate?: boolean
  customUpdate?: (event: SortableEvent) => void
}

/**
 * A custom compositionApi utils that allows you to drag and drop elements in lists.
 * @param el
 * @param {Array} list - The list to be dragged
 * @param {Event} onChangeList - The list to be dragged
 * @param {Object} options - The options of the sortable
 * @returns {Object} - The return of the sortable
 */
export function useDraggable<T>(
  el: RefOrElement,
  list?: T[] | undefined,
  onChangeList?: (list: any[]) => void,
  options?: RefOrValue<UseDraggableOptions<T>>
): UseDraggableReturn
export function useDraggable<T>(
  el: null | undefined,
  list?: T[] | undefined,
  onChangeList?: (list?: any[]) => void,
  options?: RefOrValue<UseDraggableOptions<T>>
): UseDraggableReturn
export function useDraggable<T>(
  el: React.MutableRefObject<any>,
  options?: RefOrValue<UseDraggableOptions<T>>
): UseDraggableReturn
export function useDraggable<T>(
  el: null | undefined,
  options?: RefOrValue<UseDraggableOptions<T>>
): UseDraggableReturn

/**
 * A custom compositionApi utils that allows you to drag and drop elements in lists.
 * @param {React.MutableRefObject<any>} el
 * @param {T[]} list
 * @param {RefOrValue<UseDraggableOptions<T>>} options
 * @returns {UseSortableReturn}
 */
export function useDraggable<T>(...args: any[]): UseDraggableReturn {
  const el = args[0];

  let [, list, onChangeList, options] = args
  if (!Array.isArray(list)) {
    options = list
    list = null
  }

  const [instance, setInstance] = useState<Sortable | null>(null)
  const {
    immediate = true,
    clone = defaultClone,
    customUpdate
  } = options ?? {}


  function changeHandle(list: any) {
    if(!onChangeList) return
    onChangeList(list)
  }

  /**
   * Element dragging started
   * @param {DraggableEvent} evt - DraggableEvent
   */
  function onStart(evt: DraggableEvent) {
    const data = list[evt.oldIndex!]
    const clonedData = clone(data)
    setCurrentData(data, clonedData)
    evt.item[CLONE_ELEMENT_KEY] = clonedData
  }

  /**
   * Element is dropped into the list from another list
   * @param {DraggableEvent} evt
   */
  function onAdd(evt: DraggableEvent) {
    const element = evt.item[CLONE_ELEMENT_KEY]
    if (isUndefined(element)) return
    removeNode(evt.item)
    insertElement(list, evt.newDraggableIndex!, element)
    changeHandle(list)
  }

  /**
   * Element is removed from the list into another list
   * @param {DraggableEvent} evt
   */
  function onRemove(evt: DraggableEvent) {
    const { from, item, oldIndex, oldDraggableIndex, pullMode, clone } = evt
    insertNodeAt(from, item, oldIndex!)
    if (pullMode === 'clone') {
      removeNode(clone)
      return
    }
    removeElement(list, oldDraggableIndex!)
    changeHandle(list)
  }



  /**
   * Changed sorting within list
   * @param {DraggableEvent} evt
   */
  function onUpdate(evt: DraggableEvent) {
    if (customUpdate) {
      customUpdate(evt)
      return
    }
    const { from, item, oldIndex, newIndex } = evt
    removeNode(item)
    insertNodeAt(from, item, oldIndex!)
    moveArrayElement(list, oldIndex!, newIndex!)
    changeHandle(list)
  }

  function onEnd() {
    requestIdleCallback(() => {
      setCurrentData()
    })
  }

  /**
   * preset options
   */
  const presetOptions: UseDraggableOptions<T> = {
    onUpdate,
    onStart,
    onAdd,
    onRemove,
    onEnd
  }

  function getTarget(target?: HTMLElement) {
    const element = el?.current as any
    if (!target) {
      return element
    }
    // @ts-ignore
    if (target && !isHTMLElement(target)) return target.$el
    if (!target) error('Root element not found')
    return target
  }

  function mergeOptions() {
    // eslint-disable-next-line
    const { immediate, clone, ...restOptions } = options ?? {}

    forEachObject(restOptions, (key, fn) => {
      if (!isOn(key)) return
      restOptions[key] = (evt: DraggableEvent, ...args: any[]) => {
        const data = getCurrentData()
        extend(evt, data)
        fn(evt, ...args)
      }
    })

    return mergeOptionsEvents(
      list === null ? {} : presetOptions,
      restOptions
    ) as Options
  }

  const methods = {
    option: (name: keyof Options, value?: any) => {
      // @ts-ignore
      return instance?.option(name, value)
    },
    destroy: () => {
      instance?.destroy()
      setInstance(null)
    },
    save: () => instance?.save(),
    toArray: () => instance?.toArray(),
    closest: (...args) => {
      // @ts-ignore
      return instance?.closest(...args)
    }
  } as Pick<Sortable, SortableMethod>

  const start = (target?: HTMLElement) => {
    if (instance) methods.destroy()
    setInstance(new Sortable(getTarget(target) as HTMLElement, mergeOptions()))
  }

  useEffect(() => {
    if (!instance) return
    forEachObject(mergeOptions(), (key, value) => {
      // @ts-ignore
      instance?.option(key, value)
    })
  }, [options])



  const pause = () => methods?.option('disabled', true)
  const resume = () => methods?.option('disabled', false)

  useEffect(() => {
    if(immediate && el?.current) start()
    return () => {
      if(el?.current) methods.destroy()
    }
  }, [el])

  return { start, pause, resume, ...methods }
}
