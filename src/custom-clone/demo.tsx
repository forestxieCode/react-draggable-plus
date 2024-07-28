import React, { useState } from "react"
import { ReactDraggablePlus } from 'react-draggable-plus'
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import Sortable from "sortablejs"

const Demo = () => {
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
  const [list, setList] = useState(data)
  const [list2, setList2] = useState(data.map(item => ({
    name: `${item.name}-2`,
    id: `${item.id}-2`
  })))

  const group:Sortable.GroupOptions =  { name: "people", pull: "clone" , put: false }

  const onClone = (element: Record<'name' | 'id', string>) => {
    const len = list2.length
    return {
      name: `${element.name}-clone-${len}`,
      id: `${element.id}-clone-${len}`
    }
  }

  return <>
    <div className="flex">
      <ReactDraggablePlus
        list={list}
        setList={setList}
        animation={150}
        group={ group }
        sort={false}
        className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
        clone={onClone}
      >
        {
          list.map(item => {
            return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
          })
        }
      </ReactDraggablePlus>
      <ReactDraggablePlus
        list={list2}
        setList={setList2}
        animation={150}
        group="people"
        className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
      >
        {
            list2.map(item => {
              return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
            })
          }
      </ReactDraggablePlus>
    </div>
    <div className="flex justify-between">
      <PreviewList list={list} className="m-auto"></PreviewList>
      <PreviewList list={list2} className="m-auto"></PreviewList>
    </div>
  </>
}

export default Demo
