"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[430],{36606:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(75271),n=e(15226),o={}},38547:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var d=e(75271),n=e(72478),o={}},8764:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(15226);const n=[{value:`
type SortableMethod = 'closest' | 'save' | 'toArray' | 'destroy' | 'option'

/**
 * The return value of useDraggable
 */
export interface UseDraggableReturn extends Pick<Sortable, SortableMethod> {
  /**
   * Starts dragging
   * @param {HTMLElement} target - The element to be dragged
   * @default - The component's root element, refer to [Target Container](/demo/target-container/), defaults to the component's root element
   */
  start: (target?: HTMLElement) => void
  /**
   * Pauses dragging
   */
  pause: () => void
  /**
   * Resumes dragging
   */
  resume: () => void
}

export interface UseDraggableOptions<T> extends Options {
  clone?: (element: T) => T
  immediate?: boolean
  customUpdate?: (event: DraggableEvent) => void
}

interface DraggableEvent<T = any> extends DraggableEvent {
  data: T
  clonedData: T
}
`,paraId:0,tocIndex:0},{value:"Options",paraId:1,tocIndex:1},{value:" inherits all configuration items from ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:". For details, please see the ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" official documentation",paraId:1,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:`type Easing =
  | 'steps(int, start | end)'
  | 'cubic-bezier(n, n, n, n)'
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'step-start'
  | 'step-end'
  | 'initial'
  | 'inherit'

type PullResult = ReadonlyArray<string> | boolean | 'clone';
type PutResult = ReadonlyArray<string> | boolean;

interface GroupOptions {
  /**
   * Group name.
   */
  name: string;
  /**
   * The ability to move from the list. Clone - copy the item instead of moving it.
   */
  pull?: PullResult | ((to: Sortable, from: Sortable, dragEl: HTMLElement, event: SortableEvent) => PullResult) | undefined;
  /**
   * Whether elements can be added from other lists, or an array of group names from which elements can be obtained.
   */
  put?: PutResult | ((to: Sortable, from: Sortable, dragEl: HTMLElement, event: SortableEvent) => PutResult) | undefined;
  /**
   * After moving to another list, the cloned element is restored to its initial position.
   */
  revertClone?: boolean | undefined;
}

type Group = string | GroupOptions | undefined;

type ScrollFn = ((
        this: Sortable,
        offsetX: number,
        offsetY: number,
        originalEvent: Event,
        touchEvt: TouchEvent,
        hoverTargetEl: HTMLElement,
    ) => 'continue' | void) | undefined;
`,paraId:2,tocIndex:1},{value:"Parameter",paraId:3,tocIndex:2},{value:"Description",paraId:3,tocIndex:2},{value:"Type",paraId:3,tocIndex:2},{value:"Default",paraId:3,tocIndex:2},{value:"animation",paraId:3,tocIndex:2},{value:"Show animation while dragging",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"0",paraId:3,tocIndex:2},{value:"chosenClass",paraId:3,tocIndex:2},{value:"CSS class name for chosen item",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"'sortable-chosen'",paraId:3,tocIndex:2},{value:"delay",paraId:3,tocIndex:2},{value:"Delay in milliseconds before drag starts",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"0",paraId:3,tocIndex:2},{value:"delayOnTouchOnly",paraId:3,tocIndex:2},{value:"Delay on touch event",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"0",paraId:3,tocIndex:2},{value:"direction",paraId:3,tocIndex:2},{value:"Dragging direction, ",paraId:3,tocIndex:2},{value:"vertical",paraId:3,tocIndex:2},{value:" or ",paraId:3,tocIndex:2},{value:"horizontal",paraId:3,tocIndex:2},{value:" (default auto detect)",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"disabled",paraId:3,tocIndex:2},{value:"Disable dragging",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"dragClass",paraId:3,tocIndex:2},{value:"CSS class name for dragged item",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"'sortable-drag'",paraId:3,tocIndex:2},{value:"draggable",paraId:3,tocIndex:2},{value:"Selector for draggable items within element",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"emptyInsertThreshold",paraId:3,tocIndex:2},{value:"Distance (in pixels) from empty sortable items where dragging element should be inserted. Set to ",paraId:3,tocIndex:2},{value:"0",paraId:3,tocIndex:2},{value:" to disable this feature.",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"5",paraId:3,tocIndex:2},{value:"easing",paraId:3,tocIndex:2},{value:"Animation easing",paraId:3,tocIndex:2},{value:"Easing",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"fallbackClass",paraId:3,tocIndex:2},{value:"CSS class name for cloned DOM elements when using forceFallback",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"sortable-fallback",paraId:3,tocIndex:2},{value:"fallbackOnBody",paraId:3,tocIndex:2},{value:"Append cloned DOM element to body element",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"fallbackTolerance",paraId:3,tocIndex:2},{value:"Pixels mouse must move before drag start when using forceFallback",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"0",paraId:3,tocIndex:2},{value:"filter",paraId:3,tocIndex:2},{value:"Selector for items that should not be draggable",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"forceFallback",paraId:3,tocIndex:2},{value:"Ignore HTML5 drag and drop behavior and force fallback",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"ghostClass",paraId:3,tocIndex:2},{value:"CSS class name for drop placeholder",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"'sortable-ghost'",paraId:3,tocIndex:2},{value:"group",paraId:3,tocIndex:2},{value:"Group items to drag between sortable lists. Both lists must have the same ",paraId:3,tocIndex:2},{value:"group",paraId:3,tocIndex:2},{value:" value. Also define whether lists can be dragged out of, cloned, or receive elements from other lists. See TypeScript type definition above for details.",paraId:3,tocIndex:2},{value:"Group",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"handle",paraId:3,tocIndex:2},{value:"Selector for handle to initiate drag. If not set, the target element's children are used",paraId:3,tocIndex:2},{value:"String",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"invertSwap",paraId:3,tocIndex:2},{value:"Always use inverted swap zone if set to true",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"invertedSwapThreshold",paraId:3,tocIndex:2},{value:"Inverted swap zone threshold, defaults to ",paraId:3,tocIndex:2},{value:"swapThreshold",paraId:3,tocIndex:2},{value:" value",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"preventOnFilter",paraId:3,tocIndex:2},{value:"Call ",paraId:3,tocIndex:2},{value:"event.preventDefault()",paraId:3,tocIndex:2},{value:" on filter event",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"true",paraId:3,tocIndex:2},{value:"removeCloneOnHide",paraId:3,tocIndex:2},{value:"Remove instead of hiding cloned element when not displayed",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"true",paraId:3,tocIndex:2},{value:"sort",paraId:3,tocIndex:2},{value:"Allow list items to be sorted within container",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"true",paraId:3,tocIndex:2},{value:"swapThreshold",paraId:3,tocIndex:2},{value:"Swap zone threshold",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"1",paraId:3,tocIndex:2},{value:"touchStartThreshold",paraId:3,tocIndex:2},{value:"Pixels before cancelling delay touch event",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"1",paraId:3,tocIndex:2},{value:"setData",paraId:3,tocIndex:2},{value:"Pass a function where the first argument is of type ",paraId:3,tocIndex:2},{value:"DataTransfer",paraId:3,tocIndex:2},{value:" and the second argument is of type ",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:"Function",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"scroll",paraId:3,tocIndex:2},{value:"Enable scrolling",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:"scrollFn",paraId:3,tocIndex:2},{value:"Custom scroll function",paraId:3,tocIndex:2},{value:"ScrollFn",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"scrollSensitivity",paraId:3,tocIndex:2},{value:"The distance in pixels the mouse must be to the edge to start scrolling",paraId:3,tocIndex:2},{value:"Number",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"scrollSpeed",paraId:3,tocIndex:2},{value:"The scrolling speed in ms/px",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"bubbleScroll",paraId:3,tocIndex:2},{value:"Enables automatic scrolling for all parent elements to make it easier to move items",paraId:3,tocIndex:2},{value:"Boolean",paraId:3,tocIndex:2},{value:"true",paraId:3,tocIndex:2},{value:"onChoose",paraId:3,tocIndex:2},{value:"Triggered when an item is selected",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onUnchoose",paraId:3,tocIndex:2},{value:"Triggered when an item is deselected",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onStart",paraId:3,tocIndex:2},{value:"Triggered when an item is picked up for drag and drop",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onEnd",paraId:3,tocIndex:2},{value:"Triggered when an item is no longer being dragged",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onAdd",paraId:3,tocIndex:2},{value:"Triggered when an item is moved from one list to another",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onUpdate",paraId:3,tocIndex:2},{value:"Triggered when the order of the items is updated",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onSort",paraId:3,tocIndex:2},{value:"Triggered whenever any changes are made to the list",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onRemove",paraId:3,tocIndex:2},{value:"Triggered when an item is removed from the list and moved to another",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onFilter",paraId:3,tocIndex:2},{value:"Triggered when trying to drag a filtered item",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onMove",paraId:3,tocIndex:2},{value:"Triggered while an item is being dragged",paraId:3,tocIndex:2},{value:"((event: MoveEvent,originalEvent: Event) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onClone",paraId:3,tocIndex:2},{value:"Triggered when an item is cloned",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:"Triggered when an item is dragged and changes position",paraId:3,tocIndex:2},{value:"((event: DraggableEvent) => void)",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"The component's props include all options from ",paraId:4,tocIndex:4},{value:"Sortablejs",paraId:4,tocIndex:4},{value:" and can be passed to the component. For details, see ",paraId:4,tocIndex:4},{value:"Options",paraId:5,tocIndex:4},{value:".",paraId:4,tocIndex:4},{value:"Parameter",paraId:6,tocIndex:4},{value:"Description",paraId:6,tocIndex:4},{value:"Required",paraId:6,tocIndex:4},{value:"Default",paraId:6,tocIndex:4},{value:"list",paraId:6,tocIndex:4},{value:"Pass the list data",paraId:6,tocIndex:4},{value:"yes",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"setList",paraId:6,tocIndex:4},{value:"Triggered when data is modified",paraId:6,tocIndex:4},{value:"yes",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"tag",paraId:6,tocIndex:4},{value:"The tag name of the component's root element",paraId:6,tocIndex:4},{value:"No",paraId:6,tocIndex:4},{value:"div",paraId:6,tocIndex:4},{value:"target",paraId:6,tocIndex:4},{value:"Specifies the target container. If not provided, the component's root element is used as the container. See ",paraId:6,tocIndex:4},{value:"Target Container",paraId:7,tocIndex:4},{value:" for details.",paraId:6,tocIndex:4},{value:"No",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4}]},70646:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(72478);const n=[{value:"Drag and drop sorting module, react >=16.8",paraId:0,tocIndex:0},{value:"Since the ",paraId:1,tocIndex:1},{value:"react",paraId:1,tocIndex:1},{value:" component of ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" has not been updated, it has been seriously out of touch with ",paraId:1,tocIndex:1},{value:"react",paraId:1,tocIndex:1},{value:", so this project was born. This component is based on ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:", so if you want to know more about ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:", you can check it out ",paraId:1,tocIndex:1},{value:"Sortablejs",paraId:1,tocIndex:1},{value:" official website",paraId:1,tocIndex:1},{value:"We have encapsulated a variety of usages for this, you can use components, function, or instructions, there is always one that suits you",paraId:2,tocIndex:1},{value:"In ",paraId:3,tocIndex:2},{value:"Sortablejs",paraId:3,tocIndex:2},{value:" official ",paraId:3,tocIndex:2},{value:"React",paraId:3,tocIndex:2},{value:" components in the past, the drag-and-drop list is implemented by using the component as a direct child element of the list. When we use some component libraries, if there is no slot for the root element of the list in the component library , it is difficult for us to implement a drag list, react-draggable-plus perfectly solves this problem, it allows you to use a drag list on any element, we can use the selector of the specified element to get the root element of the list, and then Use the root element of the list as ",paraId:3,tocIndex:2},{value:"container",paraId:3,tocIndex:2},{value:" of ",paraId:3,tocIndex:2},{value:"Sortablejs",paraId:3,tocIndex:2},{value:", for details, refer to ",paraId:3,tocIndex:2},{value:"specify target container",paraId:4,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:`import React, { useRef, useState } from "react"
import { ReactDraggablePlush } from "react-draggable-plus"
const Demo = () => {
  const el = useRef<any>(null)
  const [list, setList] = useState([{
    name: 'Joao',
    id: 1
  },
  {
    name: 'Jean',
    id: 2
  },
  {
    name: 'Johanna',
    id: 3
  },
  {
    name: 'Juan',
    id: 4
  }])
  return <>
    <ReactDraggablePlush
      ref={el}
      list={list}
      setList={setList}
      animation={150}
      ghostClass="ghost"
      className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded"
    >
      {
        list.map(item => {
          return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
        })
      }
    </ReactDraggablePlush>
  </>
}
export default Demo
`,paraId:5,tocIndex:5},{value:`import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
const Function = () => {
  const el = useRef<any>(null)
  const [list, setList] = useState([{
    name: 'Joao',
    id: 1
  },
  {
    name: 'Jean',
    id: 2
  },
  {
    name: 'Johanna',
    id: 3
  },
  {
    name: 'Juan',
    id: 4
  }])
  const { start } = useDraggable(el, list, setList, {
    animation: 150,
    ghostClass: 'ghost',
    onStart() {
      console.log('start')
    },
    onUpdate() {
      console.log('update')
    }
  })
  return <div className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded" ref={el}>
    {
      list.map(item => {
        return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
      })
    }
  </div>
}
export default Function
`,paraId:6,tocIndex:6}]}}]);
