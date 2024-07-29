import React, { useRef, useState } from 'react';
import { useDraggable } from 'react-draggable-plus';
import PreviewList from 'react-draggable-plus/builtins/PreviewList';
import ATable from './ATable';

const Function = () => {
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
  const atEl = useRef(null);
  useDraggable(atEl, list, setList);

  return (
    <div>
      <ATable list={list} ref={atEl}></ATable>
      <div className="flex justify-between">
        <PreviewList list={list} />
      </div>
    </div>
  );
};

export default Function;
