"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[140],{83843:function(O,d,e){e.r(d),e.d(d,{demos:function(){return E}});var A=e(90228),f=e.n(A),L=e(87999),D=e.n(L),b=e(75271),T=e(2053),E={"src-basic-demo-demo":{component:b.memo(b.lazy(function(){return e.e(433).then(e.bind(e,32763))})),asset:{type:"BLOCK",id:"src-basic-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39198).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"Component usage",description:"Use components to complete drag and drop sorting"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var x=D()(f()().mark(function C(){var h,R=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(469).then(e.bind(e,20469));case 2:return c.abrupt("return",(h=c.sent).default.apply(h,R));case 3:case"end":return c.stop()}},C)}));function g(){return x.apply(this,arguments)}return g}()}},"src-basic-demo-function":{component:b.memo(b.lazy(function(){return e.e(433).then(e.bind(e,9055))})),asset:{type:"BLOCK",id:"src-basic-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29566).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"function usage",description:"Use function to complete drag and drop sorting"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var x=D()(f()().mark(function C(){var h,R=arguments;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(469).then(e.bind(e,20469));case 2:return c.abrupt("return",(h=c.sent).default.apply(h,R));case 3:case"end":return c.stop()}},C)}));function g(){return x.apply(this,arguments)}return g}()}}}},24462:function(O,d,e){e.r(d);var A=e(75271),f=e(82187),L=e.n(f),D=e(52676),b=function(E){return(0,D.jsx)("pre",{className:L()("code-block",E==null?void 0:E.className),children:JSON.stringify(E.list,null,2)})};d.default=b},85614:function(O,d,e){e.r(d),e.d(d,{ReactDraggablePlus:function(){return En},useDraggable:function(){return X}});var A=e(26068),f=e.n(A),L=e(67825),D=e.n(L),b=e(15558),T=e.n(b),E=e(48305),x=e.n(E),g=e(75271),C=e(74233),h="[react-draggable-plus]: ";function R(n){console.warn(h+n)}function B(n){console.error(h+n)}function c(n,t,r){return r>=0&&r<n.length&&n.splice(r,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,r){return r?r.toUpperCase():""})}function Sn(n){return Object.keys(n).reduce(function(t,r){return typeof n[r]!="undefined"&&(t[tn(r)]=n[r]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function rn(n,t,r){return Array.isArray(n)&&n.splice(t,0,r),n}function on(n){return typeof n=="undefined"}function Nn(n){return typeof n=="string"}function $(n,t,r){var l=n.children[r];n.insertBefore(t,l)}function K(n){n.parentNode&&n.parentNode.removeChild(n)}function Un(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;r=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else r=document.querySelector(n);return r||warn("Element not found: ".concat(n)),r}function ln(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,i=new Array(l),u=0;u<l;u++)i[u]=arguments[u];return n.apply(r,i),t.apply(r,i)}}function sn(n,t){var r=f()({},n);return Object.keys(t).forEach(function(l){r[l]?r[l]=ln(n[l],t[l]):r[l]=t[l]}),r}function un(n){return n instanceof HTMLElement}function F(n,t){Object.keys(n).forEach(function(r){t(r,n[r])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var Z=null,_=null;function z(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Z=n,_=t}function gn(){return{data:Z,clonedData:_}}var G=Symbol("cloneElement");function X(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];var i=r[0],u=r[1],I=r[2],y=r[3];Array.isArray(u)||(y=u,u=null);var M=(0,g.useState)(null),S=x()(M,2),s=S[0],Y=S[1],j=(n=y)!==null&&n!==void 0?n:{},w=j.immediate,hn=w===void 0?!0:w,Q=j.clone,Dn=Q===void 0?fn:Q,V=j.customUpdate;function W(a){I&&I(T()(a))}function Pn(a){var o=u[a.oldIndex],m=Dn(o);z(o,m),a.item[G]=m}function yn(a){var o=a.item[G];on(o)||(K(a.item),rn(u,a.newDraggableIndex,o),W(u))}function On(a){var o=a.from,m=a.item,v=a.oldIndex,P=a.oldDraggableIndex,N=a.pullMode,J=a.clone;if($(o,m,v),N==="clone"){K(J);return}an(u,P),W(u)}function An(a){if(V){V(a);return}var o=a.from,m=a.item,v=a.oldIndex,P=a.newIndex;K(m),$(o,m,v),c(u,v,P),W(u)}function Ln(){requestIdleCallback(function(){z()})}var xn={onUpdate:An,onStart:Pn,onAdd:yn,onRemove:On,onEnd:Ln};function Cn(a){var o=i==null?void 0:i.current;return a?a&&!un(a)?a.$el:(a||B("Root element not found"),a):o}function q(){var a,o=(a=y)!==null&&a!==void 0?a:{},m=o.immediate,v=o.clone,P=D()(o,mn);return F(P,function(N,J){dn(N)&&(P[N]=function(nn){var In=gn();cn(nn,In);for(var H=arguments.length,en=new Array(H>1?H-1:0),U=1;U<H;U++)en[U-1]=arguments[U];J.apply(void 0,[nn].concat(en))})}),sn(u===null?{}:xn,P)}var p={option:function(o,m){return s==null?void 0:s.option(o,m)},destroy:function(){s==null||s.destroy(),Y(null)},save:function(){return s==null?void 0:s.save()},toArray:function(){return s==null?void 0:s.toArray()},closest:function(){for(var o=arguments.length,m=new Array(o),v=0;v<o;v++)m[v]=arguments[v];return s==null?void 0:s.closest.apply(s,m)}},k=function(o){s&&p.destroy(),Y(new C.ZP(Cn(o),q()))};(0,g.useEffect)(function(){s&&F(q(),function(a,o){s==null||s.option(a,o)})},[y]);var Mn=function(){return p==null?void 0:p.option("disabled",!0)},Rn=function(){return p==null?void 0:p.option("disabled",!1)};return(0,g.useEffect)(function(){return hn&&i!==null&&i!==void 0&&i.current&&k(),function(){i!=null&&i.current&&p.destroy()}},[i]),f()({start:k,pause:Mn,resume:Rn},p)}var vn=["list","setList","className"],pn=function(t,r){var l=t.list,i=l===void 0?[]:l,u=t.setList,I=t.className,y=D()(t,vn),M=(0,g.useRef)(null),S=X((t==null?void 0:t.target)||M,i,u,y);return(0,g.useImperativeHandle)(r,function(){return f()({el:M.current},S)}),g.createElement(t.tag||"div",{ref:M,className:I},t.children)},bn=g.forwardRef(pn),En=bn},81636:function(O,d,e){e.r(d),e.d(d,{texts:function(){return f}});var A=e(2053);const f=[{value:"Single list drag and drop sorting",paraId:0,tocIndex:1}]},39198:function(O,d){d.Z=`import React, { useRef, useState } from "react"
import { ReactDraggablePlus } from "react-draggable-plus"
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
        <ReactDraggablePlus
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
        </ReactDraggablePlus>
        <PreviewList list={list}></PreviewList>
    </div>
  </>
}
export default Demo
`},29566:function(O,d){d.Z=`import React, { useRef, useState } from "react"
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
