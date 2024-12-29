import{m as r}from"./index-DV-MnqP7.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const c="ION-CONTENT",T="ion-content",l=".ion-content-scroll-host",N="".concat(T,", ").concat(l),s=o=>o.tagName===c,a=async o=>s(o)?(await new Promise(t=>r(o,t)),o.getScrollElement()):o,O=o=>o.closest(N),m=(o,t)=>s(o)?o.scrollToTop(t):Promise.resolve(o.scrollTo({top:0,left:0,behavior:"smooth"})),C=(o,t,n,e)=>s(o)?o.scrollByPoint(t,n,e):Promise.resolve(o.scrollBy({top:n,left:t,behavior:e>0?"smooth":"auto"}));export{C as a,O as f,a as g,m as s};
