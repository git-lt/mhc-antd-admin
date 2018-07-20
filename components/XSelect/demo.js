webpackJsonp([4],{1655:function(n,a,t){n.exports={create:t(1701)}},1670:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t(41),e=(t.n(s),t(1671));t.n(e),t(626)},1671:function(n,a){},1701:function(n,a,t){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/XSelect/demo/create.md",id:"components-XSelect-demo-create"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> XSelect <span class="token keyword">from</span> <span class="token string">\'mhc-antd-admin/XSelect\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CONTACT_INFO_TYPE <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> key<span class="token punctuation">:</span> <span class="token string">\'6\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">\'\u9a8c\u8f66\u53f8\u673a\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> key<span class="token punctuation">:</span> <span class="token string">\'7\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">\'\u9a8c\u8f66\u4e13\u5458\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> key<span class="token punctuation">:</span> <span class="token string">\'8\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">\'\u9a8c\u8f66\u5458\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XSelect</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>CONTACT_INFO_TYPE<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">140</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=t(0),a=(t(10),function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}()),s=function(n){return n&&n.__esModule?n:{default:n}}(t(1702));var e=[{key:"6",value:"\u9a8c\u8f66\u53f8\u673a"},{key:"7",value:"\u9a8c\u8f66\u4e13\u5458"},{key:"8",value:"\u9a8c\u8f66\u5458"}],p=function(t){function p(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,p),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(p,n.Component),a(p,[{key:"render",value:function(){return n.createElement(s.default,{data:e,style:{width:140}})}}]),p}();return n.createElement(p,null)}}},1702:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=c(t(153)),e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n};t(1670);var p=c(t(0)),o=c(t(5));t(34);function c(n){return n&&n.__esModule?n:{default:n}}function l(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}var u=function(n){var a,t=n.onSelect,o=n.labelInValue,c=n.data,u=n.placeholder,r=n.keyName,i=n.valueName,k=n.hasAll,f=function(n,a){var t={};for(var s in n)a.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t}(n,["onSelect","labelInValue","data","placeholder","keyName","valueName","hasAll"]);k&&"\u5168\u90e8"!==c[0][i]&&c.unshift((l(a={},r,""),l(a,i,"\u5168\u90e8"),a));return p.default.createElement(s.default,e({placeholder:u,labelInValue:o,onSelect:t},f),c.map(function(n,a){return p.default.createElement(s.default.Option,{value:String(n[r]),key:a},n[i])}))};u.defaultProps={onSelect:function(){},labelInValue:!1,keyName:"key",valueName:"value",data:[],placeholder:"\u8bf7\u9009\u62e9",hasAll:!1},u.propTypes={onSelect:o.default.func,labelInValue:o.default.bool,keyName:o.default.string,valueName:o.default.string,placeholder:o.default.string,data:o.default.array,hasAll:o.default.bool},a.default=u}});