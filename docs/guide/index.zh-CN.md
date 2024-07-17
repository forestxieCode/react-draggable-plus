---
nav:
  title: 指南
  path: /guide
---

# react-draggable-plus
拖拽排序模块，支持 react >=18.0

## 使用说明
在 `Sortablejs` 官方以往的 `Vue` 组件中，都是通过使用组件作为列表的直接子元素来实现拖拽列表，当我们使用一些组件库时，如果组件库中没有提供列表根元素的插槽，我们很难实现拖拽列表，vue-draggable-plus 完美解决了这个问题，它可以让你在任何元素上使用拖拽列表，我们可以使用指定元素的选择器，来获取到列表根元素，然后将列表根元素作为 `Sortablejs` 的 `container`，详情参考[指定目标容器](/demo/target-container/)。

## 安装

```bash
npm install react-draggable-plus
```

## 使用

### 组件方式

```ts
<template>
    <VueDraggable ref="el" v-model="list">
      <div v-for="item in list" :key="item.id">
        {{ item.name }}
      </div>
    </VueDraggable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
const list = ref([
  {
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
  }
])
</script>
```
