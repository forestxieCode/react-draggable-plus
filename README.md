# react-draggable-plus

[![NPM version](https://img.shields.io/npm/v/react-draggable-plus.svg?style=flat)](https://npmjs.org/package/react-draggable-plus)
[![NPM downloads](http://img.shields.io/npm/dm/react-draggable-plus.svg?style=flat)](https://npmjs.org/package/react-draggable-plus)


[中文文档](https://forestxiecode.github.io/react-draggable-plus)

Drag and drop sorting module, support React>=16.8

## Describe

Since the `React` component of `Sortablejs` has not been updated, it has been seriously out of touch with `React`, so this project was born. This component is based on `Sortablejs`, so if you want to know more about `Sortablejs`, you can check it out [`Sortablejs` official website](https://github.com/SortableJS/Sortable)

We have encapsulated a variety of usages for this, you can use components, function, or instructions, there is always one that suits you

## Solve pain points

In `Sortablejs` official `React` components in the past, the drag-and-drop list is implemented by using the component as a direct child element of the list. When we use some component libraries, if there is no slot for the root element of the list in the component library , it is difficult for us to implement a drag list, vue-draggable-plus perfectly solves this problem, it allows you to use a drag list on any element, we can use the selector of the specified element to get the root element of the list, and then Use the root element of the list as `container` of `Sortablejs`, for details, refer to [specify target container](/src/target-container/).


## Install

```bash

npm install react-draggable-plus

```

## Usage

### Component usage

```ts
import React, { useRef, useState } from "react"
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
```

### Function Usage

```ts
import React, { useRef, useState } from "react"
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
```

> For information on using Hooks and directives, please refer to the documentation.

## Options

`Options` inherits all configuration items from `Sortablejs`. For details, please see the [`Sortablejs` official documentation](https://github.com/SortableJS/Sortable).

### Types
```ts
type Easing =
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
```

## API

| Parameter                | Description                                                                                 | Type                                                  | Default              |
|-------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------|----------------------|
| animation               | Show animation while dragging                                                               | `Number`                                              | 0                     |
| chosenClass             | CSS class name for chosen item                                                              | `String`                                              | 'sortable-chosen'     |
| delay                   | Delay in milliseconds before drag starts                                                    | `Number`                                              | 0                     |
| delayOnTouchOnly        | Delay on touch event                                                                        | `Number`                                              | 0                     |
| direction               | Dragging direction, 'vertical' or 'horizontal' (default auto detect)                         | `String`                                              | -                     |
| disabled                | Disable dragging                                                                            | `Boolean`                                             | false                 |
| dragClass               | CSS class name for dragged item                                                              | `String`                                              | 'sortable-drag'       |
| draggable               | Selector for draggable items within element                                                  | `String`                                              | -                     |
| emptyInsertThreshold    | Distance (in pixels) from empty sortable items where dragging element should be inserted. Set to `0` to disable this feature.  | `Number`                                              | 5                     |
| easing                  | Animation easing                                                                            | `Easing`                                              | -                     |
| fallbackClass           | CSS class name for cloned DOM elements when using forceFallback                               | `String`                                              | `sortable-fallback`   |
| fallbackOnBody          | Append cloned DOM element to body element                                                    | `Boolean`                                             | `false`               |
| fallbackTolerance       | Pixels mouse must move before drag start when using forceFallback                             | `Number`                                              | 0                     |
| filter                  | Selector for items that should not be draggable                                               | `String`                                              | -                     |
| forceFallback           | Ignore HTML5 drag and drop behavior and force fallback                                        | `Boolean`                                             | `false`               |
| ghostClass              | CSS class name for drop placeholder                                                          | `String`                                              | 'sortable-ghost'      |
| group                   | Group items to drag between sortable lists. Both lists must have the same `group` value. Also define whether lists can be dragged out of, cloned, or receive elements from other lists. See TypeScript type definition above for details. | `Group`                                               | -                     |
| handle                  | Selector for handle to initiate drag. If not set, the target element's children are used        | `String`                                              | -                     |
| invertSwap              | Always use inverted swap zone if set to true                                                  | `Boolean`                                             | `false`               |
| invertedSwapThreshold   | Inverted swap zone threshold, defaults to `swapThreshold` value                                | `Number`                                              | -                     |
| preventOnFilter         | Call `event.preventDefault()` on filter event                                                | `Boolean`                                             | `true`                |
| removeCloneOnHide       | Remove instead of hiding cloned element when not displayed                                     | `Boolean`                                             | `true`                |
| sort                    | Allow list items to be sorted within container                                                 | `Boolean`                                             | `true`                |
| swapThreshold           | Swap zone threshold                                                                         | `Number`                                              | 1                     |
| touchStartThreshold     | Pixels before cancelling delay touch event                                                   | `Number`                                              | 1                     |
| setData                 | Pass a function where the first argument is of type `DataTransfer` and the second argument is of type `HTMLElement` | `Function`                                            | -                     |
| scroll                  | Enable scrolling                                                                            | `Boolean`                                             | `HTMLElement`         | `true`                |
| scrollFn                | Custom scroll function                                                                      | `ScrollFn`                                            | -                     |
| scrollSensitivity     | The distance in pixels the mouse must be to the edge to start scrolling                | `Number`                                             | -                    |
| scrollSpeed           | The scrolling speed in ms/px                                                          | `number`                                             | -                    |
| bubbleScroll          | Enables automatic scrolling for all parent elements to make it easier to move items   | `Boolean`                                            | `true`               |
| onChoose              | Triggered when an item is selected                                                      | `((event: SortableEvent) => void)`                   | -                    |
| onUnchoose            | Triggered when an item is deselected                                                    | `((event: SortableEvent) => void)`                   | -                    |
| onStart               | Triggered when an item is picked up for drag and drop                                    | `((event: SortableEvent) => void)`                   | -                    |
| onEnd                 | Triggered when an item is no longer being dragged                                       | `((event: SortableEvent) => void)`                   | -                    |
| onAdd                 | Triggered when an item is moved from one list to another                                 | `((event: SortableEvent) => void)`                   | -                    |
| onUpdate              | Triggered when the order of the items is updated                                        | `((event: SortableEvent) => void)`                   | -                    |
| onSort                | Triggered whenever any changes are made to the list                                     | `((event: SortableEvent) => void)`                   | -                    |
| onRemove              | Triggered when an item is removed from the list and moved to another                     | `((event: SortableEvent) => void)`                   | -                    |
| onFilter              | Triggered when trying to drag a filtered item                                            | `((event: SortableEvent) => void)`                   | -                    |
| onMove                | Triggered while an item is being dragged                                                | `((event: MoveEvent,originalEvent: Event) => void)`   | -                    |
| onClone               | Triggered when an item is cloned                                                         | `((event: SortableEvent) => void)`                   | -                    |
| onChange              | Triggered when an item is dragged and changes position                                   | `((event: SortableEvent) => void)`                   | -                    |

## LICENSE

MIT
