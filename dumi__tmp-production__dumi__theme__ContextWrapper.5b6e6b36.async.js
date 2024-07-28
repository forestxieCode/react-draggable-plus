"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[923],{62709:function(D,o,e){e.r(o),e.d(o,{default:function(){return S}});var b=e(48305),v=e.n(b),a=e(75271),n=e(5215),x=e(28774),C=e(91829),i=null,s=e(59445),y=e(52676),r={},l={name:"react-draggable-plus",description:"Universal Drag-and-Drop Component Supporting React",version:"0.0.3",license:"MIT",repository:{type:"git",url:"https://github.com/forestxieCode/react-draggable-plus"},author:{name:"forest",email:"1397798719@qq.com"}},u="browser",d=void 0,c={logo:"https://vue-draggable-plus.pages.dev/logo.svg",footer:"Made with by <span> forestxieCode | Copyright \xA9 2024-present</span>",prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,github:"https://github.com/forestxieCode/react-draggable-plus",name:"react-draggable-plus",title:"React Draggable Plus",description:{"zh-CN":"\u57FA\u4E8ESortablejs\u5C01\u88C5\u7684 React \u62D6\u62FD\u7EC4\u4EF6","en-US":"React drag-and-drop component based on Sortablejs wrapping"},bannerConfig:{showBanner:!1},loading:{skeleton:["/guide","/api","/components"]},sidebarGroupModePath:["/guide"],nav:{"zh-CN":[{title:"\u6307\u5357",link:"/guide/dev"},{title:"\u914D\u7F6E",link:"/api"},{title:"\u6F14\u793A",link:"/components/basic"}],"en-US":[{title:"Guide",link:"/guide/dev-en"},{title:"Api",link:"/api-en"},{title:"Demo",link:"/components/basic-en"}]},docVersions:{"0.0.3":""},localesEnhance:[{id:"zh-CN",switchPrefix:"\u4E2D"},{id:"en-US",switchPrefix:"en"}],actions:{"zh-CN":[{text:"\u5F00\u59CB",link:"/guide/dev"},{type:"primary",text:"\u6F14\u793A",link:"/components/basic"}],"en-US":[{text:"Start",link:"/guide/dev"},{type:"primary",text:"Demo",link:"/components/basic"}]},features:{"zh-CN":[{title:"\u529F\u80FD\u9F50\u5168",details:"\u5168\u9762\u7EE7\u627F Sortable.js \u7684\u6240\u6709\u529F\u80FD"},{title:"\u7075\u6D3B\u4F7F\u7528",details:"\u652F\u6301\u7EC4\u4EF6\u3001\u51FD\u6570\u5F0F\u8C03\u7528\uFF0C\u603B\u6709\u4E00\u6B3E\u662F\u60A8\u559C\u6B22\u7684"},{title:"\u81EA\u5B9A\u4E49\u5BB9\u5668",details:"\u5C06\u6307\u5B9A\u5BB9\u5668\u4F5C\u4E3A\u62D6\u62FD\u5BB9\u5668"}],"en-US":[{title:"Fully functional",details:"Full inheritance of all the features of Sortable.js"},{title:"Use flexibly",details:"Support components, and function calls, there is always one you like"},{title:"Custom containers",details:"Drag and drop the specified container"}]},footerLinks:[{title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"SortableJS",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://github.com/SortableJS/Sortable",openExternal:!0}]},{title:"\u5E2E\u52A9",items:[{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png",title:"GitHub",url:"https://github.com/forestxieCode/react-draggable-plus",openExternal:!0},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181710-8e63ee99-ed71-4ee6-8507-d5ffac02ca51.png",title:"\u66F4\u65B0\u65E5\u5FD7",url:"/react-draggable-plus/guide/changelog"},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png",title:"\u62A5\u544A Bug",url:"https://github.com/forestxieCode/react-draggable-plus/issues/new",openExternal:!0},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png",title:"\u8BAE\u9898",url:"https://github.com/forestxieCode/react-draggable-plus/issues",openExternal:!0}]},{title:"\u66F4\u591A\u4EA7\u54C1",icon:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",items:[{icon:"https://camo.githubusercontent.com/fc21de86d7ca0befa6f1fff76890a03c117e7b083c4a75e3dd3c117197c1e09b/68747470733a2f2f692e706f7374696d672e63632f476835704c5a33472f6c6f676f2d30332e706e67",title:"\u4F01\u4E1A\u7EC4\u4EF6\u5E93",url:"https://forestxiecode.github.io/fst-ui/#/",description:"\u6784\u5EFA\u516C\u53F8\u7EC4\u4EF6\u5E93",openExternal:!0}]}],sourceLink:"https://github.com/forestxieCode/react-draggable-plus/tree/main/{fileName}#L{line}",editLink:"https://github.com/forestxieCode/react-draggable-plus/edit/main/{filename}"},p=!0;function S(){var k=(0,n.pC)(),z=(0,a.useState)(!1),g=v()(z,2),f=g[0],m=g[1],h=(0,a.useRef)(n.m8.location.pathname);(0,a.useEffect)(function(){return n.m8.listen(function(t){t.location.pathname!==h.current&&(h.current=t.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var E=a.useMemo(function(){var t={pkg:l,historyType:u,entryExports:r,demos:null,components:i,locales:s.k,loading:f,setLoading:m,hostname:d,themeConfig:c,_2_level_nav_available:p};return Object.defineProperty(t,"demos",{get:function(){return(0,x.warning)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),t},[l,u,r,i,s.k,f,m,d,c,p]);return(0,y.jsx)(C.D.Provider,{value:E,children:k})}}}]);
