"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[150],{90962:function(y,d,e){e.r(d),e.d(d,{demos:function(){return b}});var O=e(90228),g=e.n(O),A=e(87999),E=e.n(A),m=e(75271),U=e(40946),b={"src-basic-demo-demo":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,20985))})),asset:{type:"BLOCK",id:"src-basic-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64310).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u7EC4\u4EF6\u4F7F\u7528",description:"\u4F7F\u7528\u7EC4\u4EF6\u5B8C\u6210\u62D6\u62FD\u6392\u5E8F"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var L=E()(g()().mark(function C(){var h,R=arguments;return g()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(h=c.sent).default.apply(h,R));case 3:case"end":return c.stop()}},C)}));function x(){return L.apply(this,arguments)}return x}()}},"src-basic-demo-function":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,52979))})),asset:{type:"BLOCK",id:"src-basic-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83401).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u51FD\u6570\u4F7F\u7528",description:"\u4F7F\u7528\u51FD\u6570\u5B8C\u6210\u62D6\u62FD\u6392\u5E8F"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var L=E()(g()().mark(function C(){var h,R=arguments;return g()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(925).then(e.bind(e,25925));case 2:return c.abrupt("return",(h=c.sent).default.apply(h,R));case 3:case"end":return c.stop()}},C)}));function x(){return L.apply(this,arguments)}return x}()}}}},24462:function(y,d,e){e.r(d);var O=e(75271),g=e(82187),A=e.n(g),E=e(52676),m=function(b){return(0,E.jsx)("pre",{className:A()("code-block",b==null?void 0:b.className),children:JSON.stringify(b.list,null,2)})};d.default=m},85614:function(y,d,e){e.r(d),e.d(d,{ReactDraggablePlush:function(){return hn},useDraggable:function(){return X}});var O=e(26068),g=e.n(O),A=e(67825),E=e.n(A),m=e(75271),U=e(15558),b=e.n(U),L=e(48305),x=e.n(L),C=e(74233),h="[react-draggable-plus]: ";function R(n){console.warn(h+n)}function B(n){console.error(h+n)}function c(n,t,r){return r>=0&&r<n.length&&n.splice(r,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,r){return r?r.toUpperCase():""})}function Nn(n){return Object.keys(n).reduce(function(t,r){return typeof n[r]!="undefined"&&(t[tn(r)]=n[r]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function rn(n,t,r){return Array.isArray(n)&&n.splice(t,0,r),n}function on(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function $(n,t,r){var l=n.children[r];n.insertBefore(t,l)}function K(n){n.parentNode&&n.parentNode.removeChild(n)}function Tn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;r=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else r=document.querySelector(n);return r||warn("Element not found: ".concat(n)),r}function ln(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return n.apply(r,i),t.apply(r,i)}}function un(n,t){var r=g()({},n);return Object.keys(t).forEach(function(l){r[l]?r[l]=ln(n[l],t[l]):r[l]=t[l]}),r}function sn(n){return n instanceof HTMLElement}function z(n,t){Object.keys(n).forEach(function(r){t(r,n[r])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var F=null,Z=null;function _(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F=n,Z=t}function gn(){return{data:F,clonedData:Z}}var G=Symbol("cloneElement");function X(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];var i=r[0],s=r[1],I=r[2],P=r[3];Array.isArray(s)||(P=s,s=null);var M=(0,m.useState)(null),N=x()(M,2),u=N[0],Y=N[1],j=(n=P)!==null&&n!==void 0?n:{},w=j.immediate,En=w===void 0?!0:w,Q=j.clone,Dn=Q===void 0?fn:Q,V=j.customUpdate;function W(a){I&&I(b()(a))}function Pn(a){var o=s[a.oldIndex],f=Dn(o);_(o,f),a.item[G]=f}function yn(a){var o=a.item[G];on(o)||(K(a.item),rn(s,a.newDraggableIndex,o),W(s))}function On(a){var o=a.from,f=a.item,v=a.oldIndex,D=a.oldDraggableIndex,S=a.pullMode,J=a.clone;if($(o,f,v),S==="clone"){K(J);return}an(s,D),W(s)}function An(a){if(V){V(a);return}var o=a.from,f=a.item,v=a.oldIndex,D=a.newIndex;K(f),$(o,f,v),c(s,v,D),W(s)}function Ln(){requestIdleCallback(function(){_()})}var xn={onUpdate:An,onStart:Pn,onAdd:yn,onRemove:On,onEnd:Ln};function Cn(a){var o=i==null?void 0:i.current;return a?a&&!sn(a)?a.$el:(a||B("Root element not found"),a):o}function q(){var a,o=(a=P)!==null&&a!==void 0?a:{},f=o.immediate,v=o.clone,D=E()(o,mn);return z(D,function(S,J){dn(S)&&(D[S]=function(nn){var In=gn();cn(nn,In);for(var H=arguments.length,en=new Array(H>1?H-1:0),T=1;T<H;T++)en[T-1]=arguments[T];J.apply(void 0,[nn].concat(en))})}),un(s===null?{}:xn,D)}var p={option:function(o,f){return u==null?void 0:u.option(o,f)},destroy:function(){u==null||u.destroy(),Y(null)},save:function(){return u==null?void 0:u.save()},toArray:function(){return u==null?void 0:u.toArray()},closest:function(){for(var o=arguments.length,f=new Array(o),v=0;v<o;v++)f[v]=arguments[v];return u==null?void 0:u.closest.apply(u,f)}},k=function(o){u&&p.destroy(),Y(new C.ZP(Cn(o),q()))};(0,m.useEffect)(function(){u&&z(q(),function(a,o){u==null||u.option(a,o)})},[P]);var Mn=function(){return p==null?void 0:p.option("disabled",!0)},Rn=function(){return p==null?void 0:p.option("disabled",!1)};return(0,m.useEffect)(function(){return En&&i!==null&&i!==void 0&&i.current&&k(),function(){i!=null&&i.current&&p.destroy()}},[i]),g()({start:k,pause:Mn,resume:Rn},p)}var vn=["list","setList","className"],pn=function(t,r){var l=t.list,i=l===void 0?[]:l,s=t.setList,I=t.className,P=E()(t,vn),M=(0,m.useRef)(null),N=X((t==null?void 0:t.target)||M,i,s,P);return(0,m.useImperativeHandle)(r,function(){return g()({el:M.current},N)}),m.createElement(t.tag||"div",{ref:M,className:I},t.children)},bn=m.forwardRef(pn),hn=bn},38959:function(y,d,e){e.r(d),e.d(d,{texts:function(){return g}});var O=e(40946);const g=[{value:"\u5355\u4E2A\u5217\u8868\u62D6\u62FD\u6392\u5E8F\u3002",paraId:0,tocIndex:0}]},64310:function(y,d){d.Z=`import React, { useRef, useState } from "react"
import { ReactDraggablePlush } from 'react-draggable-plus'
import PreviewList from "react-draggable-plus/builtins/PreviewList"

const Demo = () => {
  const el = useRef<any>(null)
  const [list, setList] = useState([{
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
  }])
  const [disabled, setDisabled] = useState(false)
  const startHandle = () => {
    console.log('start')
  }
  const updateHandle = () => {
    console.log('update')
  }
  const endHandle = () => {
    console.log('end')
  }

  return <>
      <button type="button" onClick={() => el.current?.start()}>start</button>
      <button type="button" onClick={() => el.current?.pause()}>pause</button>
      <button type="button" onClick={ ()=>{ setDisabled(true) }}>disabled</button>
      <div className="flex m-t-20px">
        <ReactDraggablePlush
          ref={el}
          list={list}
          setList={setList}
          disabled={disabled}
          animation={150}
          ghostClass="ghost"
          className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded"
          onStart={startHandle}
          onUpdate={updateHandle}
          onEnd={endHandle}
        >
          {
            list.map(item => {
              return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
            })
          }
        </ReactDraggablePlush>
        <PreviewList list={list}></PreviewList>
    </div>
  </>
}
export default Demo
`},83401:function(y,d){d.Z=`import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"

const Function = () => {
  const el = useRef<any>(null)
  const [list, setList] = useState([{
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
  }])
  const { start } = useDraggable(el, list, setList, {
    animation: 150,
    ghostClass: 'ghost',
    onStart() {
      console.log('start')
    },
    onUpdate() {
      console.log('update')
    }
  })
  return <>
    <button type="button" onClick={() => start()}>start</button>
    <div className="flex m-t-20px">
      <div className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded" ref={el}>
        {
          list.map(item => {
            return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
          })
        }
      </div>
      <PreviewList list={list} />
    </div>
  </>
}
export default Function
`}}]);
