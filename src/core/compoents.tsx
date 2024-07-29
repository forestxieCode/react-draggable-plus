import React, { useImperativeHandle, useRef } from 'react'
import { useDraggable, UseDraggableOptions, UseDraggableReturn } from './useDraggable'
import { RefOrElement } from './types'

export interface IDraggableProps extends UseDraggableOptions<any> {
  list: any[]
  setList: (list: any[]) => void
  tag?: string
  target?: RefOrElement
  children?: React.ReactNode;
  className?: string
}

export interface IDraggable extends UseDraggableReturn {
  el: HTMLElement | null
}

const ReactDraggable: React.ForwardRefRenderFunction<IDraggable, IDraggableProps> = (props, ref) => {
  const { list= [], setList, className, ...options } = props
  const target = useRef(null);
  const draggable = useDraggable(props?.target || target, list, setList, options)
  useImperativeHandle(ref, () => ({
    el: target.current,
    ...draggable,
  }));
  return React.createElement(props.tag || 'div', { ref: target, className }, props.children)
}

const ReactDraggablePlus = React.forwardRef(ReactDraggable);

export default ReactDraggablePlus;
