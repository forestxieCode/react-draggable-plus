"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[9542],{61351:function(I,c,l){l.r(c);var A=l(75271),g=l(82187),x=l.n(g),m=l(52676),E=function(u){return(0,m.jsx)("svg",{className:x()("icon",u==null?void 0:u.className),onClick:function(){return u.onClick(u.index)},viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",children:(0,m.jsx)("path",{d:"M512 570.88l196.864 196.8 58.88-58.88L570.752 512l196.864-196.864-58.816-58.88L512 453.248 315.136 256.32l-58.88 58.88L453.248 512l-196.864 196.864 58.88 58.88L512 570.752z"})})};c.default=E},18890:function(I,c,l){l.r(c);var A=l(75271),g=l(82187),x=l.n(g),m=l(52676),E=function(u){return(0,m.jsxs)("svg",{className:x()("icon",u==null?void 0:u.className),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",children:[(0,m.jsx)("path",{d:"M384 320l512 0c17.696 0 32-14.336 32-32s-14.304-32-32-32L384 256c-17.664 0-32 14.336-32 32S366.336 320 384 320z",fill:"#5D646F"}),(0,m.jsx)("path",{d:"M896 480 384 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l512 0c17.696 0 32-14.336 32-32S913.696 480 896 480z",fill:"#5D646F"}),(0,m.jsx)("path",{d:"M896 704 384 704c-17.664 0-32 14.304-32 32s14.336 32 32 32l512 0c17.696 0 32-14.304 32-32S913.696 704 896 704z",fill:"#5D646F"}),(0,m.jsx)("path",{d:"M192 288m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z",fill:"#5D646F"}),(0,m.jsx)("path",{d:"M192 512m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z",fill:"#5D646F"}),(0,m.jsx)("path",{d:"M192 736m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z",fill:"#5D646F"})]})};c.default=E},24462:function(I,c,l){l.r(c);var A=l(75271),g=l(82187),x=l.n(g),m=l(52676),E=function(u){return(0,m.jsx)("pre",{className:x()("code-block",u==null?void 0:u.className),children:JSON.stringify(u.list,null,2)})};c.default=E},85614:function(I,c,l){l.r(c),l.d(c,{ReactDraggablePlus:function(){return xn},useDraggable:function(){return $}});var A=l(26068),g=l.n(A),x=l(67825),m=l.n(x),E=l(15558),P=l.n(E),u=l(48305),T=l.n(u),p=l(75271),q=l(74233),U="[react-draggable-plus]: ";function Nn(n){console.warn(U+n)}function k(n){console.error(U+n)}function nn(n,e,a){return a>=0&&a<n.length&&n.splice(a,0,n.splice(e,1)[0]),n}function en(n){return n.replace(/-(\w)/g,function(e,a){return a?a.toUpperCase():""})}function Rn(n){return Object.keys(n).reduce(function(e,a){return typeof n[a]!="undefined"&&(e[en(a)]=n[a]),e},{})}function tn(n,e){return Array.isArray(n)&&n.splice(e,1),n}function an(n,e,a){return Array.isArray(n)&&n.splice(e,0,a),n}function ln(n){return typeof n=="undefined"}function jn(n){return typeof n=="string"}function B(n,e,a){var r=n.children[a];n.insertBefore(e,r)}function N(n){n.parentNode&&n.parentNode.removeChild(n)}function yn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document,a=null;if(typeof(e==null?void 0:e.querySelector)=="function"){var r;a=e==null||(r=e.querySelector)===null||r===void 0?void 0:r.call(e,n)}else a=document.querySelector(n);return a||warn("Element not found: ".concat(n)),a}function on(n,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;return function(){for(var r=arguments.length,d=new Array(r),s=0;s<r;s++)d[s]=arguments[s];return n.apply(a,d),e.apply(a,d)}}function rn(n,e){var a=g()({},n);return Object.keys(e).forEach(function(r){a[r]?a[r]=on(n[r],e[r]):a[r]=e[r]}),a}function sn(n){return n instanceof HTMLElement}function W(n,e){Object.keys(n).forEach(function(a){e(a,n[a])})}function un(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}var dn=Object.assign,cn=["immediate","clone"];function mn(n){return n==null?n:JSON.parse(JSON.stringify(n))}var J=null,K=null;function F(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;J=n,K=e}function fn(){return{data:J,clonedData:K}}var Z=Symbol("cloneElement");function $(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var d=a[0],s=a[1],b=a[2],D=a[3];Array.isArray(s)||(D=s,s=null);var L=(0,p.useState)(null),M=T()(L,2),i=M[0],z=M[1],R=(n=D)!==null&&n!==void 0?n:{},H=R.immediate,En=H===void 0?!0:H,G=R.clone,pn=G===void 0?mn:G,X=R.customUpdate;function j(t){b&&b(P()(t))}function Cn(t){var o=s[t.oldIndex],f=pn(o);F(o,f),t.item[Z]=f}function Dn(t){var o=t.item[Z];ln(o)||(N(t.item),an(s,t.newDraggableIndex,o),j(s))}function In(t){var o=t.from,f=t.item,v=t.oldIndex,C=t.oldDraggableIndex,O=t.pullMode,y=t.clone;if(B(o,f,v),O==="clone"){N(y);return}tn(s,C),j(s)}function Ln(t){if(X){X(t);return}var o=t.from,f=t.item,v=t.oldIndex,C=t.newIndex;N(f),B(o,f,v),nn(s,v,C),j(s)}function An(){requestIdleCallback(function(){F()})}var Pn={onUpdate:Ln,onStart:Cn,onAdd:Dn,onRemove:In,onEnd:An};function bn(t){var o=d==null?void 0:d.current;return t?t&&!sn(t)?t.$el:(t||k("Root element not found"),t):o}function Y(){var t,o=(t=D)!==null&&t!==void 0?t:{},f=o.immediate,v=o.clone,C=m()(o,cn);return W(C,function(O,y){un(O)&&(C[O]=function(V){var Sn=fn();dn(V,Sn);for(var w=arguments.length,_=new Array(w>1?w-1:0),S=1;S<w;S++)_[S-1]=arguments[S];y.apply(void 0,[V].concat(_))})}),rn(s===null?{}:Pn,C)}var h={option:function(o,f){return i==null?void 0:i.option(o,f)},destroy:function(){i==null||i.destroy(),z(null)},save:function(){return i==null?void 0:i.save()},toArray:function(){return i==null?void 0:i.toArray()},closest:function(){for(var o=arguments.length,f=new Array(o),v=0;v<o;v++)f[v]=arguments[v];return i==null?void 0:i.closest.apply(i,f)}},Q=function(o){i&&h.destroy(),z(new q.ZP(bn(o),Y()))};(0,p.useEffect)(function(){i&&W(Y(),function(t,o){i==null||i.option(t,o)})},[D]);var Mn=function(){return h==null?void 0:h.option("disabled",!0)},On=function(){return h==null?void 0:h.option("disabled",!1)};return(0,p.useEffect)(function(){return En&&d!==null&&d!==void 0&&d.current&&Q(),function(){d!=null&&d.current&&h.destroy()}},[d]),g()({start:Q,pause:Mn,resume:On},h)}var vn=["list","setList","className"],gn=function(e,a){var r=e.list,d=r===void 0?[]:r,s=e.setList,b=e.className,D=m()(e,vn),L=(0,p.useRef)(null),M=$((e==null?void 0:e.target)||L,d,s,D);return(0,p.useImperativeHandle)(a,function(){return g()({el:L.current},M)}),p.createElement(e.tag||"div",{ref:L,className:b},e.children)},hn=p.forwardRef(gn),xn=hn},64395:function(I,c){c.Z=`import React, { useState } from "react"
import { ReactDraggablePlus } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import IconClose from "react-draggable-plus/builtins/IconClose"
import IconSort from "react-draggable-plus/builtins/IconSort"

const Demo = () => {
  const [list, setList] = useState([{
    name: 'Joao',
    id: '1'
  },
  {
    name: 'Jean',
    id: '2'
  },
  {
    name: 'Johanna',
    id: '3'
  },
  {
    name: 'Juan',
    id: '4'
  }])
  const handleAdd = () => {
    const length = list.length + 1
    setList([...list, {
      name: \`Juan \${length}\`,
      id: \`\${length}\`
    }])
  }
  const remove = (index) => {
    list.splice(index, 1)
    setList([...list]);
  }
  const handleChange = (event, index)=> {
    const node = list[index]
    node.name = event.target.value
    list.splice(index, 1, node)
    setList([...list]);
  }

  return <>
      <button type="button" onClick={handleAdd}>Add</button>

      <div className="flex m-t-20px">
        <ReactDraggablePlus
          list={list}
          setList={setList}
          handle=".handle"
          className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded"
        >
          {
            list.map((item, index) => {
              return <div
                  key={item.id}
                  className="h-50px bg-gray-500/5 rounded flex items-center justify-between px-4"
                >
                  <IconSort className="handle cursor-move"></IconSort>
                  <input type="text" value={item.name} onChange={ (event) => handleChange(event, index)}/>
                  <IconClose className="cursor-pointer" index={index} onClick={() => remove(index)}></IconClose>
                </div>
            })
          }
        </ReactDraggablePlus>
        <PreviewList list={list}></PreviewList>
    </div>
  </>
}
export default Demo
`},50239:function(I,c){c.Z=`import React, { useRef, useState } from "react"
import { useDraggable } from "react-draggable-plus"
import PreviewList from "react-draggable-plus/builtins/PreviewList"
import IconClose from "react-draggable-plus/builtins/IconClose"
import IconSort from "react-draggable-plus/builtins/IconSort"

const Function = () => {
  const el = useRef(null)
  const [list, setList] = useState([{
    name: 'Joao',
    id: '1'
  },
  {
    name: 'Jean',
    id: '2'
  },
  {
    name: 'Johanna',
    id: '3'
  },
  {
    name: 'Juan',
    id: '4'
  }])
  const handleAdd = () => {
    const length = list.length + 1
    setList([...list, {
      name: \`Juan \${length}\`,
      id: \`\${length}\`
    }])
  }
  const remove = (index) => {
    list.splice(index, 1)
    setList([...list]);
  }
  const handleChange = (event, index)=> {
    const node = list[index]
    node.name = event.target.value
    list.splice(index, 1, node)
    setList([...list]);
  }
  useDraggable(el, list, setList, { animation: 150, handle: '.handle' })

  return <>
    <button type="button" onClick={handleAdd}>Add</button>
    <div className="flex m-t-20px">
      <div className="flex flex-col gap-2 p-4 w-300px h-360px m-r-40px bg-gray-500/5 rounded" ref={el}>
        {
            list.map((item, index) => {
              return <div
                  key={item.id}
                  className="h-50px bg-gray-500/5 rounded flex items-center justify-between px-4"
                >
                  <IconSort className="handle cursor-move"></IconSort>
                  <input type="text" value={item.name} onChange={ (event) => handleChange(event, index)}/>
                  <IconClose className="cursor-pointer" index={index} onClick={() => remove(index)}></IconClose>
                </div>
            })
        }
      </div>
      <PreviewList list={list} />
    </div>
  </>
}
export default Function
`}}]);
