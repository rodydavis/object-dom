parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ejcz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertClassList=l,exports.convertCssStyles=i,exports.create=ft,exports.jsonTable=ht,exports.render=vt,exports.Wrap=exports.Title=exports.Text=exports.Template=exports.TableRow=exports.TableHeader=exports.TableFooter=exports.TableColumnGroup=exports.TableColumn=exports.TableBody=exports.Table=exports.Svg=exports.Superscript=exports.Subscript=exports.Style=exports.Strong=exports.Span=exports.Smaller=exports.Script=exports.Row=exports.Paragraph=exports.ObjectDom=exports.Meta=exports.Marked=exports.Link=exports.Label=exports.Italic=exports.Inserted=exports.InputGroup=exports.Input=exports.InlineBlock=exports.Inline=exports.Html=exports.Heading6=exports.Heading5=exports.Heading4=exports.Heading3=exports.Heading2=exports.Heading1=exports.HeaderCell=exports.Head=exports.Grid=exports.GlobalDom=exports.Form=exports.Flex=exports.Emphasized=exports.Div=exports.Deleted=exports.Custom=exports.Column=exports.Cell=exports.Caption=exports.Button=exports.Break=exports.Bold=exports.Body=exports.Block=void 0;var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};function e(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],l=0,u=i.length;l<u;l++,o++)r[o]=i[l];return r}var o=function(){function t(t,e,n){this._root=t,this._key=e,this._value=null!=n?n:null,this.update()}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){this._value=t,this.update()},enumerable:!1,configurable:!0}),t.prototype.update=function(){if(null!==this.value)return"string"==typeof this.value?(this.node.setAttribute(this._key,this.value),void this._root.update()):"boolean"==typeof this.value&&this.value?(this.node.setAttribute(this._key,this._key),void this._root.update()):"number"==typeof this.value&&this.value?(this.node.setAttribute(this._key,this._key),void this._root.update()):void 0;this.clear()},t.prototype.clear=function(){this.node.removeAttribute(this._key),this._root.update()},Object.defineProperty(t.prototype,"node",{get:function(){return this._root.build()},enumerable:!1,configurable:!0}),t}();function i(t){if(t){if("string"==typeof t)return t;for(var e=[],n=0,r=Object.entries(t);n<r.length;n++){var o=r[n],i=o[0],l=o[1],u=i.split(/(?=[A-Z])/).join("-").toLowerCase();e.push(u+": "+l+";")}return e.join(" ")}}function l(t){if(t)return"string"==typeof t?t:t.join(" ")}var u=function(){return function(){var t=this;this.build=function(){return t.render().build()},this.render=function(){return t},this.update=function(){},this.toHtml=function(e){return t.build().outerHTML}}}();exports.ObjectDom=u;var a=function(t){function n(e){var n=t.call(this)||this;return n.props=e,n.render=function(){return n},n.build=function(){return n.node},n.id=new o(n,"id",null==e?void 0:e.id),n.className=new o(n,"class",l(null==e?void 0:e.className)),n.contentEditable=new o(n,"contenteditable",null==e?void 0:e.contenteditable),n.accesskey=new o(n,"accesskey",null==e?void 0:e.accesskey),n.autocapitalize=new o(n,"autocapitalize",null==e?void 0:e.autocapitalize),n.dir=new o(n,"dir",null==e?void 0:e.dir),n.draggable=new o(n,"draggable",null==e?void 0:e.draggable),n.enterkeyhint=new o(n,"enterkeyhint",null==e?void 0:e.enterkeyhint),n.hidden=new o(n,"hidden",null==e?void 0:e.hidden),n.inputmode=new o(n,"inputmode",null==e?void 0:e.inputmode),n.is=new o(n,"is",null==e?void 0:e.is),n.lang=new o(n,"lang",null==e?void 0:e.lang),n.nonce=new o(n,"nonce",null==e?void 0:e.nonce),n.part=new o(n,"part",null==e?void 0:e.part),n.slot=new o(n,"slot",null==e?void 0:e.slot),n.spellcheck=new o(n,"spellcheck",null==e?void 0:e.spellcheck),n.style=new o(n,"style",i(null==e?void 0:e.style)),n.tabindex=new o(n,"tabindex",null==e?void 0:e.tabindex),n.title=new o(n,"title",null==e?void 0:e.title),n.translate=new o(n,"translate",null==e?void 0:e.translate),n}return e(n,t),Object.defineProperty(n.prototype,"node",{get:function(){var t,e=this.render(),n=e.rootNode;(null===(t=e.props)||void 0===t?void 0:t.text)?n.innerText=e.props.text:n.innerText="";for(var r=function(t){if(t instanceof u){var e=t.render().build();t.update=function(){e&&e.remove(),e=t.render().build(),n.appendChild(e)},n.appendChild(e)}else n.append(t)},o=0,i=e.children;o<i.length;o++){r(i[o])}return n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"children",{get:function(){var t;return null!==(t=this.props.children)&&void 0!==t?t:[]},set:function(t){this.props.children=t,this.update()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"rootNode",{get:function(){var t;return null!==(t=this.props.node)&&void 0!==t?t:this.render().rootNode},set:function(t){this.props.node=t,this.update()},enumerable:!1,configurable:!0}),n.prototype.addChild=function(t,e){var n=this.children;e?n.splice(e,0,t):n.push(t),this.children=n},n.prototype.removeChild=function(t){var e=this.children;e.splice(t,1),this.children=e},n}(u);exports.GlobalDom=a;var s=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("div")},e))||this}return e(r,t),r}(a);exports.Div=s;var c=function(t){function n(e,n){void 0===n&&(n={});var r=t.call(this,n)||this;return r.node.style.display=e,r}return e(n,t),n}(s),d=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"grid",e)||this}return e(n,t),n}(c);exports.Grid=d;var p=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"block",e)||this}return e(n,t),n}(c);exports.Block=p;var h=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"inline",e)||this}return e(n,t),n}(c);exports.Inline=h;var v=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"inline-block",e)||this}return e(n,t),n}(c);exports.InlineBlock=v;var f=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"flex",e)||this}return e(n,t),n}(c);exports.Flex=f;var x=function(t){function n(e){void 0===e&&(e={});var n=t.call(this,e)||this;return(null==e?void 0:e.direction)&&(n.node.style.flexDirection=e.direction),n}return e(n,t),n}(f);exports.Row=x;var m=function(t){function n(e){void 0===e&&(e={});var n=t.call(this,e)||this;return(null==e?void 0:e.direction)&&(n.node.style.flexDirection=e.direction),n}return e(n,t),n}(f);exports.Column=m;var b=function(t){function n(e){void 0===e&&(e={});var n=t.call(this,e)||this;return(null==e?void 0:e.direction)&&(n.node.style.flexWrap=e.direction),n}return e(n,t),n}(f);exports.Wrap=b;var y=function(t){function r(e,r){var o=t.call(this,n({node:document.createElement(e)},r))||this;return o.text=r.text,o}return e(r,t),Object.defineProperty(r.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t,t&&(this.node.innerText=t)},enumerable:!1,configurable:!0}),r}(a);exports.Text=y;var g=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"span",e)||this}return e(n,t),n}(y);exports.Span=g;var w=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"p",e)||this}return e(n,t),n}(y);exports.Paragraph=w;var C=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"b",e)||this}return e(n,t),n}(y);exports.Bold=C;var k=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"strong",e)||this}return e(n,t),n}(y);exports.Strong=k;var E=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"i",e)||this}return e(n,t),n}(y);exports.Italic=E;var _=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"em",e)||this}return e(n,t),n}(y);exports.Emphasized=_;var T=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"mark",e)||this}return e(n,t),n}(y);exports.Marked=T;var j=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"small",e)||this}return e(n,t),n}(y);exports.Smaller=j;var H=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"del",e)||this}return e(n,t),n}(y);exports.Deleted=H;var O=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"ins",e)||this}return e(n,t),n}(y);exports.Inserted=O;var S=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"sub",e)||this}return e(n,t),n}(y);exports.Subscript=S;var P=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"sup",e)||this}return e(n,t),n}(y);exports.Superscript=P;var B=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"h1",e)||this}return e(n,t),n}(y);exports.Heading1=B;var I=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"h2",e)||this}return e(n,t),n}(y);exports.Heading2=I;var D=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"h3",e)||this}return e(n,t),n}(y);exports.Heading3=D;var L=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"h4",e)||this}return e(n,t),n}(y);exports.Heading4=L;var G=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"h5",e)||this}return e(n,t),n}(y);exports.Heading5=G;var A=function(t){function n(e){return void 0===e&&(e={}),t.call(this,"h6",e)||this}return e(n,t),n}(y);exports.Heading6=A;var R=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("br")},e))||this}return e(r,t),r}(a);exports.Break=R;var F=function(t){function r(e){void 0===e&&(e={});var r=t.call(this,n({node:document.createElement("button")},e))||this;return r.onClick=function(){},(null==e?void 0:e.onClick)&&(r.onClick=e.onClick),r.node.addEventListener("click",function(){return r.onClick()}),r.text=e.text,r}return e(r,t),Object.defineProperty(r.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t,t&&(this.node.innerText=t)},enumerable:!1,configurable:!0}),r}(a);exports.Button=F;var M=function(t){function r(e){void 0===e&&(e={});var r=t.call(this,n({node:document.createElement("form")},e))||this;return r.onChange=function(){},r.node.addEventListener("change",function(){return r.onChange()}),r.target=new o(r,"target",null==e?void 0:e.target),r.acceptCharset=new o(r,"accept-charset",null==e?void 0:e.acceptCharset),r.method=new o(r,"method",null==e?void 0:e.method),r.action=new o(r,"action",null==e?void 0:e.action),r.autocomplete=new o(r,"autocomplete",null==e?void 0:e.autocomplete),r.novalidate=new o(r,"novalidate",null==e?void 0:e.novalidate),r}return e(r,t),r}(a);exports.Form=M;var z=function(t){function r(e){void 0===e&&(e={});var r=t.call(this,n({node:document.createElement("label")},e))||this;return r.value=e.value,r.input=new o(r,"for",null==e?void 0:e.input),r}return e(r,t),Object.defineProperty(r.prototype,"value",{get:function(){return this.node.innerText},set:function(t){this.node.innerText=null!=t?t:""},enumerable:!1,configurable:!0}),r}(a);exports.Label=z;var N=function(t){function r(e){void 0===e&&(e={});var r=t.call(this,n({node:document.createElement("input")},e))||this;return r.onChange=function(t){},r.node.addEventListener("change",function(t){return r.onChange(t)}),(null==e?void 0:e.type)&&(r.node.type=e.type),(null==e?void 0:e.name)&&(r.node.name=e.name),(null==e?void 0:e.required)&&(r.node.required=e.required),r}return e(r,t),Object.defineProperty(r.prototype,"value",{get:function(){var t;return null!==(t=this.node.value)&&void 0!==t?t:""},set:function(t){this.node.value=null!=t?t:""},enumerable:!1,configurable:!0}),r}(a);exports.Input=N;var q=function(t){function r(e,r,o){void 0===o&&(o={});for(var i=t.call(this,{style:null==o?void 0:o.style})||this,l=0,u=[new z(n({input:e},null==o?void 0:o.label)),new N(n({id:e,type:r},null==o?void 0:o.input))];l<u.length;l++){var a=u[l];i.addChild(a)}return i}return e(r,t),r}(s);exports.InputGroup=q;var W=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("table")},e))||this}return e(r,t),r}(a);exports.Table=W;var Z=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("tr")},e))||this}return e(r,t),r}(a);exports.TableRow=Z;var J=function(t){function r(e,r){return void 0===r&&(r={}),t.call(this,n({node:e},r))||this}return e(r,t),r}(a),K=function(t){function n(e){return void 0===e&&(e={}),t.call(this,document.createElement("thead"),e)||this}return e(n,t),n}(J);exports.TableHeader=K;var Q=function(t){function n(e){return void 0===e&&(e={}),t.call(this,document.createElement("tfoot"),e)||this}return e(n,t),n}(J);exports.TableFooter=Q;var U=function(t){function n(e){return void 0===e&&(e={}),t.call(this,document.createElement("tbody"),e)||this}return e(n,t),n}(J);exports.TableBody=U;var V=function(t){function r(e){void 0===e&&(e={});var r=t.call(this,n({node:document.createElement("th")},e))||this;return(null==e?void 0:e.colspan)&&(r.node.colSpan=e.colspan),(null==e?void 0:e.rowspan)&&(r.node.rowSpan=e.rowspan),(null==e?void 0:e.text)&&(r.node.innerText=e.text),r}return e(r,t),r}(a);exports.HeaderCell=V;var X=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("td")},e))||this}return e(r,t),r}(a);exports.Cell=X;var Y=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("caption")},e))||this}return e(r,t),r}(a);exports.Caption=Y;var $=function(t){function r(e,r){return void 0===r&&(r={}),t.call(this,n({node:e},r))||this}return e(r,t),r}(a),tt=function(t){function n(e){return void 0===e&&(e={}),t.call(this,document.createElement("col"),e)||this}return e(n,t),n}($);exports.TableColumn=tt;var et=function(t){function n(e){return void 0===e&&(e={}),t.call(this,document.createElement("colgroup"),e)||this}return e(n,t),n}($);exports.TableColumnGroup=et;var nt=function(t){function r(e){void 0===e&&(e={});var r=t.call(this,n({node:document.createElement("html")},e))||this;return r.lang=new o(r,"lang",e.lang),r.xmlns=new o(r,"xmlns",e.xmlns),r}return e(r,t),r}(a);exports.Html=nt;var rt=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("head")},e))||this}return e(r,t),r}(a);exports.Head=rt;var ot=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("body")},e))||this}return e(r,t),r}(a);exports.Body=ot;var it=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("script")},e))||this}return e(r,t),r}(a);exports.Script=it;var lt=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("style")},e))||this}return e(r,t),r}(a);exports.Style=lt;var ut=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("link")},e))||this}return e(r,t),r}(a);exports.Link=ut;var at=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("meta")},e))||this}return e(r,t),r}(a);exports.Meta=at;var st=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("title")},e))||this}return e(r,t),r}(a);exports.Title=st;var ct=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("template")},e))||this}return e(r,t),r}(a);exports.Template=ct;var dt=function(t){function r(e){return void 0===e&&(e={}),t.call(this,n({node:document.createElement("svg")},e))||this}return e(r,t),r}(a);exports.Svg=dt;var pt=function(t){function r(e,r){return void 0===r&&(r={}),t.call(this,n({node:document.createElement(e)},r))||this}return e(r,t),r}(a);function ht(t,e){var n,r,o,i;void 0===e&&(e={});for(var l=new W(null!==(n=null==e?void 0:e.table)&&void 0!==n?n:{}),u=0,a=new Z(null!==(o=null!==(r=null==e?void 0:e.headerRow)&&void 0!==r?r:null==e?void 0:e.tableRow)&&void 0!==o?o:{}),s=0,c=t;s<c.length;s++){for(var d=c[s],p=new Z(null!==(i=null==e?void 0:e.tableRow)&&void 0!==i?i:{}),h=0,v=Object.entries(d);h<v.length;h++){var f=v[h],x=f[0],m=f[1];if(0===u){var b=new V({text:x});a.addChild(b)}var y=new X({text:m});p.addChild(y)}0===u&&((null==e?void 0:e.header)?(e.header.addChild(a),l.addChild(e.header)):l.addChild(a),u++),(null==e?void 0:e.body)?e.body.addChild(p):l.addChild(p)}return(null==e?void 0:e.body)&&l.addChild(e.body),l}function vt(t,e){void 0===e&&(e=document.body);var n=t.render().build();t.update=function(){n&&n.remove(),n=t.render().build(),e.appendChild(n)},e.appendChild(n)}function ft(t){return new nt({children:[new rt({children:r([new st({text:t.title})],t.meta?t.meta:[],t.styles?t.styles:[],t.link?t.link:[])}),new ot({children:r(t.children?t.children:[],t.scripts?t.scripts:[])})]})}exports.Custom=pt;
},{}],"EVxB":[function(require,module,exports) {
"use strict";var t=require("object-dom"),n=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),e=function(e){function o(){var n=e.call(this)||this;return n.render=function(){return new t.Div({children:[new t.Heading1({text:"Counter Example"}),new r]})},n}return n(o,e),o}(t.ObjectDom),r=function(e){function r(){var n=null!==e&&e.apply(this,arguments)||this;return n.value=0,n.render=function(){return new t.Div({style:{padding:"5px"},children:[""+n.value,new t.Row({children:[new t.Button({text:"-",style:{width:"50px"},onClick:function(){n.value-=1,n.update()}}),new t.Button({text:"+",style:{width:"50px",marginLeft:"5px"},onClick:function(){n.value+=1,n.update()}})]})]})},n}return n(r,e),r}(t.ObjectDom);(0,t.render)(new e,document.body.querySelector("#root"));
},{"object-dom":"ejcz"}]},{},["EVxB"], null)
//# sourceMappingURL=/app.7d023a10.js.map