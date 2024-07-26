"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[140],{71601:function(C,d,r){r.r(d),r.d(d,{demos:function(){return p}});var D=r(90228),f=r.n(D),P=r(87999),h=r.n(P),m=r(75271),R=r(56695),p={"src-basic-demo-demo":{component:m.memo(m.lazy(function(){return r.e(433).then(r.bind(r,20985))})),asset:{type:"BLOCK",id:"src-basic-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:r(64310).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"Component usage",description:"Use components to complete drag and drop sorting"},context:{react:r(75271),"react-draggable-plus":r(85614),"react-draggable-plus/builtins/PreviewList":r(24462)},renderOpts:{compile:function(){var y=h()(f()().mark(function U(){var A,W=arguments;return f()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,r.e(925).then(r.bind(r,25925));case 2:return E.abrupt("return",(A=E.sent).default.apply(A,W));case 3:case"end":return E.stop()}},U)}));function S(){return y.apply(this,arguments)}return S}()}}}},24462:function(C,d,r){r.r(d);var D=r(75271),f=r(82187),P=r.n(f),h=r(52676),m=function(p){return(0,h.jsx)("pre",{className:P()("code-block",p==null?void 0:p.className),children:JSON.stringify(p.list,null,2)})};d.default=m},85614:function(C,d,r){r.r(d),r.d(d,{ReactDraggablePlush:function(){return bn},useDraggable:function(){return w}});var D=r(26068),f=r.n(D),P=r(67825),h=r.n(P),m=r(75271),R=r(15558),p=r.n(R),y=r(48305),S=r.n(y),U=r(74233),A="[react-draggable-plus]: ";function W(n){console.warn(A+n)}function H(n){console.error(A+n)}function E(n,e,a){return a>=0&&a<n.length&&n.splice(a,0,n.splice(e,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(e,a){return a?a.toUpperCase():""})}function yn(n){return Object.keys(n).reduce(function(e,a){return typeof n[a]!="undefined"&&(e[tn(a)]=n[a]),e},{})}function rn(n,e){return Array.isArray(n)&&n.splice(e,1),n}function an(n,e,a){return Array.isArray(n)&&n.splice(e,0,a),n}function on(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function J(n,e,a){var l=n.children[a];n.insertBefore(e,l)}function N(n){n.parentNode&&n.parentNode.removeChild(n)}function Un(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,a=null;if(typeof(e==null?void 0:e.querySelector)=="function"){var l;a=e==null||(l=e.querySelector)===null||l===void 0?void 0:l.call(e,n)}else a=document.querySelector(n);return a||warn("Element not found: ".concat(n)),a}function ln(n,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return n.apply(a,i),e.apply(a,i)}}function un(n,e){var a=f()({},n);return Object.keys(e).forEach(function(l){a[l]?a[l]=ln(n[l],e[l]):a[l]=e[l]}),a}function sn(n){return n instanceof HTMLElement}function $(n,e){Object.keys(n).forEach(function(a){e(a,n[a])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var G=null,Z=null;function z(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G=n,Z=e}function gn(){return{data:G,clonedData:Z}}var F=Symbol("cloneElement");function w(){for(var n,e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];var i=a[0],s=a[1],I=a[2],_=a[3];Array.isArray(s)||(_=s,s=null);var O=(0,m.useState)(null),L=S()(O,2),u=L[0],X=L[1],T=(n=_)!==null&&n!==void 0?n:{},Y=T.immediate,hn=Y===void 0?!0:Y,Q=T.clone,_n=Q===void 0?fn:Q,V=T.customUpdate;function B(t){I&&I(p()(t))}function Dn(t){var o=s[t.oldIndex],c=_n(o);z(o,c),t.item[F]=c}function Pn(t){var o=t.item[F];on(o)||(N(t.item),an(s,t.newDraggableIndex,o),B(s))}function An(t){var o=t.from,c=t.item,g=t.oldIndex,b=t.oldDraggableIndex,M=t.pullMode,j=t.clone;if(J(o,c,g),M==="clone"){N(j);return}rn(s,b),B(s)}function On(t){if(V){V(t);return}var o=t.from,c=t.item,g=t.oldIndex,b=t.newIndex;N(c),J(o,c,g),E(s,g,b),B(s)}function Cn(){requestIdleCallback(function(){z()})}var In={onUpdate:On,onStart:Dn,onAdd:Pn,onRemove:An,onEnd:Cn};function Ln(t){var o=i==null?void 0:i.current;return t?t&&!sn(t)?t.$el:(t||H("Root element not found"),t):o}function q(){var t,o=(t=_)!==null&&t!==void 0?t:{},c=o.immediate,g=o.clone,b=h()(o,mn);return $(b,function(M,j){dn(M)&&(b[M]=function(nn){var Rn=gn();cn(nn,Rn);for(var K=arguments.length,en=new Array(K>1?K-1:0),x=1;x<K;x++)en[x-1]=arguments[x];j.apply(void 0,[nn].concat(en))})}),un(s===null?{}:In,b)}var v={option:function(o,c){return u==null?void 0:u.option(o,c)},destroy:function(){u==null||u.destroy(),X(null)},save:function(){return u==null?void 0:u.save()},toArray:function(){return u==null?void 0:u.toArray()},closest:function(){for(var o=arguments.length,c=new Array(o),g=0;g<o;g++)c[g]=arguments[g];return u==null?void 0:u.closest.apply(u,c)}},k=function(o){u&&v.destroy(),X(new U.ZP(Ln(o),q()))};(0,m.useEffect)(function(){u&&$(q(),function(t,o){u==null||u.option(t,o)})},[_]);var Mn=function(){return v==null?void 0:v.option("disabled",!0)},xn=function(){return v==null?void 0:v.option("disabled",!1)};return(0,m.useEffect)(function(){return hn&&i!==null&&i!==void 0&&i.current&&k(),function(){i!=null&&i.current&&v.destroy()}},[i]),f()({start:k,pause:Mn,resume:xn},v)}var vn=["list","setList","className"],pn=function(e,a){var l=e.list,i=l===void 0?[]:l,s=e.setList,I=e.className,_=h()(e,vn),O=(0,m.useRef)(null),L=w((e==null?void 0:e.target)||O,i,s,_);return(0,m.useImperativeHandle)(a,function(){return f()({el:O.current},L)}),m.createElement(e.tag||"div",{ref:O,className:I},e.children)},En=m.forwardRef(pn),bn=En},52421:function(C,d,r){r.r(d),r.d(d,{texts:function(){return f}});var D=r(56695);const f=[{value:"Single list drag and drop sorting",paraId:0,tocIndex:1},{value:`<code src="./function.tsx"
title="function usage"
desc="Use function to complete drag and drop sorting"`,paraId:1,tocIndex:3}]},64310:function(C,d){d.Z=`import React, { useRef, useState } from "react"
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
`}}]);
