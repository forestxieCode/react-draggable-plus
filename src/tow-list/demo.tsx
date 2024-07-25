import React, { useRef, useState } from "react"
import { ReactDraggablePlush } from 'react-draggable-plus'
import PreviewList from "react-draggable-plus/builtins/PreviewList"

const Demo = () => {
  const el = useRef<any>(null)
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
  const addHandle = () => {
    console.log('add')
  }
  const updateHandle = () => {
    console.log('update')
  }
  const removeHandle = () => {
    console.log('remove')
  }

  return <>
      <div className="flex">
        <ReactDraggablePlush
          ref={el}
          list={list}
          setList={setList}
          animation={150}
          ghostClass="ghost"
          group="people"
          className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
          onAdd={addHandle}
          onUpdate={updateHandle}
          onRemove={removeHandle}
        >
          {
            list.map(item => {
              return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
            })
          }
        </ReactDraggablePlush>
        <ReactDraggablePlush
          ref={el}
          list={list2}
          setList={setList2}
          animation={150}
          ghostClass="ghost"
          group="people"
          className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
          onAdd={addHandle}
          onUpdate={updateHandle}
          onRemove={removeHandle}
        >
          {
            list2.map(item => {
              return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
            })
          }
        </ReactDraggablePlush>
    </div>
    <div className="flex justify-between m-t-50px">
     <PreviewList list={list} className="m-auto"></PreviewList>
     <PreviewList list={list2} className="m-auto"></PreviewList>
    </div>
  </>
}
export default Demo
