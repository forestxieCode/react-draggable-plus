import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"

const Function = () => {
  const el1 = useRef<any>(null)
  const el2 = useRef<any>(null)

  const data = [
    {
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
    }
  ]
  const [list1, setList1] = useState(data)
  const [list2, setList2] = useState(data.map(item => ({
    name: `${item.name}-2`,
    id: `${item.id}-2`
  })))

  useDraggable(el1, list1, setList1, {
    animation: 150,
    ghostClass: 'ghost',
    group: 'people',
    onUpdate: () => {
      console.log('update list1')
    },
    onAdd: () => {
      console.log('add list1')
    },
    onMove: () => {
      console.log('remove list1')
    }
  })

  useDraggable(el2, list2, setList2, {
    animation: 150,
    ghostClass: 'ghost',
    group: 'people',
    onUpdate: () => {
      console.log('update list2')
    },
    onAdd: () => {
      console.log('add list2')
    },
    onMove: () => {
      console.log('remove list2')
    }
  })

  return <>
  <div className="flex">
    <div
      className="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
      ref={el1}
    >
      {
        list1.map(item => {
          return <div
          key={item.id}
          className="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
          { item.name }
        </div>
        })
      }
    </div>
    <div
      className="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
      ref={el2}
    >
      {
        list2.map(item => {
          return <div
          key={item.id}
          className="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
          { item.name }
        </div>
        })
      }
    </div>
  </div>
  <div className="flex justify-between">
  <PreviewList list={list1} className="m-auto"></PreviewList>
  <PreviewList list={list2} className="m-auto"></PreviewList>
  </div>
</>
}

export default Function
