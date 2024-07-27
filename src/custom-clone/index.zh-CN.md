--- 
title: 自定义克隆
nav:
  title: 演示
  order: 4
toc: content
---

# 自定义克隆

我们可以通过 `clone` 属性传递一个函数，来自定义克隆的节点，内部使用 `JSON.parse(JSON.stringify())`实现克隆，您也可以选择使用 `lodash` 或者其他第三方库的方式进行克隆，此功能常用与低代码场景，比如拖拽表单元素到画布中，需要克隆一个新的组件元素。

我们在使用该功能时，需要注意：
1. 被克隆组件的 `group` 属性中的 `pull` 属性必须为 `clone`，否则无法克隆。
2. 被克隆组件中的 `group` 中的 `name` 属性必须与克隆组件的 `group` 中的 `name` 属性一致，否则无法克隆。

<Alert>
注意：当我们使用 `clone` 属性时，需要重新生成一个唯一的 `key`，否则会导致组件渲染异常。
</Alert>

## 组件使用

<code src="./demo.tsx"
title="使用组件自定义克隆"
description="使用组件属性进行自定义克隆">
</code>


## 函数使用

<code src="./function.tsx"
title="自定义克隆"
description="传递 clone 属性，实现自定义克隆">
</code>
