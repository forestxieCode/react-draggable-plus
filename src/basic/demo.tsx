import React, { useRef, useState } from "react"
import { ReactDraggablePlus } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"

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
  const [disabled, setDisabled] = useState(false)
  const startHandle = () => {
    console.log('start')
  }
  const updateHandle = () => {
    console.log('update')
  }
  const endHandle = () => {
    console.log('end')
  }

  return <>
      <button type="button" onClick={() => el.current?.start()}>start</button>
      <button type="button" onClick={() => el.current?.pause()}>pause</button>
      <button type="button" onClick={ ()=>{ setDisabled(true) }}>disabled</button>
      <div className="flex m-t-20px">
        <ReactDraggablePlus
          ref={el}
          list={list}
          setList={setList}
          disabled={disabled}
          animation={150}
          ghostClass="ghost"
          className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded"
          onStart={startHandle}
          onUpdate={updateHandle}
          onEnd={endHandle}
        >
          {
            list.map(item => {
              return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
            })
          }
        </ReactDraggablePlus>
        <PreviewList list={list}></PreviewList>
    </div>
  </>
}
export default Demo
