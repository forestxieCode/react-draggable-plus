import React, { useRef, useState } from 'react';
import { ReactDraggablePlus } from 'react-draggable-plus';
import PreviewList from 'react-draggable-plus/builtins/PreviewList';
import ATable from './ATable';

const Demo = () => {
  const [list, setList] = useState([
    {
      name: 'Joao',
      id: 1,
    },
    {
      name: 'Jean',
      id: 2,
    },
    {
      name: 'Johanna',
      id: 3,
    },
    {
      name: 'Juan',
      id: 4,
    },
  ]);
  const atEl = useRef(null)
  return (
    <div>
      <div>
        <ReactDraggablePlus list={list} setList={setList} animation={150} target={atEl}>
          <ATable list={list} ref={atEl}></ATable>
        </ReactDraggablePlus>
      </div>
      <div className="flex justify-between">
        <PreviewList list={list} />
      </div>
    </div>
  );
};

export default Demo;
