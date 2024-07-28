import { defineConfig } from 'dumi';
import pkgJSON from './package.json';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? "/react-draggable-plus" : "/",
  publicPath: process.env.NODE_ENV === 'production' ? "/react-draggable-plus/" : "/",
  favicons: ['https://vue-draggable-plus.pages.dev/logo.svg'],
  logo: 'https://vue-draggable-plus.pages.dev/logo.svg',
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' }
  ],
  themeConfig: defineThemeConfig({
    lastUpdated: true,
    github: 'https://github.com/forestxieCode/react-draggable-plus',
    name: 'react-draggable-plus',
    title: 'React Draggable Plus',
    description: {
      'zh-CN': '基于Sortablejs封装的 React 拖拽组件',
      'en-US': 'React drag-and-drop component based on Sortablejs wrapping'
    },
    bannerConfig: {
      showBanner: false
    },
    loading: {
      skeleton: ['/guide', '/api', '/components']
    },
    sidebarGroupModePath: ['/guide'],
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide/dev' },
        { title: '配置', link: '/api' },
        { title: '演示', link: '/components/basic' }
      ],
      'en-US': [
        { title: 'Guide', link: '/guide/dev-en' },
        { title: 'Api', link: '/api-en' },
        { title: 'Demo', link: '/components/basic-en' }
      ]
    },
    footer:
      'Made with by <span> forestxieCode | Copyright © 2024-present</span>',
    docVersions: {
      [pkgJSON.version]: ''
    },
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中' },
      { id: 'en-US', switchPrefix: 'en' }
    ],
    actions: {
      'zh-CN': [
        {
          text: '开始',
          link: '/guide/dev'
        },
        {
          type: 'primary',
          text: '演示',
          link: '/components/basic'
        }
      ],
      'en-US': [
        {
          text: 'Start',
          link: '/guide/dev'
        },
        {
          type: 'primary',
          text: 'Demo',
          link: '/components/basic'
        }
      ],
    },
    features: {
      'zh-CN': [
        { title: '功能齐全', details: '全面继承 Sortable.js 的所有功能'},
        { title: '灵活使用', details: '支持组件、函数式调用，总有一款是您喜欢的'},
        { title: '自定义容器', details: '将指定容器作为拖拽容器'}
      ],
      'en-US': [
        { title: 'Fully functional', details: 'Full inheritance of all the features of Sortable.js'},
        { title: 'Use flexibly', details: 'Support components, and function calls, there is always one you like'},
        { title: 'Custom containers', details: 'Drag and drop the specified container'}
      ],
    },
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'SortableJS',
            description: '组件/文档研发工具',
            url: 'https://github.com/SortableJS/Sortable',
            openExternal: true
          }
        ]
      },
      {
        title: '帮助',
        items: [
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
            title: 'GitHub',
            url: 'https://github.com/forestxieCode/react-draggable-plus',
            openExternal: true
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181710-8e63ee99-ed71-4ee6-8507-d5ffac02ca51.png',
            title: '更新日志',
            url: '/react-draggable-plus/guide/changelog'
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png',
            title: '报告 Bug',
            url: 'https://github.com/forestxieCode/react-draggable-plus/issues/new',
            openExternal: true
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png',
            title: '议题',
            url: 'https://github.com/forestxieCode/react-draggable-plus/issues',
            openExternal: true
          }
        ]
      },
      {
        title: '更多产品',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [
          {
            icon: 'https://camo.githubusercontent.com/fc21de86d7ca0befa6f1fff76890a03c117e7b083c4a75e3dd3c117197c1e09b/68747470733a2f2f692e706f7374696d672e63632f476835704c5a33472f6c6f676f2d30332e706e67',
            title: '企业组件库',
            url: 'https://forestxiecode.github.io/fst-ui/#/',
            description: '构建公司组件库',
            openExternal: true
          }
        ]
      }
    ],
  }),
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss')
  ],
  unocss: {
    watch: ['src/**/*.tsx']
  }
});
