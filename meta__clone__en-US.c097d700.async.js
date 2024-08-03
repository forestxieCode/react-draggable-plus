"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[6115],{58850:function(y,d,e){e.r(d),e.d(d,{demos:function(){return I}});var L=e(90228),f=e.n(L),D=e(87999),x=e.n(D),h=e(75271),U=e(70168),I={"src-clone-demo-demo":{component:h.memo(h.lazy(function(){return e.e(2433).then(e.bind(e,14804))})),asset:{type:"BLOCK",id:"src-clone-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17879).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"}},entry:"index.tsx",title:"Clone using components",description:"Pass through the pull.clone attribute of the group to realize clone"},context:{react:e(75271),"react-draggable-plus":e(2474),"react-draggable-plus/builtins/PreviewList":e(65280)},renderOpts:{compile:function(){var O=x()(f()().mark(function A(){var b,C=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(8999).then(e.bind(e,78999));case 2:return c.abrupt("return",(b=c.sent).default.apply(b,C));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}},"src-clone-demo-function":{component:h.memo(h.lazy(function(){return e.e(2433).then(e.bind(e,56375))})),asset:{type:"BLOCK",id:"src-clone-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86420).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"}},entry:"index.tsx",title:"Cloning using function",description:"Use function to pass options to achieve cloning"},context:{react:e(75271),"react-draggable-plus":e(2474),"react-draggable-plus/builtins/PreviewList":e(65280)},renderOpts:{compile:function(){var O=x()(f()().mark(function A(){var b,C=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(8999).then(e.bind(e,78999));case 2:return c.abrupt("return",(b=c.sent).default.apply(b,C));case 3:case"end":return c.stop()}},A)}));function v(){return O.apply(this,arguments)}return v}()}}}},65280:function(y,d,e){e.r(d);var L=e(75271),f=e(82187),D=e.n(f),x=e(52676),h=function(I){return(0,x.jsx)("pre",{className:D()("code-block",I==null?void 0:I.className),children:JSON.stringify(I.list,null,2)})};d.default=h},2474:function(y,d,e){e.r(d),e.d(d,{ReactDraggablePlus:function(){return In},useDraggable:function(){return _}});var L=e(26068),f=e.n(L),D=e(67825),x=e.n(D),h=e(15558),U=e.n(h),I=e(48305),O=e.n(I),v=e(75271),A=e(74233),b="[react-draggable-plus]: ";function C(n){console.warn(b+n)}function w(n){console.error(b+n)}function c(n,t,o){return o>=0&&o<n.length&&n.splice(o,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,o){return o?o.toUpperCase():""})}function Rn(n){return Object.keys(n).reduce(function(t,o){return typeof n[o]!="undefined"&&(t[tn(o)]=n[o]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function on(n,t,o){return Array.isArray(n)&&n.splice(t,0,o),n}function rn(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function $(n,t,o){var l=n.children[o];n.insertBefore(t,l)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function Tn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,o=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;o=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else o=document.querySelector(n);return o||warn("Element not found: ".concat(n)),o}function ln(n,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return n.apply(o,s),t.apply(o,s)}}function un(n,t){var o=f()({},n);return Object.keys(t).forEach(function(l){o[l]?o[l]=ln(n[l],t[l]):o[l]=t[l]}),o}function sn(n){return n instanceof HTMLElement}function z(n,t){Object.keys(n).forEach(function(o){t(o,n[o])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var F=null,G=null;function Z(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F=n,G=t}function vn(){return{data:F,clonedData:G}}var H=Symbol("cloneElement");function _(){for(var n,t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];var s=o[0],i=o[1],M=o[2],P=o[3];Array.isArray(i)||(P=i,i=null);var N=(0,v.useState)(null),R=O()(N,2),u=R[0],X=R[1],B=(n=P)!==null&&n!==void 0?n:{},Y=B.immediate,bn=Y===void 0?!0:Y,Q=B.clone,xn=Q===void 0?fn:Q,V=B.customUpdate;function W(a){M&&M(U()(a))}function En(a){var r=i[a.oldIndex],m=xn(r);Z(r,m),a.item[H]=m}function Pn(a){var r=a.item[H];rn(r)||(j(a.item),on(i,a.newDraggableIndex,r),W(i))}function yn(a){var r=a.from,m=a.item,p=a.oldIndex,E=a.oldDraggableIndex,S=a.pullMode,K=a.clone;if($(r,m,p),S==="clone"){j(K);return}an(i,E),W(i)}function Ln(a){if(V){V(a);return}var r=a.from,m=a.item,p=a.oldIndex,E=a.newIndex;j(m),$(r,m,p),c(i,p,E),W(i)}function Dn(){requestIdleCallback(function(){Z()})}var On={onUpdate:Ln,onStart:En,onAdd:Pn,onRemove:yn,onEnd:Dn};function An(a){var r=s==null?void 0:s.current;return a?a&&!sn(a)?a.$el:(a||w("Root element not found"),a):r}function q(){var a,r=(a=P)!==null&&a!==void 0?a:{},m=r.immediate,p=r.clone,E=x()(r,mn);return z(E,function(S,K){dn(S)&&(E[S]=function(nn){var Mn=vn();cn(nn,Mn);for(var J=arguments.length,en=new Array(J>1?J-1:0),T=1;T<J;T++)en[T-1]=arguments[T];K.apply(void 0,[nn].concat(en))})}),un(i===null?{}:On,E)}var g={option:function(r,m){return u==null?void 0:u.option(r,m)},destroy:function(){u==null||u.destroy(),X(null)},save:function(){return u==null?void 0:u.save()},toArray:function(){return u==null?void 0:u.toArray()},closest:function(){for(var r=arguments.length,m=new Array(r),p=0;p<r;p++)m[p]=arguments[p];return u==null?void 0:u.closest.apply(u,m)}},k=function(r){u&&g.destroy(),X(new A.ZP(An(r),q()))};(0,v.useEffect)(function(){u&&z(q(),function(a,r){u==null||u.option(a,r)})},[P]);var Nn=function(){return g==null?void 0:g.option("disabled",!0)},Cn=function(){return g==null?void 0:g.option("disabled",!1)};return(0,v.useEffect)(function(){return bn&&s!==null&&s!==void 0&&s.current&&k(),function(){s!=null&&s.current&&g.destroy()}},[s]),f()({start:k,pause:Nn,resume:Cn},g)}var pn=["list","setList","className"],gn=function(t,o){var l=t.list,s=l===void 0?[]:l,i=t.setList,M=t.className,P=x()(t,pn),N=(0,v.useRef)(null),R=_((t==null?void 0:t.target)||N,s,i,P);return(0,v.useImperativeHandle)(o,function(){return f()({el:N.current},R)}),v.createElement(t.tag||"div",{ref:N,className:M},t.children)},hn=v.forwardRef(gn),In=hn},79478:function(y,d,e){e.r(d),e.d(d,{texts:function(){return f}});var L=e(70168);const f=[{value:"Drag and drop from one list to another list, you can use the ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" attribute to enable it, internally use ",paraId:0,tocIndex:0},{value:"JSON.parse(JSON.stringify())",paraId:0,tocIndex:0},{value:" to achieve cloning by default, if you need to pass a custom function, please Use the ",paraId:0,tocIndex:0},{value:"clone",paraId:0,tocIndex:0},{value:" attribute to pass the function, and use the method to ",paraId:0,tocIndex:0},{value:"customize the clone",paraId:1,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"When we use this function, we need to pay attention to\uFF1A",paraId:2,tocIndex:0},{value:"The ",paraId:3,tocIndex:0},{value:"pull",paraId:3,tocIndex:0},{value:" attribute in the ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" attribute of the cloned component must be ",paraId:3,tocIndex:0},{value:"clone",paraId:3,tocIndex:0},{value:", otherwise it cannot be cloned.",paraId:3,tocIndex:0},{value:"The ",paraId:3,tocIndex:0},{value:"name",paraId:3,tocIndex:0},{value:" attribute in the ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" of the cloned component must be consistent with the ",paraId:3,tocIndex:0},{value:"name",paraId:3,tocIndex:0},{value:" attribute in the ",paraId:3,tocIndex:0},{value:"group",paraId:3,tocIndex:0},{value:" of the cloned component, otherwise it cannot be cloned.",paraId:3,tocIndex:0},{value:"\n  Note: When we use the `clone` attribute, we need to regenerate a unique `key`, otherwise it will cause the component to render abnormally.\n",paraId:4}]},17879:function(y,d){d.Z=`import React, { useState } from "react"
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
`},86420:function(y,d){d.Z=`import React, { useRef, useState } from "react"
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
