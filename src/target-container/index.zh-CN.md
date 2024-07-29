--- 
title: 指定目标容器
nav:
  title: 演示
  order: 5
toc: content
---

# 指定目标容器

由于我们平时使用的过程中，很多需要拖拽的组件并非我们的直系子元素，所以我们需要指定一个目标容器，来完成拖拽的功能，我们可以通过 `target` 属性来指定目标容器。

此处我们以第三方组件为例，假设`a-table`为第三方组件

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

## 组件使用

<code src="./demo.tsx"
title="使用组件操作目标容器"
description="找到target指定的ref元素">
</code>

## 函数使用

<code src="./function.tsx"
title="使用function操作目标容器"
description="找到target指定的ref元素">
</code>



