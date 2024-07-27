---
nav:
  title: Guide
  path: /guide
---


# react-draggable-plus

Drag and drop sorting module, react >=16.8


## Description

Since the `react` component of `Sortablejs` has not been updated, it has been seriously out of touch with `react`, so this project was born. This component is based on `Sortablejs`, so if you want to know more about `Sortablejs`, you can check it out [`Sortablejs` official website](https://github.com/SortableJS/Sortable)

We have encapsulated a variety of usages for this, you can use components, function, or instructions, there is always one that suits you


## Solve pain points

In `Sortablejs` official `React` components in the past, the drag-and-drop list is implemented by using the component as a direct child element of the list. When we use some component libraries, if there is no slot for the root element of the list in the component library , it is difficult for us to implement a drag list, react-draggable-plus perfectly solves this problem, it allows you to use a drag list on any element, we can use the selector of the specified element to get the root element of the list, and then Use the root element of the list as `container` of `Sortablejs`, for details, refer to [specify target container](/demo/target-container/).

## Install

<InstallDependencies 
  npm='$ npm install react-draggable-plus ' 
  yarn='$ yarn add react-draggable-plus' 
  pnpm='$ pnpm install react-draggable-plus ' 
/>
</InstallDependencies>

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
