"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[4701],{73563:function(L,d,e){e.r(d),e.d(d,{demos:function(){return x}});var D=e(90228),f=e.n(D),y=e(87999),b=e.n(y),I=e(75271),j=e(19910),x={"src-clone-demo-demo":{component:I.memo(I.lazy(function(){return e.e(2433).then(e.bind(e,56337))})),asset:{type:"BLOCK",id:"src-clone-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10377).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"}},entry:"index.tsx",title:"\u4F7F\u7528\u7EC4\u4EF6\u5B9E\u73B0\u514B\u9686",description:"\u901A\u8FC7group\u7684pull.clone\u5C5E\u6027\u4F20\u9012\uFF0C\u5B9E\u73B0clone"},context:{react:e(75271),"react-draggable-plus":e(16637),"react-draggable-plus/builtins/PreviewList":e(62339)},renderOpts:{compile:function(){var O=b()(f()().mark(function A(){var h,C=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(5548).then(e.bind(e,15548));case 2:return c.abrupt("return",(h=c.sent).default.apply(h,C));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}},"src-clone-demo-function":{component:I.memo(I.lazy(function(){return e.e(2433).then(e.bind(e,20345))})),asset:{type:"BLOCK",id:"src-clone-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64506).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"}},entry:"index.tsx",title:"\u4F7F\u7528\u51FD\u6570\u5B9E\u73B0\u514B\u9686",description:"\u4F7F\u7528\u51FD\u6570\u4F20\u9012 options \u5B9E\u73B0\u514B\u9686"},context:{react:e(75271),"react-draggable-plus":e(16637),"react-draggable-plus/builtins/PreviewList":e(62339)},renderOpts:{compile:function(){var O=b()(f()().mark(function A(){var h,C=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(5548).then(e.bind(e,15548));case 2:return c.abrupt("return",(h=c.sent).default.apply(h,C));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}}}},62339:function(L,d,e){e.r(d);var D=e(75271),f=e(82187),y=e.n(f),b=e(52676),I=function(x){return(0,b.jsx)("pre",{className:y()("code-block",x==null?void 0:x.className),children:JSON.stringify(x.list,null,2)})};d.default=I},16637:function(L,d,e){e.r(d),e.d(d,{ReactDraggablePlus:function(){return xn},useDraggable:function(){return _}});var D=e(26068),f=e.n(D),y=e(67825),b=e.n(y),I=e(15558),j=e.n(I),x=e(48305),O=e.n(x),v=e(75271),A=e(74233),h="[react-draggable-plus]: ";function C(n){console.warn(h+n)}function U(n){console.error(h+n)}function c(n,t,r){return r>=0&&r<n.length&&n.splice(r,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,r){return r?r.toUpperCase():""})}function Rn(n){return Object.keys(n).reduce(function(t,r){return typeof n[r]!="undefined"&&(t[tn(r)]=n[r]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function rn(n,t,r){return Array.isArray(n)&&n.splice(t,0,r),n}function on(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function $(n,t,r){var l=n.children[r];n.insertBefore(t,l)}function B(n){n.parentNode&&n.parentNode.removeChild(n)}function Tn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;r=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else r=document.querySelector(n);return r||warn("Element not found: ".concat(n)),r}function ln(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return n.apply(r,s),t.apply(r,s)}}function un(n,t){var r=f()({},n);return Object.keys(t).forEach(function(l){r[l]?r[l]=ln(n[l],t[l]):r[l]=t[l]}),r}function sn(n){return n instanceof HTMLElement}function z(n,t){Object.keys(n).forEach(function(r){t(r,n[r])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var F=null,G=null;function Z(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F=n,G=t}function vn(){return{data:F,clonedData:G}}var H=Symbol("cloneElement");function _(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];var s=r[0],i=r[1],M=r[2],P=r[3];Array.isArray(i)||(P=i,i=null);var N=(0,v.useState)(null),R=O()(N,2),u=R[0],X=R[1],K=(n=P)!==null&&n!==void 0?n:{},Y=K.immediate,hn=Y===void 0?!0:Y,Q=K.clone,bn=Q===void 0?fn:Q,V=K.customUpdate;function J(a){M&&M(j()(a))}function En(a){var o=i[a.oldIndex],m=bn(o);Z(o,m),a.item[H]=m}function Pn(a){var o=a.item[H];on(o)||(B(a.item),rn(i,a.newDraggableIndex,o),J(i))}function Ln(a){var o=a.from,m=a.item,p=a.oldIndex,E=a.oldDraggableIndex,S=a.pullMode,W=a.clone;if($(o,m,p),S==="clone"){B(W);return}an(i,E),J(i)}function Dn(a){if(V){V(a);return}var o=a.from,m=a.item,p=a.oldIndex,E=a.newIndex;B(m),$(o,m,p),c(i,p,E),J(i)}function yn(){requestIdleCallback(function(){Z()})}var On={onUpdate:Dn,onStart:En,onAdd:Pn,onRemove:Ln,onEnd:yn};function An(a){var o=s==null?void 0:s.current;return a?a&&!sn(a)?a.$el:(a||U("Root element not found"),a):o}function q(){var a,o=(a=P)!==null&&a!==void 0?a:{},m=o.immediate,p=o.clone,E=b()(o,mn);return z(E,function(S,W){dn(S)&&(E[S]=function(nn){var Mn=vn();cn(nn,Mn);for(var w=arguments.length,en=new Array(w>1?w-1:0),T=1;T<w;T++)en[T-1]=arguments[T];W.apply(void 0,[nn].concat(en))})}),un(i===null?{}:On,E)}var g={option:function(o,m){return u==null?void 0:u.option(o,m)},destroy:function(){u==null||u.destroy(),X(null)},save:function(){return u==null?void 0:u.save()},toArray:function(){return u==null?void 0:u.toArray()},closest:function(){for(var o=arguments.length,m=new Array(o),p=0;p<o;p++)m[p]=arguments[p];return u==null?void 0:u.closest.apply(u,m)}},k=function(o){u&&g.destroy(),X(new A.ZP(An(o),q()))};(0,v.useEffect)(function(){u&&z(q(),function(a,o){u==null||u.option(a,o)})},[P]);var Nn=function(){return g==null?void 0:g.option("disabled",!0)},Cn=function(){return g==null?void 0:g.option("disabled",!1)};return(0,v.useEffect)(function(){return hn&&s!==null&&s!==void 0&&s.current&&k(),function(){s!=null&&s.current&&g.destroy()}},[s]),f()({start:k,pause:Nn,resume:Cn},g)}var pn=["list","setList","className"],gn=function(t,r){var l=t.list,s=l===void 0?[]:l,i=t.setList,M=t.className,P=b()(t,pn),N=(0,v.useRef)(null),R=_((t==null?void 0:t.target)||N,s,i,P);return(0,v.useImperativeHandle)(r,function(){return f()({el:N.current},R)}),v.createElement(t.tag||"div",{ref:N,className:M},t.children)},In=v.forwardRef(gn),xn=In},15455:function(L,d,e){e.r(d),e.d(d,{texts:function(){return f}});var D=e(19910);const f=[{value:"\u4ECE\u4E00\u4E2A\u5217\u8868\u4E2D\u62D6\u62FD\u514B\u9686\u5230\u53E6\u4E00\u4E2A\u5217\u8868\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u6765\u5F00\u542F\u5B83\uFF0C\u5185\u90E8\u9ED8\u8BA4\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"JSON.parse(JSON.stringify())",paraId:0,tocIndex:0},{value:" \u6765\u5B9E\u73B0\u514B\u9686\uFF0C\u5982\u679C\u60A8\u9700\u8981\u4F20\u9012\u81EA\u5B9A\u4E49\u51FD\u6570\uFF0C\u8BF7\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u4F20\u9012\u51FD\u6570\uFF0C\u4F7F\u7528\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u514B\u9686",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u5728\u4F7F\u7528\u8BE5\u529F\u80FD\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\uFF1A",paraId:2,tocIndex:0},{value:"\u88AB\u514B\u9686\u7EC4\u4EF6\u7684 ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u4E2D\u7684 ",paraId:3,tocIndex:0},{value:"pull",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u5FC5\u987B\u4E3A ",paraId:3,tocIndex:0},{value:"clone",paraId:3,tocIndex:0},{value:"\uFF0C\u5426\u5219\u65E0\u6CD5\u514B\u9686\u3002",paraId:3,tocIndex:0},{value:"\u88AB\u514B\u9686\u7EC4\u4EF6\u4E2D\u7684 ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" \u4E2D\u7684 ",paraId:3,tocIndex:0},{value:"name",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u5FC5\u987B\u4E0E\u514B\u9686\u7EC4\u4EF6\u7684 ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" \u4E2D\u7684 ",paraId:3,tocIndex:0},{value:"name",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u4E00\u81F4\uFF0C\u5426\u5219\u65E0\u6CD5\u514B\u9686\u3002",paraId:3,tocIndex:0},{value:"\u6CE8\u610F\uFF1A\u5F53\u6211\u4EEC\u4F7F\u7528 ",paraId:4},{value:"clone",paraId:4},{value:" \u5C5E\u6027\u65F6\uFF0C\u9700\u8981\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u552F\u4E00\u7684 ",paraId:4},{value:"key",paraId:4},{value:"\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u7EC4\u4EF6\u6E32\u67D3\u5F02\u5E38\u3002",paraId:4}]},10377:function(L,d){d.Z=`import React, { useState } from "react"
import { ReactDraggablePlus } from 'react-draggable-plus'
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

  const group:Sortable.GroupOptions =  { name: "people", pull: "clone", put: false}

  const onClone = () => {
    console.log('clone')
  }

  return <>
  <div className="flex">
    <ReactDraggablePlus
      list={list}
      setList={setList}
      animation={150}
      group={ group }
      sort={false}
      className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
      onClone={onClone}
    >
      {
        list.map(item => {
          return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
        })
      }
    </ReactDraggablePlus>
    <ReactDraggablePlus
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
    </ReactDraggablePlus>
  </div>
  <div className="flex justify-between">
    <PreviewList list={list} className="m-auto"></PreviewList>
    <PreviewList list={list2} className="m-auto"></PreviewList>
  </div>
  </>
}

export default Demo
`},64506:function(L,d){d.Z=`import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import Sortable from "sortablejs"

const Function = () => {
  const el1 = useRef<any>(null)
  const el2 = useRef<any>(null)

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
    onClone: () => {
      console.log('clone')
    }
  })

  useDraggable(el2, list2, setList2, {
    animation: 150,
    group: 'people',
    onClone: () => {
      console.log('clone')
    }
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
