"use strict";(self.webpackChunkreact_draggable_plus=self.webpackChunkreact_draggable_plus||[]).push([[9],{27867:function(L,i,e){e.r(i),e.d(i,{default:function(){return E}});var a=e(5215),r=e(75271),g=e(16443),D=function(){var O=(0,a.UO)(),o=O.id,t=(0,a.FO)(o),R=(0,g.m)({id:o,component:t.component,renderOpts:t.renderOpts}),h=R.canvasRef,v=t||{},m=v.component,d=v.renderOpts,n=(0,a.kw)(o),s=n.node,l=n.setSource,u=n.error,c=n.loading,w=s||(d!=null&&d.renderer?(0,r.createElement)("div",{ref:h}):m&&(0,r.createElement)(m));return(0,r.useEffect)(function(){var f=function(p){p.data.type==="dumi.liveDemo.setSource"&&l(p.data.value)};return window.addEventListener("message",f),function(){return window.removeEventListener("message",f)}},[l]),(0,r.useEffect)(function(){!c&&(u||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:u}})},[u,s,c]),w},E=D}}]);