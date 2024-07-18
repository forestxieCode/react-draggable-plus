import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  outputPath: 'docs-dist',
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  themeConfig: defineThemeConfig({
    github: 'https://github.com/forestxieCode/react-draggable-plus',
    name: 'react-draggable-plus',
    title: 'React Draggable Plus',
    description: {
      'zh-CN': '基于Sortablejs封装的 React 拖拽组件',
      'en-US': 'React drag-and-drop component based on Sortablejs wrapping'
    },
    bannerConfigDefault: {
      showBanner: true
    },
    actions: {
      'zh-CN': [{ text: '开始', link: '/guide' }, { type: 'primary', text: '演示', link: '/components/basic' }],
      'en-US': [{ text: 'Start', link: '/guide' }, { type: 'primary', text: 'Demo', link: '/components/basic' }],
    },
    features: {
      'zh-CN': [
        { title: '功能齐全', details: '全面继承 Sortable.js 的所有功能'},
        { title: '灵活使用', details: '支持组件、指令、函数式调用，总有一款是您喜欢的'},
        { title: '自定义容器', details: '将指定容器作为拖拽容器'}
      ],
      'en-US': [
        { title: 'Fully functional', details: 'Full inheritance of all the features of Sortable.js'},
        { title: 'Use flexibly', details: 'Support components, instructions, and function calls, there is always one you like'},
        { title: 'Custom containers', details: 'Drag and drop the specified container'}
      ],
    },
  }),
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss')
  ],
  unocss: {
    watch: ['src/**/*.tsx']
  },
});
