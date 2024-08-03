"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[1256],{69186:function(P,s,e){e.r(s),e.d(s,{demos:function(){return g}});var D=e(90228),u=e.n(D),x=e(87999),A=e.n(x),v=e(75271),R=e(8441),g={"src-target-container-demo-demo":{component:v.memo(v.lazy(function(){return e.e(2433).then(e.bind(e,11820))})),asset:{type:"BLOCK",id:"src-target-container-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57091).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"},"./ATable.tsx":{type:"FILE",value:e(93179).Z}},entry:"index.tsx",title:"\u4F7F\u7528\u7EC4\u4EF6\u64CD\u4F5C\u76EE\u6807\u5BB9\u5668",description:"\u627E\u5230target\u6307\u5B9A\u7684ref\u5143\u7D20"},context:{react:e(75271),"react-draggable-plus":e(2474),"react-draggable-plus/builtins/PreviewList":e(65280),"./ATable.tsx":e(67560)},renderOpts:{compile:function(){var E=A()(u()().mark(function y(){var I,M=arguments;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(8999).then(e.bind(e,78999));case 2:return m.abrupt("return",(I=m.sent).default.apply(I,M));case 3:case"end":return m.stop()}},y)}));function p(){return E.apply(this,arguments)}return p}()}},"src-target-container-demo-function":{component:v.memo(v.lazy(function(){return e.e(2433).then(e.bind(e,86203))})),asset:{type:"BLOCK",id:"src-target-container-demo-function",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(79831).Z},react:{type:"NPM",value:"18.3.1"},"react-draggable-plus":{type:"NPM",value:"0.0.3"},"./ATable.tsx":{type:"FILE",value:e(93179).Z}},entry:"index.tsx",title:"\u4F7F\u7528function\u64CD\u4F5C\u76EE\u6807\u5BB9\u5668",description:"\u627E\u5230target\u6307\u5B9A\u7684ref\u5143\u7D20"},context:{react:e(75271),"react-draggable-plus":e(2474),"react-draggable-plus/builtins/PreviewList":e(65280),"./ATable.tsx":e(67560)},renderOpts:{compile:function(){var E=A()(u()().mark(function y(){var I,M=arguments;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(8999).then(e.bind(e,78999));case 2:return m.abrupt("return",(I=m.sent).default.apply(I,M));case 3:case"end":return m.stop()}},y)}));function p(){return E.apply(this,arguments)}return p}()}}}},65280:function(P,s,e){e.r(s);var D=e(75271),u=e(82187),x=e.n(u),A=e(52676),v=function(g){return(0,A.jsx)("pre",{className:x()("code-block",g==null?void 0:g.className),children:JSON.stringify(g.list,null,2)})};s.default=v},2474:function(P,s,e){e.r(s),e.d(s,{ReactDraggablePlus:function(){return En},useDraggable:function(){return Y}});var D=e(26068),u=e.n(D),x=e(67825),A=e.n(x),v=e(15558),R=e.n(v),g=e(48305),E=e.n(g),p=e(75271),y=e(74233),I="[react-draggable-plus]: ";function M(n){console.warn(I+n)}function U(n){console.error(I+n)}function m(n,t,a){return a>=0&&a<n.length&&n.splice(a,0,n.splice(t,1)[0]),n}function tn(n){return n.replace(/-(\w)/g,function(t,a){return a?a.toUpperCase():""})}function Cn(n){return Object.keys(n).reduce(function(t,a){return typeof n[a]!="undefined"&&(t[tn(a)]=n[a]),t},{})}function rn(n,t){return Array.isArray(n)&&n.splice(t,1),n}function an(n,t,a){return Array.isArray(n)&&n.splice(t,0,a),n}function ln(n){return typeof n=="undefined"}function Nn(n){return typeof n=="string"}function F(n,t,a){var o=n.children[a];n.insertBefore(t,o)}function B(n){n.parentNode&&n.parentNode.removeChild(n)}function jn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,a=null;if(typeof(t==null?void 0:t.querySelector)=="function"){var o;a=t==null||(o=t.querySelector)===null||o===void 0?void 0:o.call(t,n)}else a=document.querySelector(n);return a||warn("Element not found: ".concat(n)),a}function on(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var o=arguments.length,c=new Array(o),d=0;d<o;d++)c[d]=arguments[d];return n.apply(a,c),t.apply(a,c)}}function un(n,t){var a=u()({},n);return Object.keys(t).forEach(function(o){a[o]?a[o]=on(n[o],t[o]):a[o]=t[o]}),a}function sn(n){return n instanceof HTMLElement}function $(n,t){Object.keys(n).forEach(function(a){t(a,n[a])})}function dn(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var cn=Object.assign,mn=["immediate","clone"];function fn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var z=null,H=null;function G(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z=n,H=t}function vn(){return{data:z,clonedData:H}}var X=Symbol("cloneElement");function Y(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];var c=a[0],d=a[1],C=a[2],L=a[3];Array.isArray(d)||(L=d,d=null);var T=(0,p.useState)(null),N=E()(T,2),i=N[0],Q=N[1],K=(n=L)!==null&&n!==void 0?n:{},V=K.immediate,bn=V===void 0?!0:V,w=K.clone,An=w===void 0?fn:w,_=K.customUpdate;function W(r){C&&C(R()(r))}function In(r){var l=d[r.oldIndex],f=An(l);G(l,f),r.item[X]=f}function Pn(r){var l=r.item[X];ln(l)||(B(r.item),an(d,r.newDraggableIndex,l),W(d))}function Dn(r){var l=r.from,f=r.item,h=r.oldIndex,O=r.oldDraggableIndex,j=r.pullMode,J=r.clone;if(F(l,f,h),j==="clone"){B(J);return}rn(d,O),W(d)}function xn(r){if(_){_(r);return}var l=r.from,f=r.item,h=r.oldIndex,O=r.newIndex;B(f),F(l,f,h),m(d,h,O),W(d)}function On(){requestIdleCallback(function(){G()})}var Ln={onUpdate:xn,onStart:In,onAdd:Pn,onRemove:Dn,onEnd:On};function Rn(r){var l=c==null?void 0:c.current;return r?r&&!sn(r)?r.$el:(r||U("Root element not found"),r):l}function q(){var r,l=(r=L)!==null&&r!==void 0?r:{},f=l.immediate,h=l.clone,O=A()(l,mn);return $(O,function(j,J){dn(j)&&(O[j]=function(nn){var Mn=vn();cn(nn,Mn);for(var Z=arguments.length,en=new Array(Z>1?Z-1:0),S=1;S<Z;S++)en[S-1]=arguments[S];J.apply(void 0,[nn].concat(en))})}),un(d===null?{}:Ln,O)}var b={option:function(l,f){return i==null?void 0:i.option(l,f)},destroy:function(){i==null||i.destroy(),Q(null)},save:function(){return i==null?void 0:i.save()},toArray:function(){return i==null?void 0:i.toArray()},closest:function(){for(var l=arguments.length,f=new Array(l),h=0;h<l;h++)f[h]=arguments[h];return i==null?void 0:i.closest.apply(i,f)}},k=function(l){i&&b.destroy(),Q(new y.ZP(Rn(l),q()))};(0,p.useEffect)(function(){i&&$(q(),function(r,l){i==null||i.option(r,l)})},[L]);var yn=function(){return b==null?void 0:b.option("disabled",!0)},Tn=function(){return b==null?void 0:b.option("disabled",!1)};return(0,p.useEffect)(function(){return bn&&c!==null&&c!==void 0&&c.current&&k(),function(){c!=null&&c.current&&b.destroy()}},[c]),u()({start:k,pause:yn,resume:Tn},b)}var gn=["list","setList","className"],pn=function(t,a){var o=t.list,c=o===void 0?[]:o,d=t.setList,C=t.className,L=A()(t,gn),T=(0,p.useRef)(null),N=Y((t==null?void 0:t.target)||T,c,d,L);return(0,p.useImperativeHandle)(a,function(){return u()({el:T.current},N)}),p.createElement(t.tag||"div",{ref:T,className:C},t.children)},hn=p.forwardRef(pn),En=hn},67560:function(P,s,e){e.r(s);var D=e(75271),u=e(52676),x=function(v,R){var g;return(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Id"}),(0,u.jsx)("th",{children:"Name"})]})}),(0,u.jsx)("tbody",{ref:R,children:v==null||(g=v.list)===null||g===void 0?void 0:g.map(function(E){return(0,u.jsxs)("tr",{className:"cursor-move",children:[(0,u.jsx)("td",{children:E.id}),(0,u.jsx)("td",{children:E.name})]},E.name)})})]})};s.default=(0,D.forwardRef)(x)},94461:function(P,s,e){e.r(s),e.d(s,{texts:function(){return u}});var D=e(8441);const u=[{value:"\u7531\u4E8E\u6211\u4EEC\u5E73\u65F6\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5F88\u591A\u9700\u8981\u62D6\u62FD\u7684\u7EC4\u4EF6\u5E76\u975E\u6211\u4EEC\u7684\u76F4\u7CFB\u5B50\u5143\u7D20\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u6307\u5B9A\u4E00\u4E2A\u76EE\u6807\u5BB9\u5668\uFF0C\u6765\u5B8C\u6210\u62D6\u62FD\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"target",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u6765\u6307\u5B9A\u76EE\u6807\u5BB9\u5668\u3002",paraId:0,tocIndex:0},{value:"\u6B64\u5904\u6211\u4EEC\u4EE5\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u4E3A\u4F8B\uFF0C\u5047\u8BBE",paraId:1,tocIndex:0},{value:"a-table",paraId:1,tocIndex:0},{value:"\u4E3A\u7B2C\u4E09\u65B9\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:`import React, { forwardRef } from 'react';

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
