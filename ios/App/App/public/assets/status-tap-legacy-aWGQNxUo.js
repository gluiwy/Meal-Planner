System.register(["./index-legacy-CJwNP42-.js","./index8-legacy-DA0etzhK.js"],(function(e,t){"use strict";var n,r,s,i,o;return{setters:[e=>{n=e.l,r=e.m,s=e.n},e=>{i=e.f,o=e.s}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,a=document.elementFromPoint(t/2,n/2);if(!a)return;const c=i(a);c&&new Promise((e=>r(c,e))).then((()=>{s((async()=>{c.style.setProperty("--overflow","hidden"),await o(c,300),c.style.removeProperty("--overflow")}))}))}))}))}))}}}));
