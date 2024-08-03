"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[3e3],{53057:function(P,s,e){e.r(s),e.d(s,{demos:function(){return g}});var x=e(90228),i=e.n(x),D=e(87999),A=e.n(D),v=e(75271),O=e(65412),g={"src-target-container-demo-demo":{component:v.memo(v.lazy(function(){return e.e(2433).then(e.bind(e,11820))})),asset:{type:"BLOCK",id:"src-target-container-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57091).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"},"./ATable.tsx":{type:"FILE",value:e(93179).Z}},entry:"index.tsx",title:"Use components to manipulate target containers",description:"Locate the ref element specified by target"},context:{react:e(75271),"react-draggable-plus":e(2474),"react-draggable-plus/builtins/PreviewList":e(65280),"./ATable.tsx":e(67560)},renderOpts:{compile:function(){var E=A()(i()().mark(function R(){var I,M=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(8999).then(e.bind(e,78999));case 2:return m.abrupt("return",(I=m.sent).default.apply(I,M));case 3:case"end":return m.stop()}},R)}));function p(){return E.apply(this,arguments)}return p}()}},"src-target-container-demo-function":{component:v.memo(v.lazy(function(){return e.e(2433).then(e.bind(e,86203))})),asset:{type:"BLOCK",id:"src-target-container-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(79831).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"},"./ATable.tsx":{type:"FILE",value:e(93179).Z}},entry:"index.tsx",title:"Use function to manipulate target containers",description:"Locate the ref element specified by target"},context:{react:e(75271),"react-draggable-plus":e(2474),"react-draggable-plus/builtins/PreviewList":e(65280),"./ATable.tsx":e(67560)},renderOpts:{compile:function(){var E=A()(i()().mark(function R(){var I,M=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(8999).then(e.bind(e,78999));case 2:return m.abrupt("return",(I=m.sent).default.apply(I,M));case 3:case"end":return m.stop()}},R)}));function p(){return E.apply(this,arguments)}return p}()}}}},65280:function(P,s,e){e.r(s);var x=e(75271),i=e(82187),D=e.n(i),A=e(52676),v=function(g){return(0,A.jsx)("pre",{className:D()("code-block",g==null?void 0:g.className),children:JSON.stringify(g.list,null,2)})};s.default=v},2474:function(P,s,e){e.r(s),e.d(s,{ReactDraggablePlus:function(){return En},useDraggable:function(){return X}});var x=e(26068),i=e.n(x),D=e(67825),A=e.n(D),v=e(15558),O=e.n(v),g=e(48305),E=e.n(g),p=e(75271),R=e(74233),I="[react-draggable-plus]: ";function M(n){console.warn(I+n)}function U(n){console.error(I+n)}function m(n,t,r){return r>=0&&r<n.length&&n.splice(r,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,r){return r?r.toUpperCase():""})}function Cn(n){return Object.keys(n).reduce(function(t,r){return typeof n[r]!="undefined"&&(t[tn(r)]=n[r]),t},{})}function an(n,t){return Array.isArray(n)&&n.splice(t,1),n}function rn(n,t,r){return Array.isArray(n)&&n.splice(t,0,r),n}function on(n){return typeof n=="undefined"}function Nn(n){return typeof n=="string"}function F(n,t,r){var l=n.children[r];n.insertBefore(t,l)}function B(n){n.parentNode&&n.parentNode.removeChild(n)}function jn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,r=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var l;r=t==null||(l=t.querySelector)===null||l===void 0?void 0:l.call(t,n)}else r=document.querySelector(n);return r||warn("Element not found: ".concat(n)),r}function ln(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return n.apply(r,c),t.apply(r,c)}}function un(n,t){var r=i()({},n);return Object.keys(t).forEach(function(l){r[l]?r[l]=ln(n[l],t[l]):r[l]=t[l]}),r}function sn(n){return n instanceof HTMLElement}function $(n,t){Object.keys(n).forEach(function(r){t(r,n[r])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var H=null,z=null;function G(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;H=n,z=t}function vn(){return{data:H,clonedData:z}}var w=Symbol("cloneElement");function X(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];var c=r[0],d=r[1],C=r[2],L=r[3];Array.isArray(d)||(L=d,d=null);var T=(0,p.useState)(null),N=E()(T,2),u=N[0],Y=N[1],K=(n=L)!==null&&n!==void 0?n:{},Q=K.immediate,bn=Q===void 0?!0:Q,V=K.clone,An=V===void 0?fn:V,_=K.customUpdate;function W(a){C&&C(O()(a))}function In(a){var o=d[a.oldIndex],f=An(o);G(o,f),a.item[w]=f}function Pn(a){var o=a.item[w];on(o)||(B(a.item),rn(d,a.newDraggableIndex,o),W(d))}function xn(a){var o=a.from,f=a.item,h=a.oldIndex,y=a.oldDraggableIndex,j=a.pullMode,J=a.clone;if(F(o,f,h),j==="clone"){B(J);return}an(d,y),W(d)}function Dn(a){if(_){_(a);return}var o=a.from,f=a.item,h=a.oldIndex,y=a.newIndex;B(f),F(o,f,h),m(d,h,y),W(d)}function yn(){requestIdleCallback(function(){G()})}var Ln={onUpdate:Dn,onStart:In,onAdd:Pn,onRemove:xn,onEnd:yn};function On(a){var o=c==null?void 0:c.current;return a?a&&!sn(a)?a.$el:(a||U("Root element not found"),a):o}function q(){var a,o=(a=L)!==null&&a!==void 0?a:{},f=o.immediate,h=o.clone,y=A()(o,mn);return $(y,function(j,J){dn(j)&&(y[j]=function(nn){var Mn=vn();cn(nn,Mn);for(var Z=arguments.length,en=new Array(Z>1?Z-1:0),S=1;S<Z;S++)en[S-1]=arguments[S];J.apply(void 0,[nn].concat(en))})}),un(d===null?{}:Ln,y)}var b={option:function(o,f){return u==null?void 0:u.option(o,f)},destroy:function(){u==null||u.destroy(),Y(null)},save:function(){return u==null?void 0:u.save()},toArray:function(){return u==null?void 0:u.toArray()},closest:function(){for(var o=arguments.length,f=new Array(o),h=0;h<o;h++)f[h]=arguments[h];return u==null?void 0:u.closest.apply(u,f)}},k=function(o){u&&b.destroy(),Y(new R.ZP(On(o),q()))};(0,p.useEffect)(function(){u&&$(q(),function(a,o){u==null||u.option(a,o)})},[L]);var Rn=function(){return b==null?void 0:b.option("disabled",!0)},Tn=function(){return b==null?void 0:b.option("disabled",!1)};return(0,p.useEffect)(function(){return bn&&c!==null&&c!==void 0&&c.current&&k(),function(){c!=null&&c.current&&b.destroy()}},[c]),i()({start:k,pause:Rn,resume:Tn},b)}var gn=["list","setList","className"],pn=function(t,r){var l=t.list,c=l===void 0?[]:l,d=t.setList,C=t.className,L=A()(t,gn),T=(0,p.useRef)(null),N=X((t==null?void 0:t.target)||T,c,d,L);return(0,p.useImperativeHandle)(r,function(){return i()({el:T.current},N)}),p.createElement(t.tag||"div",{ref:T,className:C},t.children)},hn=p.forwardRef(pn),En=hn},67560:function(P,s,e){e.r(s);var x=e(75271),i=e(52676),D=function(v,O){var g;return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Id"}),(0,i.jsx)("th",{children:"Name"})]})}),(0,i.jsx)("tbody",{ref:O,children:v==null||(g=v.list)===null||g===void 0?void 0:g.map(function(E){return(0,i.jsxs)("tr",{className:"cursor-move",children:[(0,i.jsx)("td",{children:E.id}),(0,i.jsx)("td",{children:E.name})]},E.name)})})]})};s.default=(0,x.forwardRef)(D)},81984:function(P,s,e){e.r(s),e.d(s,{texts:function(){return i}});var x=e(65412);const i=[{value:"Since many components that need to be dragged are not our immediate child elements in our usual use, we need to specify a target container to complete the drag function. We can specify the target container through the ",paraId:0,tocIndex:0},{value:"target",paraId:0,tocIndex:0},{value:" attribute.",paraId:0,tocIndex:0},{value:"Here we take the third-party component as an example, assuming ",paraId:1,tocIndex:0},{value:"a-table",paraId:1,tocIndex:0},{value:" is a third-party component",paraId:1,tocIndex:0},{value:`import React, { forwardRef } from 'react';

const ATable = (props, ref) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody ref={ref}>
        {props?.list?.map((item) => {
          return (
            <tr key={item.name} className="cursor-move">
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default forwardRef(ATable);
`,paraId:2,tocIndex:1}]},93179:function(P,s){s.Z=`import React, { forwardRef } from 'react';

const ATable = (props, ref) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody ref={ref}>
        {props?.list?.map((item) => {
          return (
            <tr key={item.name} className="cursor-move">
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default forwardRef(ATable);
`},57091:function(P,s){s.Z=`import React, { useRef, useState } from 'react';
import { ReactDraggablePlus } from 'react-draggable-plus';
import PreviewList from 'react-draggable-plus/builtins/PreviewList';
import ATable from './ATable';

const Demo = () => {
  const [list, setList] = useState([
    {
      name: 'Joao',
      id: 1,
    },
    {
      name: 'Jean',
      id: 2,
    },
    {
      name: 'Johanna',
      id: 3,
    },
    {
      name: 'Juan',
      id: 4,
    },
  ]);
  const atEl = useRef(null)
  return (
    <div>
      <div>
        <ReactDraggablePlus list={list} setList={setList} animation={150} target={atEl}>
          <ATable list={list} ref={atEl}></ATable>
        </ReactDraggablePlus>
      </div>
      <div className="flex justify-between">
        <PreviewList list={list} />
      </div>
    </div>
  );
};

export default Demo;
`},79831:function(P,s){s.Z=`import React, { useRef, useState } from 'react';
import { useDraggable } from 'react-draggable-plus';
import PreviewList from 'react-draggable-plus/builtins/PreviewList';
import ATable from './ATable';

const Function = () => {
  const [list, setList] = useState([
    {
      name: 'Joao',
      id: 1,
    },
    {
      name: 'Jean',
      id: 2,
    },
    {
      name: 'Johanna',
      id: 3,
    },
    {
      name: 'Juan',
      id: 4,
    },
  ]);
  const atEl = useRef(null);
  useDraggable(atEl, list, setList);

  return (
    <div>
      <ATable list={list} ref={atEl}></ATable>
      <div className="flex justify-between">
        <PreviewList list={list} />
      </div>
    </div>
  );
};

export default Function;
`}}]);
