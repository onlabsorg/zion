(function(e){function n(n){for(var r,o,u=n[0],c=n[1],i=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==s[u]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={index:0},s={index:0},a=[];function u(e){return c.p+"js/"+({"swan_modules/debug":"swan_modules/debug","swan_modules/list":"swan_modules/list","swan_modules/markdown":"swan_modules/markdown","swan_modules/numb":"swan_modules/numb","swan_modules/text":"swan_modules/text","swan_modules/time":"swan_modules/time"}[e]||e)+"."+{"chunk-503539cb":"fabf6817","chunk-5ba6694a":"ce18e4d6","chunk-6b38f6f3":"cfe66544","chunk-957562aa":"5d037936","chunk-7357ccc0":"cde5d5ff","chunk-05fe35d6":"0cfb06d6","chunk-402fdeef":"fb83eec4","swan_modules/debug":"c2e4e257","swan_modules/list":"da90fa46","swan_modules/markdown":"370b1da3","swan_modules/numb":"dc47200b","swan_modules/text":"95304708","swan_modules/time":"a9536d6a","chunk-17ebd2c0":"8c32cf4b","chunk-4f8cdaa0":"6d9bac16"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-503539cb":1,"chunk-5ba6694a":1,"chunk-6b38f6f3":1,"chunk-7357ccc0":1,"chunk-05fe35d6":1,"chunk-402fdeef":1,"chunk-17ebd2c0":1,"chunk-4f8cdaa0":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({"swan_modules/debug":"swan_modules/debug","swan_modules/list":"swan_modules/list","swan_modules/markdown":"swan_modules/markdown","swan_modules/numb":"swan_modules/numb","swan_modules/text":"swan_modules/text","swan_modules/time":"swan_modules/time"}[e]||e)+"."+{"chunk-503539cb":"50b814e9","chunk-5ba6694a":"59bea105","chunk-6b38f6f3":"664d6a40","chunk-957562aa":"31d6cfe0","chunk-7357ccc0":"de69aa5f","chunk-05fe35d6":"93295798","chunk-402fdeef":"905b1511","swan_modules/debug":"31d6cfe0","swan_modules/list":"31d6cfe0","swan_modules/markdown":"31d6cfe0","swan_modules/numb":"31d6cfe0","swan_modules/text":"31d6cfe0","swan_modules/time":"31d6cfe0","chunk-17ebd2c0":"a7ff79ec","chunk-4f8cdaa0":"79896427"}[e]+".css",s=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===s))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===s)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),t(a)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var r=s[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=s[e]=[n,t]}));n.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=s[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}s[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("1da1"),o=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("96cf"),t("81ae")),s=t("72f6");function a(e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t,r,o,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0,r=["index"];case 1:if(!(t<r.length)){e.next=14;break}return o=r[t],e.next=5,fetch("home-template/".concat(o,".olo"));case 5:return s=e.sent,e.next=8,s.text();case 8:return a=e.sent,e.next=11,n.write(o,a);case 11:t++,e.next=1;break;case 14:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}window.olo=o,document.addEventListener("DOMContentLoaded",Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new o["BrowserStore"]("zion_home_store"),e.next=3,n.list("/");case 3:if(e.t0=e.sent.length,0!==e.t0){e.next=7;break}return e.next=7,a(n);case 7:return e.next=9,Object(s["a"])("#app",{appName:"Zion",routes:{"/":new o["HTTPStore"](location.origin+"/",{extension:".olo"}),"/home/":n,"http:/":new o["HTTPStore"]("http:/"),"https:/":new o["HTTPStore"]("https:/"),"temp:/":new o["MemoryStore"]},context:{__zion__:{version:t("9224").version}},homePath:"/home/index",helpPath:"/help/index",treeRoot:"/home"});case 9:o["zion"]=e.sent;case 10:case"end":return e.stop()}}),e)}))))},9224:function(e){e.exports=JSON.parse('{"name":"zion","version":"0.3.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@onlabsorg/olojs":"0.23.x","@onlabsorg/olowiki":"0.17.x","core-js":"^3.6.5","vue":"^2.6.11","vuetify":"^2.6.0"},"devDependencies":{"@vue/cli-plugin-babel":"~4.5.13","@vue/cli-plugin-eslint":"~4.5.13","@vue/cli-service":"~4.5.13","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^6.2.2","sass":"~1.32.0","sass-loader":"^10.0.0","vue-cli-plugin-vuetify":"~2.4.8","vue-template-compiler":"^2.6.11","vuetify-loader":"^1.7.0"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{}},"browserslist":["> 1%","last 2 versions","not dead"]}')}});
//# sourceMappingURL=index.b7a26ad2.js.map