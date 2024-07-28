import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import IconClose from "react-draggable-plus/builtins/IconClose"
import IconSort from "react-draggable-plus/builtins/IconSort"

const Function = () => {
  const el = useRef(null)
  const [list, setList] = useState([{
    name: 'Joao',
    id: '1'
  },
  {
    name: 'Jean',
    id: '2'
  },
  {
    name: 'Johanna',
    id: '3'
  },
  {
    name: 'Juan',
    id: '4'
  }])
  const handleAdd = () => {
    const length = list.length + 1
    setList([...list, {
      name: `Juan ${length}`,
      id: `${length}`
    }])
  }
  const remove = (index) => {
    list.splice(index, 1)
    setList([...list]);
  }
  const handleChange = (event, index)=> {
    const node = list[index]
    node.name = event.target.value
    list.splice(index, 1, node)
    setList([...list]);
  }
  useDraggable(el, list, setList, { animation: 150, handle: '.handle' })

  return <>
    <button type="button" onClick={handleAdd}>Add</button>
    <div className="flex m-t-20px">
      <div className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded" ref={el}>
        {
            list.map((item, index) => {
              return <div
                  key={item.id}
                  className="h-50px bg-gray-500/5 rounded flex items-center justify-between px-4"
                >
                  <IconSort className="handle cursor-move"></IconSort>
                  <input type="text" value={item.name} onChange={ (event) => handleChange(event, index)}/>
                  <IconClose className="cursor-pointer" index={index} onClick={() => remove(index)}></IconClose>
                </div>
            })
        }
      </div>
      <PreviewList list={list} />
    </div>
  </>
}
export default Function
