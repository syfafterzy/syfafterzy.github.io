/* skel-viewport.js v3.0.1 | (c) skel.io | MIT licensed */
!function(e){"use strict";var t={config:{width:"device-width",height:"",scalable:!0,breakpoints:{}},init:function(i){return e.extend(t.config,i),e.addStateHandler("viewport",t.stateHandler),e.attach(e.newAttachment("mv",t.newViewportMeta("initial-scale=1"),1,!0)),"ie"==e.vars.browser&&e.vars.IEVersion>=10&&(e.attach(e.newAttachment("mVie",e.newStyle("@-ms-viewport{width:device-width}"),1,!0)),window.setTimeout(function(){var e=document.getElementsByTagName("body")[0],t=e.style.height;e.style.height="10000px",window.setTimeout(function(){e.style.height=t},250)},250)),e},newViewportMeta:function(e){var t=document.createElement("meta");return t.name="viewport",t.content=e,t},stateHandler:function(){var i,n,a;return n=e.generateStateConfig({width:t.config.width,height:t.config.height,scalable:t.config.scalable},t.config.breakpoints),a=[],a.push("user-scalable="+(n.scalable?"yes":"no")),n.width&&a.push("width="+n.width),n.height&&a.push("height="+n.height),"device-width"==n.width&&a.push("initial-scale=1"),i=e.newAttachment("mv-"+e.stateId,t.newViewportMeta(a.join(",")),1),[i]}};e.viewport=t.init}(skel);
