(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d2c9723"],{"3b09":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"olo-document",attrs:{elevation:"1",rounded:"lg"}},["view"==t.mode?n("olo-viewer",{attrs:{html:t.text}}):t._e(),"edit"==t.mode?n("olo-editor",{attrs:{theme:"idle_fingers",fontsize:"14"},model:{value:t.editorContent,callback:function(e){t.editorContent=e},expression:"editorContent"}}):t._e()],1)},o=[],a=n("1da1"),c=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("99af"),n("2b0e"));function i(t,e,n){t.$set(t.$data._asyncComputed[e],"state",n),t.$set(t.$data._asyncComputed[e],"updating","updating"===n),t.$set(t.$data._asyncComputed[e],"error","error"===n),t.$set(t.$data._asyncComputed[e],"success","success"===n)}function u(t){return"function"===typeof t?t:t.get}function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function d(t){return s(t,"lazy")&&t.lazy}function f(t,e){return t[p+e]}var p="async_computed$lazy_active$",h="async_computed$lazy_data$";function l(t,e,n){t[p+e]=!1,t[h+e]=n}function m(t){return{get:function(){return this[p+t]=!0,this[h+t]},set:function(e){this[h+t]=e}}}function v(t,e,n){t[h+e]=n}function y(t,e){return t[h+e]}var w=function(t){return function(){var e=this;return t.watch.forEach((function(t){var n=t.split(".");if(1===n.length)e[t];else try{var r=e;n.forEach((function(t){r=r[t]}))}catch(o){throw console.error("AsyncComputed: bad path: ",t),o}})),t.get.call(this)}},g=function(t){return function(){return t.watch.call(this),t.get.call(this)}};function C(t){if("function"===typeof t.watch)return g(t);if(Array.isArray(t.watch))return t.watch.forEach((function(t){if("string"!==typeof t)throw new Error("AsyncComputed: watch elemnts must be strings")})),w(t);throw Error("AsyncComputed: watch should be function or an array")}var b="function"===typeof Symbol?Symbol("did-not-update"):{},$=function(t,e){return function(){return t.shouldUpdate.call(this)?e.call(this):b}},_=function(t){return b===t},x="_async_computed$",k={install:function(t,e){e=e||{},t.config.optionMergeStrategies.asyncComputed=t.config.optionMergeStrategies.computed,t.mixin({data:function(){return{_asyncComputed:{}}},computed:{$asyncComputed:function(){return this.$data._asyncComputed}},beforeCreate:function(){var t=this.$options.asyncComputed||{};if(Object.keys(t).length){for(var n in t){var r=O(n,t[n]);this.$options.computed[x+n]=r}this.$options.data=E(this.$options,e)}},created:function(){for(var n in this.$options.asyncComputed||{}){var r=this.$options.asyncComputed[n],o=j.call(this,r,e);d(r)?v(this,n,o):this[n]=o}for(var a in this.$options.asyncComputed||{})R(this,a,e,t)}})}};function R(t,e,n,r){var o=0,a=function(a){var c=++o;_(a)||(a&&a.then||(a=Promise.resolve(a)),i(t,e,"updating"),a.then((function(n){c===o&&(i(t,e,"success"),t[e]=n)})).catch((function(a){if(c===o&&(i(t,e,"error"),r.set(t.$data._asyncComputed[e],"exception",a),!1!==n.errorHandler)){var u=void 0===n.errorHandler?console.error.bind(console,"Error evaluating async computed property:"):n.errorHandler;n.useRawError?u(a,t,a.stack):u(a.stack)}})))};r.set(t.$data._asyncComputed,e,{exception:null,update:function(){t._isDestroyed||a(u(t.$options.asyncComputed[e]).apply(t))}}),i(t,e,"updating"),t.$watch(x+e,a,{immediate:!0})}function E(t,e){var n=t.data,r=t.asyncComputed||{};return function(t){var o=("function"===typeof n?n.call(this,t):n)||{};for(var a in r){var c=this.$options.asyncComputed[a],i=j.call(this,c,e);d(c)?(l(o,a,i),this.$options.computed[a]=m(a)):o[a]=i}return o}}function O(t,e){if("function"===typeof e)return e;var n=e.get;if(s(e,"watch")&&(n=C(e)),s(e,"shouldUpdate")&&(n=$(e,n)),d(e)){var r=n;n=function(){return f(this,t)?r.call(this):y(this,t)}}return n}function j(t,e){var n=null;return"default"in t?n=t.default:"default"in e&&(n=e.default),"function"===typeof n?n.call(this):n}"undefined"!==typeof window&&window.Vue&&window.Vue.use(k);var z=k;c["a"].use(z);var A={name:"olo-document",components:{"olo-viewer":function(){return n.e("chunk-17ebd2c0").then(n.bind(null,"b504"))},"olo-editor":function(){return n.e("chunk-4f8cdaa0").then(n.bind(null,"a9ed"))}},props:["store","docid","mode","presets"],data:function(){return{source:"",editorContent:""}},computed:{context:function(){return this.store?this.createDocument().createContext(this.presets):{}},path:function(){return this.docid.split("?")[0]},evaluate:function(){return this.createDocument(this.source).parse()},text:function(){return this.doc.text},data:function(){return this.doc.data}},asyncComputed:{fileContent:{get:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t.store.read(t.path));case 4:return e.prev=4,e.t0=e["catch"](0),e.abrupt("return","<p><b>Failed to load ".concat(t.path,"</b></p>\n                            <code><pre>").concat(e.t0.message,"</pre></code>"));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))()},default:""},doc:{get:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.evaluate(t.context));case 1:case"end":return e.stop()}}),e)})))()},default:{text:"",data:{}}}},watch:{fileContent:function(){this.source=this.fileContent},source:function(){this.editorContent=this.source},doc:function(){this.$emit("doc-rendered",this.doc.data)}},methods:{createDocument:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new this.store.constructor.Document(this.store,this.docid,t)},commit:function(){this.source=this.editorContent},save:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit(),e.next=3,t.store.write(t.path,t.source);case 3:case"end":return e.stop()}}),e)})))()},delete:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.store.delete(t.path);case 2:t.source="";case 3:case"end":return e.stop()}}),e)})))()}}},D=A,S=(n("445f"),n("2877")),H=n("6544"),V=n.n(H),J=n("b0af"),M=Object(S["a"])(D,r,o,!1,null,null,null);e["default"]=M.exports;V()(M,{VCard:J["a"]})},"445f":function(t,e,n){"use strict";n("472b")},"472b":function(t,e,n){}}]);
//# sourceMappingURL=chunk-7d2c9723.9c1e90d9.js.map