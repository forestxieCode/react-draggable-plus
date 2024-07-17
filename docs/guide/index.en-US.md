---
nav:
  title: Guide
  path: /guide
---


# react-draggable-plus

Drag and drop sorting module, react >= 18.0


## Description

Since the `react` component of `Sortablejs` has not been updated, it has been seriously out of touch with `react`, so this project was born. This component is based on `Sortablejs`, so if you want to know more about `Sortablejs`, you can check it out [`Sortablejs` official website](https://github.com/SortableJS/Sortable)

We have encapsulated a variety of usages for this, you can use components, function, or instructions, there is always one that suits you

## Solve pain points

In `Sortablejs` official `Vue` components in the past, the drag-and-drop list is implemented by using the component as a direct child element of the list. When we use some component libraries, if there is no slot for the root element of the list in the component library , it is difficult for us to implement a drag list, vue-draggable-plus perfectly solves this problem, it allows you to use a drag list on any element, we can use the selector of the specified element to get the root element of the list, and then Use the root element of the list as `container` of `Sortablejs`, for details, refer to [specify target container](/demo/target-container/).

## Install

```bash

npm install react-draggable-plus

```

## Usage

### Component usage

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

