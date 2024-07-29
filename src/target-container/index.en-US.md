--- 
title: Specify the target container
nav:
  title: 演示
  order: 5
toc: content
---

# Specify the target container

Since many components that need to be dragged are not our immediate child elements in our usual use, we need to specify a target container to complete the drag function. We can specify the target container through the `target` attribute.

Here we take the third-party component as an example, assuming `a-table` is a third-party component

### ATable.tsx

```ts
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
```

## Component Usage

<code src="./demo.tsx"
title="Use components to manipulate target containers"
description="Locate the ref element specified by target">
</code>

## Function Usage

<code src="./function.tsx"
title="Use function to manipulate target containers"
description="Locate the ref element specified by target">
</code>



