webpackJsonp([6],{1645:function(n,t,a){n.exports={basic:a(1687),number:a(1688)}},1674:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.cutStrByFullLength=t.getStrFullLength=void 0;var e=i(a(80)),s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},o=function(){function n(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,a,e){return a&&n(t.prototype,a),e&&n(t,e),t}}();a(177);var p=a(0),l=i(p),c=(a(34),i(a(6)));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){var a={};for(var e in n)t.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e]);return a}var d=void 0!==document.body.style.webkitLineClamp,h=t.getStrFullLength=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("").reduce(function(n,t){var a=t.charCodeAt(0);return a>=0&&a<=128?n+1:n+2},0)},k=t.cutStrByFullLength=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],a=0;return n.split("").reduce(function(n,e){var s=e.charCodeAt(0);return(a+=s>=0&&s<=128?1:2)<=t?n+e:n},"")},f=function(n){var t=n.text,a=n.length,s=n.tooltip,o=n.fullWidthRecognition,p=u(n,["text","length","tooltip","fullWidthRecognition"]);if("string"!=typeof t)throw new Error("Ellipsis children must be string.");if((o?h(t):t.length)<=a||a<0)return l.default.createElement("span",p,t);var c=void 0;return c=a-"...".length<=0?"":o?k(t,a):t.slice(0,a),s?l.default.createElement(e.default,{overlayStyle:{wordBreak:"break-all"},title:t},l.default.createElement("span",null,c,"...")):l.default.createElement("span",p,c,"...")},g=function(n){function t(){var n,a,e;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,o=Array(s),p=0;p<s;p++)o[p]=arguments[p];return a=e=r(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(o))),e.state={text:"",targetCount:0},e.computeLine=function(){var n=e.props.lines;if(n&&!d){var t=e.shadowChildren.innerText,a=n*parseInt(getComputedStyle(e.root).lineHeight,10);e.content.style.height=a+"px";var s=e.shadowChildren.offsetHeight,o=e.shadow.firstChild;if(s<=a)return void e.setState({text:t,targetCount:t.length});var p=t.length,l=Math.ceil(p/2),c=e.bisection(a,l,0,p,t,o);e.setState({text:t,targetCount:c})}},e.bisection=function(n,t,a,s,o,p){var l=t,c=s,i=a;p.innerHTML=o.substring(0,l)+"...";var r=p.offsetHeight;return r<=n?(p.innerHTML=o.substring(0,l+1)+"...",(r=p.offsetHeight)>n?l:(i=l,l=Math.floor((c-i)/2)+i,e.bisection(n,l,i,c,o,p))):l-1<0?l:(p.innerHTML=o.substring(0,l-1)+"...",(r=p.offsetHeight)<=n?l-1:(c=l,l=Math.floor((c-i)/2)+i,e.bisection(n,l,i,c,o,p)))},e.handleRoot=function(n){e.root=n},e.handleContent=function(n){e.content=n},e.handleNode=function(n){e.node=n},e.handleShadow=function(n){e.shadow=n},e.handleShadowChildren=function(n){e.shadowChildren=n},r(e,a)}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,p.Component),o(t,[{key:"componentDidMount",value:function(){this.node&&this.computeLine()}},{key:"render",value:function(){var n=this.state,t=n.text,a=n.targetCount,o=this.props,p=o.children,i=o.lines,r=o.length,h=o.className,k=o.tooltip,g=o.fullWidthRecognition,m=u(o,["children","lines","length","className","tooltip","fullWidthRecognition"]),v=(0,c.default)("ellipsis",h,{lines:i&&!d,lineClamp:i&&d});if(!i&&!r)return l.default.createElement("span",s({className:v},m),p);if(!i)return l.default.createElement(f,s({className:v,length:r,text:p||"",tooltip:k,fullWidthRecognition:g},m));var b="antd-pro-ellipsis-"+(new Date).getTime()+Math.floor(100*Math.random());if(d){var w="#"+b+"{-webkit-line-clamp:"+i+";-webkit-box-orient: vertical;}";return l.default.createElement("div",s({id:b,className:v},m),l.default.createElement("style",null,w),k?l.default.createElement(e.default,{overlayStyle:{wordBreak:"break-all"},title:p},p):p)}var y=l.default.createElement("span",{ref:this.handleNode},a>0&&t.substring(0,a),a>0&&a<t.length&&"...");return l.default.createElement("div",s({},m,{ref:this.handleRoot,className:v}),l.default.createElement("div",{ref:this.handleContent},k?l.default.createElement(e.default,{overlayStyle:{wordBreak:"break-all"},title:t},y):y,l.default.createElement("div",{className:"shadow",ref:this.handleShadowChildren},p),l.default.createElement("div",{className:"shadow",ref:this.handleShadow},l.default.createElement("span",null,t))))}}]),t}();t.default=g},1687:function(n,t,a){n.exports={content:{"zh-CN":[["p","\u901a\u8fc7\u8bbe\u7f6e ",["code","lines"]," \u5c5e\u6027\u6307\u5b9a\u6700\u5927\u884c\u6570\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u884c\u6570\u7684\u6587\u672c\u4f1a\u81ea\u52a8\u622a\u53d6\u3002\u4f46\u662f\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u6240\u6709 ",["code","children"]," \u5c06\u4f1a\u88ab\u8f6c\u6362\u6210\u7eaf\u6587\u672c\u3002"],["p","\u5e76\u4e14\u6ce8\u610f\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u5916\u5bb9\u5668\u9700\u8981\u6709\u6307\u5b9a\u7684\u5bbd\u5ea6\uff08\u6216\u8bbe\u7f6e\u81ea\u8eab\u5bbd\u5ea6\uff09\u3002"]],"en-US":[["p",["code","lines"]," attribute specifies the maximum number of rows where the text will automatically be truncated when exceeded. In this mode, all children will be converted to plain text."],["p","Also note that, in this mode, the outer container needs to have a specified width (or set its own width)."]]},meta:{order:1,title:{"zh-CN":"\u6309\u7167\u884c\u6570\u7701\u7565","en-US":"Truncate according to the number of rows"},filename:"components/Ellipsis/demo/basic.md",id:"components-Ellipsis-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Ellipsis <span class="token keyword">from</span> <span class="token string">\'mhc-antd-admin/Ellipsis\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> article <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>There were injuries alleged <span class="token keyword">in</span> three <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#cover<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>cases <span class="token keyword">in</span> <span class="token number">2015</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> and a fourth incident <span class="token keyword">in</span> September<span class="token punctuation">,</span> according to the safety recall report<span class="token punctuation">.</span> After meeting <span class="token keyword">with</span> US regulators <span class="token keyword">in</span> October<span class="token punctuation">,</span> the firm decided to issue a voluntary recall<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ellipsis</span> <span class="token attr-name">tooltip</span> <span class="token attr-name">lines</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>article<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ellipsis</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),t=(a(10),function(n){return n&&n.__esModule?n:{default:n}}(a(1674)));var e=n.createElement("p",null,"There were injuries alleged in three ",n.createElement("a",{href:"#cover"},"cases in 2015"),", and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.");return n.createElement("div",{style:{width:200}},n.createElement(t.default,{tooltip:!0,lines:3},e))}}},1688:function(n,t,a){n.exports={content:{"zh-CN":[["p","\u901a\u8fc7\u8bbe\u7f6e ",["code","length"]," \u5c5e\u6027\u6307\u5b9a\u6587\u672c\u6700\u957f\u957f\u5ea6\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u957f\u5ea6\u4f1a\u81ea\u52a8\u622a\u53d6\u3002"]],"en-US":[["p",["code","length"]," attribute specifies the maximum length where the text will automatically be truncated when exceeded."]]},meta:{order:0,title:{"zh-CN":"\u6309\u7167\u5b57\u7b26\u6570\u7701\u7565","en-US":"Truncate according to the number of character"},filename:"components/Ellipsis/demo/number.md",id:"components-Ellipsis-demo-number"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Ellipsis <span class="token keyword">from</span> <span class="token string">\'mhc-antd-admin/Ellipsis\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> article <span class="token operator">=</span> <span class="token string">\'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ellipsis</span> <span class="token attr-name">length</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>article<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ellipsis</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Show Tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ellipsis</span> <span class="token attr-name">length</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span> <span class="token attr-name">tooltip</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>article<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Ellipsis</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),t=(a(10),function(n){return n&&n.__esModule?n:{default:n}}(a(1674)));var e="There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.";return n.createElement("div",null,n.createElement(t.default,{length:100},e),n.createElement("h4",{style:{marginTop:24}},"Show Tooltip"),n.createElement(t.default,{length:100,tooltip:!0},e))}}}});