"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[6817],{39718:function(x,d,e){e.r(d),e.d(d,{demos:function(){return E}});var y=e(90228),f=e.n(y),A=e(87999),P=e.n(A),h=e(75271),T=e(76876),E={"src-tow-list-demo-demo":{component:h.memo(h.lazy(function(){return e.e(2433).then(e.bind(e,32279))})),asset:{type:"BLOCK",id:"src-tow-list-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45780).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"\u4F7F\u7528\u7EC4\u4EF6",description:"\u4F7F\u7528\u7EC4\u4EF6\u65B9\u5F0F\u5728\u591A\u5217\u8868\u4E4B\u95F4\u62D6\u62FD\u6392\u5E8F"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var O=P()(f()().mark(function N(){var b,M=arguments;return f()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(469).then(e.bind(e,20469));case 2:return m.abrupt("return",(b=m.sent).default.apply(b,M));case 3:case"end":return m.stop()}},N)}));function g(){return O.apply(this,arguments)}return g}()}},"src-tow-list-demo-function":{component:h.memo(h.lazy(function(){return e.e(2433).then(e.bind(e,14771))})),asset:{type:"BLOCK",id:"src-tow-list-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21015).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"\u51FD\u6570\u65B9\u5F0F",description:"\u4F7F\u7528 \u51FD\u6570\u65B9\u5F0F\u5728\u591A\u5217\u8868\u4E4B\u95F4\u62D6\u62FD\u6392\u5E8F"},context:{react:e(75271),"react-draggable-plus":e(85614),"react-draggable-plus/builtins/PreviewList":e(24462)},renderOpts:{compile:function(){var O=P()(f()().mark(function N(){var b,M=arguments;return f()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(469).then(e.bind(e,20469));case 2:return m.abrupt("return",(b=m.sent).default.apply(b,M));case 3:case"end":return m.stop()}},N)}));function g(){return O.apply(this,arguments)}return g}()}}}},24462:function(x,d,e){e.r(d);var y=e(75271),f=e(82187),A=e.n(f),P=e(52676),h=function(E){return(0,P.jsx)("pre",{className:A()("code-block",E==null?void 0:E.className),children:JSON.stringify(E.list,null,2)})};d.default=h},85614:function(x,d,e){e.r(d),e.d(d,{ReactDraggablePlus:function(){return En},useDraggable:function(){return G}});var y=e(26068),f=e.n(y),A=e(67825),P=e.n(A),h=e(15558),T=e.n(h),E=e(48305),O=e.n(E),g=e(75271),N=e(74233),b="[react-draggable-plus]: ";function M(n){console.warn(b+n)}function w(n){console.error(b+n)}function m(n,t,r){return r>=0&&r<n.length&&n.splice(r,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,r){return r?r.toUpperCase():""})}function In(n){return Object.keys(n).reduce(function(t,r){return typeof n[r]!="undefined"&&(t[tn(r)]=n[r]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function rn(n,t,r){return Array.isArray(n)&&n.splice(t,0,r),n}function on(n){return typeof n=="undefined"}function Sn(n){return typeof n=="string"}function J(n,t,r){var l=n.children[r];n.insertBefore(t,l)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function Un(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;r=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else r=document.querySelector(n);return r||warn("Element not found: ".concat(n)),r}function ln(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,u=new Array(l),i=0;i<l;i++)u[i]=arguments[i];return n.apply(r,u),t.apply(r,u)}}function sn(n,t){var r=f()({},n);return Object.keys(t).forEach(function(l){r[l]?r[l]=ln(n[l],t[l]):r[l]=t[l]}),r}function un(n){return n instanceof HTMLElement}function $(n,t){Object.keys(n).forEach(function(r){t(r,n[r])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var mn=Object.assign,cn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var _=null,z=null;function F(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_=n,z=t}function gn(){return{data:_,clonedData:z}}var Z=Symbol("cloneElement");function G(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];var u=r[0],i=r[1],C=r[2],D=r[3];Array.isArray(i)||(D=i,i=null);var R=(0,g.useState)(null),I=O()(R,2),s=I[0],X=I[1],B=(n=D)!==null&&n!==void 0?n:{},Y=B.immediate,bn=Y===void 0?!0:Y,Q=B.clone,Pn=Q===void 0?fn:Q,V=B.customUpdate;function K(a){C&&C(T()(a))}function Ln(a){var o=i[a.oldIndex],c=Pn(o);F(o,c),a.item[Z]=c}function Dn(a){var o=a.item[Z];on(o)||(j(a.item),rn(i,a.newDraggableIndex,o),K(i))}function xn(a){var o=a.from,c=a.item,v=a.oldIndex,L=a.oldDraggableIndex,S=a.pullMode,H=a.clone;if(J(o,c,v),S==="clone"){j(H);return}an(i,L),K(i)}function yn(a){if(V){V(a);return}var o=a.from,c=a.item,v=a.oldIndex,L=a.newIndex;j(c),J(o,c,v),m(i,v,L),K(i)}function An(){requestIdleCallback(function(){F()})}var On={onUpdate:yn,onStart:Ln,onAdd:Dn,onRemove:xn,onEnd:An};function Nn(a){var o=u==null?void 0:u.current;return a?a&&!un(a)?a.$el:(a||w("Root element not found"),a):o}function q(){var a,o=(a=D)!==null&&a!==void 0?a:{},c=o.immediate,v=o.clone,L=P()(o,cn);return $(L,function(S,H){dn(S)&&(L[S]=function(nn){var Cn=gn();mn(nn,Cn);for(var W=arguments.length,en=new Array(W>1?W-1:0),U=1;U<W;U++)en[U-1]=arguments[U];H.apply(void 0,[nn].concat(en))})}),sn(i===null?{}:On,L)}var p={option:function(o,c){return s==null?void 0:s.option(o,c)},destroy:function(){s==null||s.destroy(),X(null)},save:function(){return s==null?void 0:s.save()},toArray:function(){return s==null?void 0:s.toArray()},closest:function(){for(var o=arguments.length,c=new Array(o),v=0;v<o;v++)c[v]=arguments[v];return s==null?void 0:s.closest.apply(s,c)}},k=function(o){s&&p.destroy(),X(new N.ZP(Nn(o),q()))};(0,g.useEffect)(function(){s&&$(q(),function(a,o){s==null||s.option(a,o)})},[D]);var Rn=function(){return p==null?void 0:p.option("disabled",!0)},Mn=function(){return p==null?void 0:p.option("disabled",!1)};return(0,g.useEffect)(function(){return bn&&u!==null&&u!==void 0&&u.current&&k(),function(){u!=null&&u.current&&p.destroy()}},[u]),f()({start:k,pause:Rn,resume:Mn},p)}var vn=["list","setList","className"],pn=function(t,r){var l=t.list,u=l===void 0?[]:l,i=t.setList,C=t.className,D=P()(t,vn),R=(0,g.useRef)(null),I=G((t==null?void 0:t.target)||R,u,i,D);return(0,g.useImperativeHandle)(r,function(){return f()({el:R.current},I)}),g.createElement(t.tag||"div",{ref:R,className:C},t.children)},hn=g.forwardRef(pn),En=hn},16684:function(x,d,e){e.r(d),e.d(d,{texts:function(){return f}});var y=e(76876);const f=[{value:"\u591A\u5217\u8868\u4E4B\u95F4\u62D6\u62FD\u6392\u5E8F\uFF0C\u53CC\u5411\u7ED1\u5B9A\u6570\u636E\u3002",paraId:0,tocIndex:0}]},45780:function(x,d){d.Z=`import React, { useRef, useState } from "react"
import { ReactDraggablePlus } from 'react-draggable-plus'
import PreviewList from "react-draggable-plus/builtins/PreviewList"

const Demo = () => {
  const el = useRef<any>(null)
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
  const addHandle = () => {
    console.log('add')
  }
  const updateHandle = () => {
    console.log('update')
  }
  const removeHandle = () => {
    console.log('remove')
  }

  return <>
      <div className="flex">
        <ReactDraggablePlus
          ref={el}
          list={list}
          setList={setList}
          animation={150}
          ghostClass="ghost"
          group="people"
          className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
          onAdd={addHandle}
          onUpdate={updateHandle}
          onRemove={removeHandle}
        >
          {
            list.map(item => {
              return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
            })
          }
        </ReactDraggablePlus>
        <ReactDraggablePlus
          ref={el}
          list={list2}
          setList={setList2}
          animation={150}
          ghostClass="ghost"
          group="people"
          className="flex flex-col gap-2 p-4 w-300px h-360px m-auto bg-gray-500/5 rounded"
          onAdd={addHandle}
          onUpdate={updateHandle}
          onRemove={removeHandle}
        >
          {
            list2.map(item => {
              return <div className="cursor-move h-30 bg-gray-500/5 rounded p-3" key={item.id}>{item.name}</div>
            })
          }
        </ReactDraggablePlus>
    </div>
    <div className="flex justify-between m-t-50px">
     <PreviewList list={list} className="m-auto"></PreviewList>
     <PreviewList list={list2} className="m-auto"></PreviewList>
    </div>
  </>
}
export default Demo
`},21015:function(x,d){d.Z=`import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"

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
  const [list1, setList1] = useState(data)
  const [list2, setList2] = useState(data.map(item => ({
    name: \`\${item.name}-2\`,
    id: \`\${item.id}-2\`
  })))

  useDraggable(el1, list1, setList1, {
    animation: 150,
    ghostClass: 'ghost',
    group: 'people',
    onUpdate: () => {
      console.log('update list1')
    },
    onAdd: () => {
      console.log('add list1')
    },
    onMove: () => {
      console.log('remove list1')
    }
  })

  useDraggable(el2, list2, setList2, {
    animation: 150,
    ghostClass: 'ghost',
    group: 'people',
    onUpdate: () => {
      console.log('update list2')
    },
    onAdd: () => {
      console.log('add list2')
    },
    onMove: () => {
      console.log('remove list2')
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
