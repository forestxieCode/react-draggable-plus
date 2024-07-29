import React, { forwardRef } from 'react';

const ATable = (props, ref) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody ref={ref}>
        {props?.list?.map((item) => {
          return (
            <tr key={item.name} className="cursor-move">
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default forwardRef(ATable);
