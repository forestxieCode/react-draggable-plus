---
title: 使用说明
nav:
  title: 指南
  path: /guide
---

# react-draggable-plus
拖拽排序模块，支持 react >=16.0

## 使用说明
由于 `Sortablejs` 的 `react` 组件一直没有更新，已经跟 `react` 严重脱节，所以诞生了这个项目，这个组件是基于 `Sortablejs` 的，所以如果你想了解更多关于 `Sortablejs` 的信息，可以查看[Sortablejs 官网](https://github.com/SortableJS/Sortable)。

我们对此封装了多种用法，您可以使用组件的方式，也可以使用函数的方式，也可以使用指令的方式，总有一款适合您。

## 解决痛点

在 `Sortablejs` 官方以往的 `React` 组件中，都是通过使用组件作为列表的直接子元素来实现拖拽列表，当我们使用一些组件库时，如果组件库中没有提供列表根元素的插槽，我们很难实现拖拽列表，react-draggable-plus 完美解决了这个问题，它可以让你在任何元素上使用拖拽列表，我们可以使用指定元素的选择器，来获取到列表根元素，然后将列表根元素作为 `Sortablejs` 的 `container`，详情参考[指定目标容器](/demo/target-container/)。

## 安装

<InstallDependencies 
  npm='$ npm install react-draggable-plus ' 
  yarn='$ yarn add react-draggable-plus' 
  pnpm='$ pnpm install react-draggable-plus ' 
/>
</InstallDependencies>

## 使用

### 组件方式

```ts
import React, { useRef, useState } from "react"
import { ReactDraggablePlush } from 'react-draggable-plus'
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

### 函数方式

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
  const changeListHanlde = (item: any[]) => {
    setList([...item])
  }
  const { start } = useDraggable(el, list, changeListHanlde, {
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
