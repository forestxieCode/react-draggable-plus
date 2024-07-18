import React, { useImperativeHandle, useRef } from 'react'
import { useDraggable, UseDraggableOptions, UseDraggableReturn } from './useDraggable'

export interface IDraggableProps extends UseDraggableOptions<any> {
  list: any[]
  onChangeList: (list: any[]) => void
  tag?: string
  target?: string
  children?: React.ReactNode;
  className?: string
}

export interface IDraggable extends UseDraggableReturn {
  el: HTMLElement | null
}

const ReactDraggable: React.ForwardRefRenderFunction<IDraggable, IDraggableProps> = (props, ref) => {
  const { list= [], onChangeList, className, ...options } = props
  const target = useRef(null);
  const draggable = useDraggable((props?.target || target) as string, list, onChangeList, options)
  useImperativeHandle(ref, () => ({
    el: target.current,
    ...draggable,
  }));
  return React.createElement(props.tag || 'div', { ref: target, className }, props.children)
}

const ReactDraggablePlus = React.forwardRef(ReactDraggable);

export default ReactDraggablePlus;
