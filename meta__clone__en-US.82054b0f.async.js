"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[115],{51804:function(P,d,e){e.r(d),e.d(d,{demos:function(){return h}});var y=e(90228),v=e.n(y),L=e(87999),b=e.n(L),m=e(75271),U=e(28630),h={"src-clone-demo-demo":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,26665))})),asset:{type:"BLOCK",id:"src-clone-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92440).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"Clone using components",description:"Pass through the pull.clone attribute of the group to realize clone"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var D=b()(v()().mark(function A(){var I,C=arguments;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(I=c.sent).default.apply(I,C));case 3:case"end":return c.stop()}},A)}));function O(){return D.apply(this,arguments)}return O}()}},"src-clone-demo-function":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,53657))})),asset:{type:"BLOCK",id:"src-clone-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12119).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"Cloning using function",description:"Use function to pass options to achieve cloning"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var D=b()(v()().mark(function A(){var I,C=arguments;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(I=c.sent).default.apply(I,C));case 3:case"end":return c.stop()}},A)}));function O(){return D.apply(this,arguments)}return O}()}}}},24462:function(P,d,e){e.r(d);var y=e(75271),v=e(82187),L=e.n(v),b=e(52676),m=function(h){return(0,b.jsx)("pre",{className:L()("code-block",h==null?void 0:h.className),children:JSON.stringify(h.list,null,2)})};d.default=m},85614:function(P,d,e){e.r(d),e.d(d,{ReactDraggablePlush:function(){return In},useDraggable:function(){return _}});var y=e(26068),v=e.n(y),L=e(67825),b=e.n(L),m=e(75271),U=e(15558),h=e.n(U),D=e(48305),O=e.n(D),A=e(74233),I="[react-draggable-plus]: ";function C(n){console.warn(I+n)}function w(n){console.error(I+n)}function c(n,t,o){return o>=0&&o<n.length&&n.splice(o,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,o){return o?o.toUpperCase():""})}function Rn(n){return Object.keys(n).reduce(function(t,o){return typeof n[o]!="undefined"&&(t[tn(o)]=n[o]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function on(n,t,o){return Array.isArray(n)&&n.splice(t,0,o),n}function rn(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function $(n,t,o){var l=n.children[o];n.insertBefore(t,l)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function Tn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,o=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;o=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else o=document.querySelector(n);return o||warn("Element not found: ".concat(n)),o}function ln(n,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return n.apply(o,s),t.apply(o,s)}}function un(n,t){var o=v()({},n);return Object.keys(t).forEach(function(l){o[l]?o[l]=ln(n[l],t[l]):o[l]=t[l]}),o}function sn(n){return n instanceof HTMLElement}function z(n,t){Object.keys(n).forEach(function(o){t(o,n[o])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var F=null,G=null;function Z(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F=n,G=t}function vn(){return{data:F,clonedData:G}}var H=Symbol("cloneElement");function _(){for(var n,t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];var s=o[0],i=o[1],M=o[2],E=o[3];Array.isArray(i)||(E=i,i=null);var N=(0,m.useState)(null),R=O()(N,2),u=R[0],X=R[1],B=(n=E)!==null&&n!==void 0?n:{},Y=B.immediate,bn=Y===void 0?!0:Y,Q=B.clone,xn=Q===void 0?fn:Q,V=B.customUpdate;function W(a){M&&M(h()(a))}function En(a){var r=i[a.oldIndex],f=xn(r);Z(r,f),a.item[H]=f}function Pn(a){var r=a.item[H];rn(r)||(j(a.item),on(i,a.newDraggableIndex,r),W(i))}function yn(a){var r=a.from,f=a.item,p=a.oldIndex,x=a.oldDraggableIndex,S=a.pullMode,K=a.clone;if($(r,f,p),S==="clone"){j(K);return}an(i,x),W(i)}function Ln(a){if(V){V(a);return}var r=a.from,f=a.item,p=a.oldIndex,x=a.newIndex;j(f),$(r,f,p),c(i,p,x),W(i)}function Dn(){requestIdleCallback(function(){Z()})}var On={onUpdate:Ln,onStart:En,onAdd:Pn,onRemove:yn,onEnd:Dn};function An(a){var r=s==null?void 0:s.current;return a?a&&!sn(a)?a.$el:(a||w("Root element not found"),a):r}function q(){var a,r=(a=E)!==null&&a!==void 0?a:{},f=r.immediate,p=r.clone,x=b()(r,mn);return z(x,function(S,K){dn(S)&&(x[S]=function(nn){var Mn=vn();cn(nn,Mn);for(var J=arguments.length,en=new Array(J>1?J-1:0),T=1;T<J;T++)en[T-1]=arguments[T];K.apply(void 0,[nn].concat(en))})}),un(i===null?{}:On,x)}var g={option:function(r,f){return u==null?void 0:u.option(r,f)},destroy:function(){u==null||u.destroy(),X(null)},save:function(){return u==null?void 0:u.save()},toArray:function(){return u==null?void 0:u.toArray()},closest:function(){for(var r=arguments.length,f=new Array(r),p=0;p<r;p++)f[p]=arguments[p];return u==null?void 0:u.closest.apply(u,f)}},k=function(r){u&&g.destroy(),X(new A.ZP(An(r),q()))};(0,m.useEffect)(function(){u&&z(q(),function(a,r){u==null||u.option(a,r)})},[E]);var Nn=function(){return g==null?void 0:g.option("disabled",!0)},Cn=function(){return g==null?void 0:g.option("disabled",!1)};return(0,m.useEffect)(function(){return bn&&s!==null&&s!==void 0&&s.current&&k(),function(){s!=null&&s.current&&g.destroy()}},[s]),v()({start:k,pause:Nn,resume:Cn},g)}var pn=["list","setList","className"],gn=function(t,o){var l=t.list,s=l===void 0?[]:l,i=t.setList,M=t.className,E=b()(t,pn),N=(0,m.useRef)(null),R=_((t==null?void 0:t.target)||N,s,i,E);return(0,m.useImperativeHandle)(o,function(){return v()({el:N.current},R)}),m.createElement(t.tag||"div",{ref:N,className:M},t.children)},hn=m.forwardRef(gn),In=hn},60689:function(P,d,e){e.r(d),e.d(d,{texts:function(){return v}});var y=e(28630);const v=[{value:"Drag and drop from one list to another list, you can use the ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" attribute to enable it, internally use ",paraId:0,tocIndex:0},{value:"JSON.parse(JSON.stringify())",paraId:0,tocIndex:0},{value:" to achieve cloning by default, if you need to pass a custom function, please Use the ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" attribute to pass the function, and use the method to ",paraId:0,tocIndex:0},{value:"customize the clone",paraId:1,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"When we use this function, we need to pay attention to\uFF1A",paraId:2,tocIndex:0},{value:"The ",paraId:3,tocIndex:0},{value:"pull",paraId:3,tocIndex:0},{value:" attribute in the ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" attribute of the cloned component must be ",paraId:3,tocIndex:0},{value:"clone",paraId:3,tocIndex:0},{value:", otherwise it cannot be cloned.",paraId:3,tocIndex:0},{value:"The ",paraId:3,tocIndex:0},{value:"name",paraId:3,tocIndex:0},{value:" attribute in the ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" of the cloned component must be consistent with the ",paraId:3,tocIndex:0},{value:"name",paraId:3,tocIndex:0},{value:" attribute in the ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" of the cloned component, otherwise it cannot be cloned.",paraId:3,tocIndex:0},{value:"\n  Note: When we use the `clone` attribute, we need to regenerate a unique `key`, otherwise it will cause the component to render abnormally.\n",paraId:4}]},92440:function(P,d){d.Z=`import React, { useState } from "react"
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

  const group:Sortable.GroupOptions =  { name: "people", pull: "clone", put: false}

  const onClone = () => {
    console.log('clone')
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
      onClone={onClone}
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
`},12119:function(P,d){d.Z=`import React, { useRef, useState } from "react"
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
