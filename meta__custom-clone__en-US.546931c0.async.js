"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[700],{1001:function(y,d,e){e.r(d),e.d(d,{demos:function(){return I}});var L=e(90228),f=e.n(L),D=e(87999),x=e.n(D),h=e(75271),T=e(84284),I={"src-custom-clone-demo-demo":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,13740))})),asset:{type:"BLOCK",id:"src-custom-clone-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41823).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"Clone using components",description:"Pass through the pull.clone attribute of the group to realize clone"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var O=x()(f()().mark(function A(){var b,R=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(b=c.sent).default.apply(b,R));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}},"src-custom-clone-demo-function":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,94454))})),asset:{type:"BLOCK",id:"src-custom-clone-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(81960).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"Cloning using function",description:"Use function to pass options to achieve cloning"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var O=x()(f()().mark(function A(){var b,R=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(b=c.sent).default.apply(b,R));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}}}},24462:function(y,d,e){e.r(d);var L=e(75271),f=e(82187),D=e.n(f),x=e(52676),h=function(I){return(0,x.jsx)("pre",{className:D()("code-block",I==null?void 0:I.className),children:JSON.stringify(I.list,null,2)})};d.default=h},85614:function(y,d,e){e.r(d),e.d(d,{ReactDraggablePlus:function(){return In},useDraggable:function(){return H}});var L=e(26068),f=e.n(L),D=e(67825),x=e.n(D),h=e(15558),T=e.n(h),I=e(48305),O=e.n(I),v=e(75271),A=e(74233),b="[react-draggable-plus]: ";function R(n){console.warn(b+n)}function U(n){console.error(b+n)}function c(n,t,r){return r>=0&&r<n.length&&n.splice(r,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,r){return r?r.toUpperCase():""})}function Mn(n){return Object.keys(n).reduce(function(t,r){return typeof n[r]!="undefined"&&(t[tn(r)]=n[r]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function rn(n,t,r){return Array.isArray(n)&&n.splice(t,0,r),n}function on(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function J(n,t,r){var l=n.children[r];n.insertBefore(t,l)}function $(n){n.parentNode&&n.parentNode.removeChild(n)}function wn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;r=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else r=document.querySelector(n);return r||warn("Element not found: ".concat(n)),r}function ln(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return n.apply(r,s),t.apply(r,s)}}function un(n,t){var r=f()({},n);return Object.keys(t).forEach(function(l){r[l]?r[l]=ln(n[l],t[l]):r[l]=t[l]}),r}function sn(n){return n instanceof HTMLElement}function _(n,t){Object.keys(n).forEach(function(r){t(r,n[r])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var z=null,F=null;function G(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z=n,F=t}function vn(){return{data:z,clonedData:F}}var Z=Symbol("cloneElement");function H(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];var s=r[0],u=r[1],C=r[2],P=r[3];Array.isArray(u)||(P=u,u=null);var N=(0,v.useState)(null),M=O()(N,2),i=M[0],Y=M[1],j=(n=P)!==null&&n!==void 0?n:{},X=j.immediate,bn=X===void 0?!0:X,Q=j.clone,xn=Q===void 0?fn:Q,V=j.customUpdate;function W(a){C&&C(T()(a))}function En(a){var o=u[a.oldIndex],m=xn(o);G(o,m),a.item[Z]=m}function Pn(a){var o=a.item[Z];on(o)||($(a.item),rn(u,a.newDraggableIndex,o),W(u))}function yn(a){var o=a.from,m=a.item,g=a.oldIndex,E=a.oldDraggableIndex,S=a.pullMode,B=a.clone;if(J(o,m,g),S==="clone"){$(B);return}an(u,E),W(u)}function Ln(a){if(V){V(a);return}var o=a.from,m=a.item,g=a.oldIndex,E=a.newIndex;$(m),J(o,m,g),c(u,g,E),W(u)}function Dn(){requestIdleCallback(function(){G()})}var On={onUpdate:Ln,onStart:En,onAdd:Pn,onRemove:yn,onEnd:Dn};function An(a){var o=s==null?void 0:s.current;return a?a&&!sn(a)?a.$el:(a||U("Root element not found"),a):o}function q(){var a,o=(a=P)!==null&&a!==void 0?a:{},m=o.immediate,g=o.clone,E=x()(o,mn);return _(E,function(S,B){dn(S)&&(E[S]=function(nn){var Cn=vn();cn(nn,Cn);for(var K=arguments.length,en=new Array(K>1?K-1:0),w=1;w<K;w++)en[w-1]=arguments[w];B.apply(void 0,[nn].concat(en))})}),un(u===null?{}:On,E)}var p={option:function(o,m){return i==null?void 0:i.option(o,m)},destroy:function(){i==null||i.destroy(),Y(null)},save:function(){return i==null?void 0:i.save()},toArray:function(){return i==null?void 0:i.toArray()},closest:function(){for(var o=arguments.length,m=new Array(o),g=0;g<o;g++)m[g]=arguments[g];return i==null?void 0:i.closest.apply(i,m)}},k=function(o){i&&p.destroy(),Y(new A.ZP(An(o),q()))};(0,v.useEffect)(function(){i&&_(q(),function(a,o){i==null||i.option(a,o)})},[P]);var Nn=function(){return p==null?void 0:p.option("disabled",!0)},Rn=function(){return p==null?void 0:p.option("disabled",!1)};return(0,v.useEffect)(function(){return bn&&s!==null&&s!==void 0&&s.current&&k(),function(){s!=null&&s.current&&p.destroy()}},[s]),f()({start:k,pause:Nn,resume:Rn},p)}var gn=["list","setList","className"],pn=function(t,r){var l=t.list,s=l===void 0?[]:l,u=t.setList,C=t.className,P=x()(t,gn),N=(0,v.useRef)(null),M=H((t==null?void 0:t.target)||N,s,u,P);return(0,v.useImperativeHandle)(r,function(){return f()({el:N.current},M)}),v.createElement(t.tag||"div",{ref:N,className:C},t.children)},hn=v.forwardRef(pn),In=hn},18890:function(y,d,e){e.r(d),e.d(d,{texts:function(){return f}});var L=e(84284);const f=[{value:"We can pass a function through the ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" attribute to customize the cloned node, and ",paraId:0,tocIndex:0},{value:"JSON.parse(JSON.stringify())",paraId:0,tocIndex:0},{value:" is used internally to implement cloning. You can also choose to use ",paraId:0,tocIndex:0},{value:"lodash",paraId:0,tocIndex:0},{value:" or other third-party libraries. Clone, this function is commonly used in low-code scenarios, such as dragging form elements to the canvas, and a new component element needs to be cloned.",paraId:0,tocIndex:0},{value:"When we use this function, we need to pay attention to\uFF1A",paraId:1,tocIndex:0},{value:"The ",paraId:2,tocIndex:0},{value:"pull",paraId:2,tocIndex:0},{value:" attribute in the ",paraId:2,tocIndex:0},{value:"group",paraId:2,tocIndex:0},{value:" attribute of the cloned component must be ",paraId:2,tocIndex:0},{value:"clone",paraId:2,tocIndex:0},{value:", otherwise it cannot be cloned.",paraId:2,tocIndex:0},{value:"The ",paraId:2,tocIndex:0},{value:"name",paraId:2,tocIndex:0},{value:" attribute in the ",paraId:2,tocIndex:0},{value:"group",paraId:2,tocIndex:0},{value:" of the cloned component must be consistent with the ",paraId:2,tocIndex:0},{value:"name",paraId:2,tocIndex:0},{value:" attribute in the ",paraId:2,tocIndex:0},{value:"group",paraId:2,tocIndex:0},{value:" of the cloned component, otherwise it cannot be cloned.",paraId:2,tocIndex:0},{value:"\nNote: When we use the `clone` attribute, we need to regenerate a unique `key`, otherwise it will cause the component to render abnormally.\n",paraId:3}]},41823:function(y,d){d.Z=`import React, { useState } from "react"
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
      <ReactDraggablePlus
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
`},81960:function(y,d){d.Z=`import React, { useRef, useState } from "react"
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
