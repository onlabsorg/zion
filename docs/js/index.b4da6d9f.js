(function(e){function n(n){for(var r,o,s=n[0],c=n[1],d=n[2],l=0,i=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&i.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(i.length)i.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var s=t[o];0!==a[s]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={index:0},a={index:0},u=[];function s(e){return c.p+"js/"+({"swan_modules/debug":"swan_modules/debug","swan_modules/list":"swan_modules/list","swan_modules/markdown":"swan_modules/markdown","swan_modules/numb":"swan_modules/numb","swan_modules/text":"swan_modules/text","swan_modules/time":"swan_modules/time"}[e]||e)+"."+{"chunk-04d65bf2":"1dab358e","chunk-6b38f6f3":"69eb92ef","chunk-957562aa":"5d037936","chunk-7357ccc0":"cde5d5ff","chunk-05fe35d6":"d2f0963c","chunk-7d2c9723":"0c2495af","swan_modules/debug":"c2e4e257","swan_modules/list":"da90fa46","swan_modules/markdown":"1f9f74be","swan_modules/numb":"dc47200b","swan_modules/text":"95304708","swan_modules/time":"a9536d6a","chunk-2b783612":"778381b5","chunk-4f8cdaa0":"7829ce0f"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-04d65bf2":1,"chunk-6b38f6f3":1,"chunk-7357ccc0":1,"chunk-05fe35d6":1,"chunk-7d2c9723":1,"chunk-2b783612":1,"chunk-4f8cdaa0":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({"swan_modules/debug":"swan_modules/debug","swan_modules/list":"swan_modules/list","swan_modules/markdown":"swan_modules/markdown","swan_modules/numb":"swan_modules/numb","swan_modules/text":"swan_modules/text","swan_modules/time":"swan_modules/time"}[e]||e)+"."+{"chunk-04d65bf2":"59bea105","chunk-6b38f6f3":"664d6a40","chunk-957562aa":"31d6cfe0","chunk-7357ccc0":"de69aa5f","chunk-05fe35d6":"605b1f06","chunk-7d2c9723":"905b1511","swan_modules/debug":"31d6cfe0","swan_modules/list":"31d6cfe0","swan_modules/markdown":"31d6cfe0","swan_modules/numb":"31d6cfe0","swan_modules/text":"31d6cfe0","swan_modules/time":"31d6cfe0","chunk-2b783612":"d040954a","chunk-4f8cdaa0":"79896427"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var d=u[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===a))return n()}var i=document.getElementsByTagName("style");for(s=0;s<i.length;s++){d=i[s],l=d.getAttribute("data-href");if(l===r||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),t(u)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=u);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var i=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,t[1](i)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var i=0;i<d.length;i++)n(d[i]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("1da1"),o=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("96cf"),t("81ae")),a=t("72f6");function u(e){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t,r,o,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0,r=["index"];case 1:if(!(t<r.length)){e.next=14;break}return o=r[t],e.next=5,fetch("home-template/".concat(o,".olo"));case 5:return a=e.sent,e.next=8,a.text();case 8:return u=e.sent,e.next=11,n.write(o,u);case 11:t++,e.next=1;break;case 14:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}window.olo=o,document.addEventListener("DOMContentLoaded",Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new o["BrowserStore"]("zion_home_store"),e.next=3,n.list("/");case 3:if(e.t0=e.sent.length,0!==e.t0){e.next=7;break}return e.next=7,u(n);case 7:o["zion"]=Object(a["a"])("#app",{appName:"Zion",routes:{"/":new o["HTTPStore"](location.origin+"/",{extension:".olo"}),"/home/":n,"http:/":new o["HTTPStore"]("http:/"),"https:/":new o["HTTPStore"]("https:/"),"temp:/":new o["MemoryStore"]},homePath:"/home/index",helpPath:"/help/index",treeRoot:"/home"});case 8:case"end":return e.stop()}}),e)}))))}});
//# sourceMappingURL=index.b4da6d9f.js.map