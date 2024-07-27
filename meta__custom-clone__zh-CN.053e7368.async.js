"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[978],{103:function(L,d,e){e.r(d),e.d(d,{demos:function(){return h}});var D=e(90228),f=e.n(D),y=e(87999),b=e.n(y),I=e(75271),$=e(69190),h={"src-custom-clone-demo-demo":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,13740))})),asset:{type:"BLOCK",id:"src-custom-clone-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41823).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u4F7F\u7528\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u514B\u9686",description:"\u4F7F\u7528\u7EC4\u4EF6\u5C5E\u6027\u8FDB\u884C\u81EA\u5B9A\u4E49\u514B\u9686"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var O=b()(f()().mark(function A(){var x,R=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(x=c.sent).default.apply(x,R));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}},"src-custom-clone-demo-function":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,94454))})),asset:{type:"BLOCK",id:"src-custom-clone-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(81960).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u514B\u9686",description:"\u4F20\u9012 clone \u5C5E\u6027\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u514B\u9686"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var O=b()(f()().mark(function A(){var x,R=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(x=c.sent).default.apply(x,R));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}}}},24462:function(L,d,e){e.r(d);var D=e(75271),f=e(82187),y=e.n(f),b=e(52676),I=function(h){return(0,b.jsx)("pre",{className:y()("code-block",h==null?void 0:h.className),children:JSON.stringify(h.list,null,2)})};d.default=I},85614:function(L,d,e){e.r(d),e.d(d,{ReactDraggablePlush:function(){return hn},useDraggable:function(){return H}});var D=e(26068),f=e.n(D),y=e(67825),b=e.n(y),I=e(15558),$=e.n(I),h=e(48305),O=e.n(h),v=e(75271),A=e(74233),x="[react-draggable-plus]: ";function R(n){console.warn(x+n)}function j(n){console.error(x+n)}function c(n,t,r){return r>=0&&r<n.length&&n.splice(r,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,r){return r?r.toUpperCase():""})}function Cn(n){return Object.keys(n).reduce(function(t,r){return typeof n[r]!="undefined"&&(t[tn(r)]=n[r]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function rn(n,t,r){return Array.isArray(n)&&n.splice(t,0,r),n}function ln(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function w(n,t,r){var o=n.children[r];n.insertBefore(t,o)}function U(n){n.parentNode&&n.parentNode.removeChild(n)}function Tn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var o;r=t==null||(o=t.querySelector)===null||o===void 0?void 0:o.call(t,n)}else r=document.querySelector(n);return r||warn("Element not found: ".concat(n)),r}function on(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return n.apply(r,s),t.apply(r,s)}}function un(n,t){var r=f()({},n);return Object.keys(t).forEach(function(o){r[o]?r[o]=on(n[o],t[o]):r[o]=t[o]}),r}function sn(n){return n instanceof HTMLElement}function _(n,t){Object.keys(n).forEach(function(r){t(r,n[r])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var z=null,F=null;function G(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z=n,F=t}function vn(){return{data:z,clonedData:F}}var Z=Symbol("cloneElement");function H(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var s=r[0],i=r[1],M=r[2],P=r[3];Array.isArray(i)||(P=i,i=null);var N=(0,v.useState)(null),C=O()(N,2),u=C[0],X=C[1],B=(n=P)!==null&&n!==void 0?n:{},Y=B.immediate,xn=Y===void 0?!0:Y,Q=B.clone,bn=Q===void 0?fn:Q,V=B.customUpdate;function K(a){M&&M($()(a))}function En(a){var l=i[a.oldIndex],m=bn(l);G(l,m),a.item[Z]=m}function Pn(a){var l=a.item[Z];ln(l)||(U(a.item),rn(i,a.newDraggableIndex,l),K(i))}function Ln(a){var l=a.from,m=a.item,g=a.oldIndex,E=a.oldDraggableIndex,S=a.pullMode,J=a.clone;if(w(l,m,g),S==="clone"){U(J);return}an(i,E),K(i)}function Dn(a){if(V){V(a);return}var l=a.from,m=a.item,g=a.oldIndex,E=a.newIndex;U(m),w(l,m,g),c(i,g,E),K(i)}function yn(){requestIdleCallback(function(){G()})}var On={onUpdate:Dn,onStart:En,onAdd:Pn,onRemove:Ln,onEnd:yn};function An(a){var l=s==null?void 0:s.current;return a?a&&!sn(a)?a.$el:(a||j("Root element not found"),a):l}function q(){var a,l=(a=P)!==null&&a!==void 0?a:{},m=l.immediate,g=l.clone,E=b()(l,mn);return _(E,function(S,J){dn(S)&&(E[S]=function(nn){var Mn=vn();cn(nn,Mn);for(var W=arguments.length,en=new Array(W>1?W-1:0),T=1;T<W;T++)en[T-1]=arguments[T];J.apply(void 0,[nn].concat(en))})}),un(i===null?{}:On,E)}var p={option:function(l,m){return u==null?void 0:u.option(l,m)},destroy:function(){u==null||u.destroy(),X(null)},save:function(){return u==null?void 0:u.save()},toArray:function(){return u==null?void 0:u.toArray()},closest:function(){for(var l=arguments.length,m=new Array(l),g=0;g<l;g++)m[g]=arguments[g];return u==null?void 0:u.closest.apply(u,m)}},k=function(l){u&&p.destroy(),X(new A.ZP(An(l),q()))};(0,v.useEffect)(function(){u&&_(q(),function(a,l){u==null||u.option(a,l)})},[P]);var Nn=function(){return p==null?void 0:p.option("disabled",!0)},Rn=function(){return p==null?void 0:p.option("disabled",!1)};return(0,v.useEffect)(function(){return xn&&s!==null&&s!==void 0&&s.current&&k(),function(){s!=null&&s.current&&p.destroy()}},[s]),f()({start:k,pause:Nn,resume:Rn},p)}var gn=["list","setList","className"],pn=function(t,r){var o=t.list,s=o===void 0?[]:o,i=t.setList,M=t.className,P=b()(t,gn),N=(0,v.useRef)(null),C=H((t==null?void 0:t.target)||N,s,i,P);return(0,v.useImperativeHandle)(r,function(){return f()({el:N.current},C)}),v.createElement(t.tag||"div",{ref:N,className:M},t.children)},In=v.forwardRef(pn),hn=In},31220:function(L,d,e){e.r(d),e.d(d,{texts:function(){return f}});var D=e(69190);const f=[{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\uFF0C\u6765\u81EA\u5B9A\u4E49\u514B\u9686\u7684\u8282\u70B9\uFF0C\u5185\u90E8\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"JSON.parse(JSON.stringify())",paraId:0,tocIndex:0},{value:"\u5B9E\u73B0\u514B\u9686\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"lodash",paraId:0,tocIndex:0},{value:" \u6216\u8005\u5176\u4ED6\u7B2C\u4E09\u65B9\u5E93\u7684\u65B9\u5F0F\u8FDB\u884C\u514B\u9686\uFF0C\u6B64\u529F\u80FD\u5E38\u7528\u4E0E\u4F4E\u4EE3\u7801\u573A\u666F\uFF0C\u6BD4\u5982\u62D6\u62FD\u8868\u5355\u5143\u7D20\u5230\u753B\u5E03\u4E2D\uFF0C\u9700\u8981\u514B\u9686\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\u5143\u7D20\u3002",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u5728\u4F7F\u7528\u8BE5\u529F\u80FD\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\uFF1A",paraId:1,tocIndex:0},{value:"\u88AB\u514B\u9686\u7EC4\u4EF6\u7684 ",paraId:2,tocIndex:0},{value:"group",paraId:2,tocIndex:0},{value:" \u5C5E\u6027\u4E2D\u7684 ",paraId:2,tocIndex:0},{value:"pull",paraId:2,tocIndex:0},{value:" \u5C5E\u6027\u5FC5\u987B\u4E3A ",paraId:2,tocIndex:0},{value:"clone",paraId:2,tocIndex:0},{value:"\uFF0C\u5426\u5219\u65E0\u6CD5\u514B\u9686\u3002",paraId:2,tocIndex:0},{value:"\u88AB\u514B\u9686\u7EC4\u4EF6\u4E2D\u7684 ",paraId:2,tocIndex:0},{value:"group",paraId:2,tocIndex:0},{value:" \u4E2D\u7684 ",paraId:2,tocIndex:0},{value:"name",paraId:2,tocIndex:0},{value:" \u5C5E\u6027\u5FC5\u987B\u4E0E\u514B\u9686\u7EC4\u4EF6\u7684 ",paraId:2,tocIndex:0},{value:"group",paraId:2,tocIndex:0},{value:" \u4E2D\u7684 ",paraId:2,tocIndex:0},{value:"name",paraId:2,tocIndex:0},{value:" \u5C5E\u6027\u4E00\u81F4\uFF0C\u5426\u5219\u65E0\u6CD5\u514B\u9686\u3002",paraId:2,tocIndex:0},{value:"\n\u6CE8\u610F\uFF1A\u5F53\u6211\u4EEC\u4F7F\u7528 `clone` \u5C5E\u6027\u65F6\uFF0C\u9700\u8981\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u552F\u4E00\u7684 `key`\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u7EC4\u4EF6\u6E32\u67D3\u5F02\u5E38\u3002\n",paraId:3}]},41823:function(L,d){d.Z=`import React, { useState } from "react"
import { ReactDraggablePlush } from 'react-draggable-plus'
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import Sortable from "sortablejs"

const Demo = () => {
  const data = [
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
  ]
  const [list, setList] = useState(data)
  const [list2, setList2] = useState(data.map(item => ({
    name: \`\${item.name}-2\`,
    id: \`\${item.id}-2\`
  })))

  const group:Sortable.GroupOptions =  { name: "people", pull: "clone" , put: false }

  const onClone = (element: Record<'name' | 'id', string>) => {
    const len = list2.length
    return {
      name: \`\${element.name}-clone-\${len}\`,
      id: \`\${element.id}-clone-\${len}\`
    }
  }

  return <>
  <div className="flex">
    <ReactDraggablePlush
      list={list}
      setList={setList}
      animation={150}
      group={ group }
      sort={false}
      className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
      clone={onClone}
    >
      {
        list.map(item => {
          return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
        })
      }
    </ReactDraggablePlush>
    <ReactDraggablePlush
      list={list2}
      setList={setList2}
      animation={150}
      group="people"
      className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
    >
       {
          list2.map(item => {
            return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
          })
        }
    </ReactDraggablePlush>
  </div>
  <div className="flex justify-between">
    <PreviewList list={list} className="m-auto"></PreviewList>
    <PreviewList list={list2} className="m-auto"></PreviewList>
  </div>
  </>
}

export default Demo
`},81960:function(L,d){d.Z=`import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import Sortable from "sortablejs"

const Function = () => {
  const el1 = useRef<any>(null)
  const el2 = useRef<any>(null)

  const data = [
    {
      name: 'Joao',
      id: '1'
    },
    {
      name: 'Jean',
      id: '2'
    },
    {
      name: 'Johanna',
      id:'3'
    },
    {
      name: 'Juan',
      id: '4'
    }
  ]
  const group:Sortable.GroupOptions =  { name: "people", pull: "clone", put: false}
  const [list1, setList1] = useState(data)
  const [list2, setList2] = useState(data.map(item => ({
    name: \`\${item.name}-2\`,
    id: \`\${item.id}-2\`
  })))

  useDraggable(el1, list1, setList1, {
    animation: 150,
    group,
    sort: false,
    clone: (element: Record<'name' | 'id', string>) => {
      const len = list2.length
      return {
        name: \`\${element.name}-clone-\${len}\`,
        id: \`\${element.id}-clone-\${len}\`
      }
    }
  })

  useDraggable(el2, list2, setList2, {
    animation: 150,
    group: 'people',
  })

  return <>
  <div className="flex">
    <div
      className="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
      ref={el1}
    >
      {
        list1.map(item => {
          return <div
          key={item.id}
          className="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
          { item.name }
        </div>
        })
      }
    </div>
    <div
      className="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
      ref={el2}
    >
      {
        list2.map(item => {
          return <div
          key={item.id}
          className="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
          { item.name }
        </div>
        })
      }
    </div>
  </div>
  <div className="flex justify-between">
  <PreviewList list={list1} className="m-auto"></PreviewList>
  <PreviewList list={list2} className="m-auto"></PreviewList>
  </div>
</>
}

export default Function
`}}]);
