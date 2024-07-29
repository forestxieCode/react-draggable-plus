--- 
title: 克隆
nav:
  title: 演示
  order: 3
toc: content
---

# 拖拽克隆

从一个列表中拖拽克隆到另一个列表，可以通过 `clone` 属性来开启它，内部默认使用 `JSON.parse(JSON.stringify())` 来实现克隆，如果您需要传递自定义函数，请使用 `clone` 属性传递函数，使用方式[自定义克隆](../custom-clone/index.zh-CN.md)。

我们在使用该功能时，需要注意：
1. 被克隆组件的 `group` 属性中的 `pull` 属性必须为 `clone`，否则无法克隆。
2. 被克隆组件中的 `group` 中的 `name` 属性必须与克隆组件的 `group` 中的 `name` 属性一致，否则无法克隆。



<Alert>

注意：当我们使用 `clone` 属性时，需要重新生成一个唯一的 `key`，否则会导致组件渲染异常。

</Alert>

## 组件使用

<code src="./demo.tsx"
title="使用组件实现克隆"
description="通过group的pull.clone属性传递，实现clone">
</code>

## 函数使用

<code src="./function.tsx"
title="使用函数实现克隆"
description="使用函数传递 options 实现克隆">
</code>
