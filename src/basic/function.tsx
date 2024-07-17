import React, { useRef, useState } from "react"
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import { useDraggable } from "react-draggable-plus/useDraggable"

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
  const changeListHanlde = (item: any[]) => {
    setList([...item])
    console.log('after', item)
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
  return <>
    <button type="button" onClick={() => start()}>start</button>
    <div className="flex m-t-20px">
      <div className="flex flex-col gap-2 p-4 w-300px h-300px m-r-40px bg-gray-500/5 rounded" ref={el}>
        {
          list.map(item => {
            return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
          })
        }
      </div>
      <PreviewList list={list} />
    </div>
  </>
}
export default Demo
