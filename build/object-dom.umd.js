var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,s)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,__spreadValues=(e,t)=>{for(var s in t||(t={}))__hasOwnProp.call(t,s)&&__defNormalProp(e,s,t[s]);if(__getOwnPropSymbols)for(var s of __getOwnPropSymbols(t))__propIsEnum.call(t,s)&&__defNormalProp(e,s,t[s]);return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["object-dom"]={})}(this,(function(e){"use strict";class t{constructor(){this.update=()=>{}}}class s extends t{constructor(e){if(super(),this.props=e,this.attributes={},this.styles={},this._children=[],this.render=()=>this,this.toString=()=>{const e=[];if(e.push(`new ${this.constructor.name}({`),this.text&&e.push(`text: "${this.text}"`),this.styles){const t=Object.entries(this.styles).filter((e=>e[1].value)).map((([e,t])=>`"${e}": "${t.value}"`));if(t.length>0){e.push("styles: {");for(const s of t)e.push(`${s},`);e.push("},")}}if(this.attributes){const t=Object.entries(this.attributes).filter((e=>e[1].value)).filter((e=>e[1].value)).map((([e,t])=>`"${e}": "${t.value}"`));if(t.length>0){e.push("attributes: {");for(const s of t)e.push(`${s},`);e.push("},")}}if(this.children&&this.children.length>0){e.push("children: {");for(const t of this.children){const s=t.toString();e.push(`${s},`)}e.push("},")}return e.push("})"),e.join("")},this.props.text&&(this.text=this.props.text),this._children=[],e.children&&(this._children=[...e.children]),this.attributes={id:new n(this,"id",null==e?void 0:e.id),className:new n(this,"class",o(null==e?void 0:e.className)),contentEditable:new n(this,"contenteditable",null==e?void 0:e.contenteditable),accesskey:new n(this,"accesskey",null==e?void 0:e.accesskey),autocapitalize:new n(this,"autocapitalize",null==e?void 0:e.autocapitalize),dir:new n(this,"dir",null==e?void 0:e.dir),draggable:new n(this,"draggable",null==e?void 0:e.draggable),enterkeyhint:new n(this,"enterkeyhint",null==e?void 0:e.enterkeyhint),hidden:new n(this,"hidden",null==e?void 0:e.hidden),inputmode:new n(this,"inputmode",null==e?void 0:e.inputmode),is:new n(this,"is",null==e?void 0:e.is),lang:new n(this,"lang",null==e?void 0:e.lang),nonce:new n(this,"nonce",null==e?void 0:e.nonce),part:new n(this,"part",null==e?void 0:e.part),slot:new n(this,"slot",null==e?void 0:e.slot),spellcheck:new n(this,"spellcheck",null==e?void 0:e.spellcheck),style:new n(this,"style",a(null==e?void 0:e.style)),tabindex:new n(this,"tabindex",null==e?void 0:e.tabindex),title:new n(this,"title",null==e?void 0:e.title),translate:new n(this,"translate",null==e?void 0:e.translate)},this.props.attributes)for(const[t,s]of Object.entries(this.props.attributes))this.addAttr(t,s);if(this.props.styles)for(const[t,s]of Object.entries(this.props.styles))this.addStyle(t,s)}addAttr(e,t){t&&("string"==typeof t||"boolean"==typeof t||"number"==typeof t?this.attributes[e]=new n(this,e,t):t&&(this.attributes[e]=t))}setAttr(e,t){this.attributes[e]||this.addAttr(e,t),this.attributes[e].value=t}addStyle(e,t){t&&("string"==typeof t?this.styles[e]=new c(this,e,t):t&&(this.styles[e]=t))}setStyle(e,t){this.styles[e]||this.addAttr(e,t),this.styles[e].value=t}get node(){var e;const s=this.rootNode;s.innerHTML="";for(const n of this.children)if(n instanceof t){let e=n.render().node;n.update=()=>{e&&e.remove(),e=n.render().node,s.appendChild(e)},s.appendChild(e)}else s.append(n);return this.text&&(null==(e=this.text)?void 0:e.length)>0&&(s.innerHTML=this.text),s}get children(){return this._children}set children(e){this._children=e,this.update()}get rootNode(){var e;return null!=(e=this.props.node)?e:document.createElement("div")}set rootNode(e){this.props.node=e,this.update()}addChild(e,t){const s=this.children;t?s.splice(t,0,e):s.push(e),this.children=s}removeChild(e){const t=this.children;t.splice(e,1),this.children=t}get text(){return this._text}set text(e){this._text=e,e&&(this.node.innerText=e)}addEventListener(e,t,s){this.rootNode.addEventListener(e,t,s)}removeEventListener(e,t,s){this.rootNode.removeEventListener(e,t,s)}}class n{constructor(e,t,s){this._root=e,this._key=t,this._value=null!=s?s:null,this.update()}get value(){return this._value}set value(e){this._value=e,this.update()}update(){if(null!==this.value)return"string"==typeof this.value?(this.node.setAttribute(this._key,this.value),void this._root.update()):"boolean"==typeof this.value&&this.value||"number"==typeof this.value&&this.value?(this.node.setAttribute(this._key,this._key),void this._root.update()):void 0;this.clear()}clear(){this.node.removeAttribute(this._key),this._root.update()}get node(){return this._root.render().node}}class r extends s{constructor(e,t={}){super(__spreadValues({node:document.createElement(e)},t))}}function a(e){if(e){if("string"==typeof e)return e;const t=[];for(const[s,n]of Object.entries(e)){const e=s.split(/(?=[A-Z])/).join("-").toLowerCase();t.push(`${e}: ${n};`)}return t.join(" ")}}function o(e){if(e)return"string"==typeof e?e:e.join(" ")}class c{constructor(e,t,s){this._root=e,this._key=t,this._value=null!=s?s:null,this.update()}get value(){return this._value}set value(e){this._value=e,this.update()}update(){if(null!==this.value)return"string"==typeof this.value?(this.node.style.setProperty(this._key,this.value),void this._root.update()):void 0;this.clear()}clear(){this.node.style.setProperty(this._key,null),this._root.update()}get node(){return this._root.render().node}}class d extends s{constructor(e={}){super(__spreadValues({node:document.createElement("a")},e))}}class l extends s{constructor(e={}){super(__spreadValues({node:document.createElement("abbr")},e))}}class u extends s{constructor(e={}){super(__spreadValues({node:document.createElement("address")},e))}}class i extends s{constructor(e={}){super(__spreadValues({node:document.createElement("area")},e))}}class p extends s{constructor(e={}){super(__spreadValues({node:document.createElement("article")},e))}}class m extends s{constructor(e={}){super(__spreadValues({node:document.createElement("aside")},e))}}class h extends s{constructor(e={}){super(__spreadValues({node:document.createElement("audio")},e))}}class _ extends s{constructor(e={}){super(__spreadValues({node:document.createElement("b")},e))}}class b extends s{constructor(e={}){super(__spreadValues({node:document.createElement("base")},e)),this.addAttr("href",e.href)}}class w extends s{constructor(e={}){super(__spreadValues({node:document.createElement("bdi")},e))}}class x extends s{constructor(e={}){super(__spreadValues({node:document.createElement("bdo")},e))}}class v extends s{constructor(e={}){super(__spreadValues({node:document.createElement("blockquote")},e))}}class k extends s{constructor(e={}){super(__spreadValues({node:document.createElement("body")},e))}}class E extends s{constructor(e={}){super(__spreadValues({node:document.createElement("br")},e))}}class f extends s{constructor(e={}){super(__spreadValues({node:document.createElement("button")},e)),this.onClick=()=>{},this.text=e.text,(null==e?void 0:e.onClick)&&(this.onClick=e.onClick),this.addEventListener("click",(()=>this.onClick()))}}class V extends s{constructor(e={}){super(__spreadValues({node:document.createElement("canvas")},e))}}class g extends s{constructor(e={}){super(__spreadValues({node:document.createElement("caption")},e))}}class y extends s{constructor(e={}){super(__spreadValues({node:document.createElement("cite")},e))}}class A extends s{constructor(e={}){super(__spreadValues({node:document.createElement("code")},e))}}class C extends s{constructor(e={}){super(__spreadValues({node:document.createElement("col")},e))}}class S extends s{constructor(e={}){super(__spreadValues({node:document.createElement("colgroup")},e))}}class O extends s{constructor(e={}){super(__spreadValues({node:document.createElement("data")},e))}}class T extends s{constructor(e={}){super(__spreadValues({node:document.createElement("datalist")},e))}}class P extends s{constructor(e={}){super(__spreadValues({node:document.createElement("dd")},e))}}class j extends s{constructor(e={}){super(__spreadValues({node:document.createElement("del")},e))}}class L extends s{constructor(e={}){super(__spreadValues({node:document.createElement("details")},e))}}class H extends s{constructor(e={}){super(__spreadValues({node:document.createElement("dfn")},e))}}class N extends s{constructor(e={}){super(__spreadValues({node:document.createElement("dialog")},e))}}class D extends s{constructor(e={}){super(__spreadValues({node:document.createElement("div")},e))}}class M extends D{constructor(e,t={}){super(t),this.addStyle("display",e)}}class $ extends M{constructor(e={}){super("flex",e)}}class B extends s{constructor(e={}){super(__spreadValues({node:document.createElement("dl")},e))}}class F extends s{constructor(e={}){super(__spreadValues({node:document.createElement("dt")},e))}}class I extends s{constructor(e={}){super(__spreadValues({node:document.createElement("em")},e))}}class q extends s{constructor(e={}){super(__spreadValues({node:document.createElement("embed")},e))}}class R extends s{constructor(e={}){super(__spreadValues({node:document.createElement("fieldset")},e))}}class G extends s{constructor(e={}){super(__spreadValues({node:document.createElement("figcaption")},e))}}class z extends s{constructor(e={}){super(__spreadValues({node:document.createElement("figure")},e))}}class Q extends s{constructor(e={}){super(__spreadValues({node:document.createElement("footer")},e))}}class U extends s{constructor(e={}){super(__spreadValues({node:document.createElement("form")},e)),this.onChange=()=>{},this.addEventListener("change",(()=>this.onChange())),this.addAttr("target",null==e?void 0:e.target),this.addAttr("accept-charset",null==e?void 0:e.acceptCharset),this.addAttr("method",null==e?void 0:e.method),this.addAttr("action",null==e?void 0:e.action),this.addAttr("autocomplete",null==e?void 0:e.autocomplete),this.addAttr("novalidate",null==e?void 0:e.novalidate)}}class W extends s{constructor(e,t={}){super(__spreadValues({node:document.createElement(`h${e}`)},t))}}class K extends W{constructor(e={}){super(1,e)}}class Z extends W{constructor(e={}){super(2,e)}}class J extends W{constructor(e={}){super(3,e)}}class X extends W{constructor(e={}){super(4,e)}}class Y extends W{constructor(e={}){super(5,e)}}class ee extends W{constructor(e={}){super(6,e)}}class te extends s{constructor(e={}){super(__spreadValues({node:document.createElement("head")},e))}}class se extends s{constructor(e={}){super(__spreadValues({node:document.createElement("header")},e))}}class ne extends s{constructor(e={}){super(__spreadValues({node:document.createElement("hr")},e))}}class re extends s{constructor(e={}){super(__spreadValues({node:document.createElement("html")},e)),this.addAttr("lang",null==e?void 0:e.lang),this.addAttr("xmlns",null==e?void 0:e.xmlns)}}class ae extends s{constructor(e={}){super(__spreadValues({node:document.createElement("i")},e))}}class oe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("iframe")},e))}}class ce extends s{constructor(e={}){super(__spreadValues({node:document.createElement("img")},e))}}class de extends s{constructor(e={}){super(__spreadValues({node:document.createElement("input")},e)),this.onChange=e=>{console.log("input value",e)},this.addEventListener("change",(e=>this.onChange(e))),this.addAttr("type",null==e?void 0:e.type),this.addAttr("name",null==e?void 0:e.name),this.addAttr("required",null==e?void 0:e.required)}get value(){var e;return null!=(e=this.node.value)?e:""}set value(e){this.node.value=null!=e?e:""}}class le extends s{constructor(e={}){super(__spreadValues({node:document.createElement("ins")},e))}}class ue extends s{constructor(e={}){super(__spreadValues({node:document.createElement("kbd")},e))}}class ie extends s{constructor(e={}){super(__spreadValues({node:document.createElement("label")},e)),this.value=e.value,this.addAttr("for",null==e?void 0:e.htmlFor)}get value(){return this.node.innerText}set value(e){this.node.innerText=null!=e?e:""}}class pe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("legend")},e))}}class me extends s{constructor(e={}){super(__spreadValues({node:document.createElement("li")},e))}}class he extends s{constructor(e={}){super(__spreadValues({node:document.createElement("link")},e)),this.addAttr("as",null==e?void 0:e.as),this.addAttr("crossorigin",null==e?void 0:e.crossorigin),this.addAttr("disabled",null==e?void 0:e.disabled),this.addAttr("href",null==e?void 0:e.href)}}class _e extends s{constructor(e={}){super(__spreadValues({node:document.createElement("main")},e))}}class be extends s{constructor(e={}){super(__spreadValues({node:document.createElement("map")},e))}}class we extends s{constructor(e={}){super(__spreadValues({node:document.createElement("mark")},e))}}class xe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("meta")},e)),this.addAttr("charset",null==e?void 0:e.charset),this.addAttr("content",null==e?void 0:e.content),this.addAttr("http-equiv",null==e?void 0:e.httpEquiv),this.addAttr("name",null==e?void 0:e.name)}}class ve extends s{constructor(e={}){super(__spreadValues({node:document.createElement("meter")},e))}}class ke extends s{constructor(e={}){super(__spreadValues({node:document.createElement("nav")},e))}}class Ee extends s{constructor(e={}){super(__spreadValues({node:document.createElement("noscript")},e))}}class fe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("object")},e))}}class Ve extends s{constructor(e={}){super(__spreadValues({node:document.createElement("ol")},e))}}class ge extends s{constructor(e={}){super(__spreadValues({node:document.createElement("optgroup")},e))}}class ye extends s{constructor(e={}){super(__spreadValues({node:document.createElement("option")},e))}}class Ae extends s{constructor(e={}){super(__spreadValues({node:document.createElement("output")},e))}}class Ce extends s{constructor(e={}){super(__spreadValues({node:document.createElement("p")},e))}}class Se extends s{constructor(e={}){super(__spreadValues({node:document.createElement("param")},e))}}class Oe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("picture")},e))}}class Te extends s{constructor(e={}){super(__spreadValues({node:document.createElement("pre")},e))}}class Pe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("progress")},e))}}class je extends s{constructor(e={}){super(__spreadValues({node:document.createElement("q")},e))}}class Le extends s{constructor(e={}){super(__spreadValues({node:document.createElement("rp")},e))}}class He extends s{constructor(e={}){super(__spreadValues({node:document.createElement("rt")},e))}}class Ne extends s{constructor(e={}){super(__spreadValues({node:document.createElement("ruby")},e))}}class De extends s{constructor(e={}){super(__spreadValues({node:document.createElement("s")},e))}}class Me extends s{constructor(e={}){super(__spreadValues({node:document.createElement("samp")},e))}}class $e extends s{constructor(e={}){super(__spreadValues({node:document.createElement("script")},e))}}class Be extends s{constructor(e={}){super(__spreadValues({node:document.createElement("section")},e))}}class Fe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("select")},e))}}class Ie extends s{constructor(e={}){super(__spreadValues({node:document.createElement("small")},e))}}class qe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("source")},e))}}class Re extends s{constructor(e={}){super(__spreadValues({node:document.createElement("span")},e))}}class Ge extends s{constructor(e={}){super(__spreadValues({node:document.createElement("strong")},e))}}class ze extends s{constructor(e={}){super(__spreadValues({node:document.createElement("style")},e))}}class Qe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("sub")},e))}}class Ue extends s{constructor(e={}){super(__spreadValues({node:document.createElement("summary")},e))}}class We extends s{constructor(e={}){super(__spreadValues({node:document.createElement("sup")},e))}}class Ke extends s{constructor(e={}){super(__spreadValues({node:document.createElement("svg")},e)),this.addAttr("viewbox",null==e?void 0:e.viewbox),this.addAttr("preserve-aspect-ratio",null==e?void 0:e.preserveAspectRatio),this.addAttr("width",null==e?void 0:e.width),this.addAttr("height",null==e?void 0:e.height),this.addAttr("x",null==e?void 0:e.x),this.addAttr("y",null==e?void 0:e.y)}}class Ze extends s{constructor(e={}){super(__spreadValues({node:document.createElement("table")},e))}}class Je extends s{constructor(e={}){super(__spreadValues({node:document.createElement("tbody")},e))}}class Xe extends s{constructor(e={}){super(__spreadValues({node:document.createElement("td")},e))}}class Ye extends s{constructor(e={}){super(__spreadValues({node:document.createElement("template")},e))}}class et extends s{constructor(e={}){super(__spreadValues({node:document.createElement("textarea")},e))}}class tt extends s{constructor(e={}){super(__spreadValues({node:document.createElement("tfoot")},e))}}class st extends s{constructor(e={}){super(__spreadValues({node:document.createElement("th")},e)),(null==e?void 0:e.colspan)&&(this.node.colSpan=e.colspan),(null==e?void 0:e.rowspan)&&(this.node.rowSpan=e.rowspan),(null==e?void 0:e.text)&&(this.node.innerText=e.text)}}class nt extends s{constructor(e={}){super(__spreadValues({node:document.createElement("thead")},e))}}class rt extends s{constructor(e={}){super(__spreadValues({node:document.createElement("time")},e))}}class at extends s{constructor(e={}){super(__spreadValues({node:document.createElement("title")},e))}}class ot extends s{constructor(e={}){super(__spreadValues({node:document.createElement("tr")},e))}}class ct extends s{constructor(e={}){super(__spreadValues({node:document.createElement("track")},e))}}class dt extends s{constructor(e={}){super(__spreadValues({node:document.createElement("u")},e))}}class lt extends s{constructor(e={}){super(__spreadValues({node:document.createElement("ul")},e))}}class ut extends s{constructor(e={}){super(__spreadValues({node:document.createElement("var")},e))}}class it extends s{constructor(e={}){super(__spreadValues({node:document.createElement("video")},e))}}class pt extends s{constructor(e={}){super(__spreadValues({node:document.createElement("wbr")},e))}}function mt(e){return new re({children:[new te({children:[new at({text:e.title}),...e.meta?e.meta:[],...e.styles?e.styles:[],...e.link?e.link:[]]}),new k({children:[...e.children?e.children:[],...e.scripts?e.scripts:[]]})]})}function ht(e){return e.node.outerHTML}const _t=new DOMParser;function bt(e){var t;let s;switch(e.tagName.toLowerCase()){case"a":s=new d({});break;case"abbr":s=new l({});break;case"address":s=new u({});break;case"area":s=new i({});break;case"article":s=new p({});break;case"aside":s=new m({});break;case"audio":s=new h({});break;case"b":s=new _({});break;case"base":s=new b({});break;case"bdi":s=new w({});break;case"bdo":s=new x({});break;case"blockquote":s=new v({});break;case"body":s=new k({});break;case"br":s=new E({});break;case"button":s=new f({});break;case"canvas":s=new V({});break;case"caption":s=new g({});break;case"cite":s=new y({});break;case"code":s=new A({});break;case"col":s=new C({});break;case"colgroup":s=new S({});break;case"data":s=new O({});break;case"datalist":s=new T({});break;case"dd":s=new P({});break;case"del":s=new j({});break;case"details":s=new L({});break;case"dfn":s=new H({});break;case"dialog":s=new N({});break;case"div":s=new D({});break;case"dl":s=new B({});break;case"dt":s=new F({});break;case"em":s=new I({});break;case"embed":s=new q({});break;case"fieldset":s=new R({});break;case"figcaption":s=new G({});break;case"figure":s=new z({});break;case"footer":s=new Q({});break;case"form":s=new U({});break;case"h1":s=new K({});break;case"h2":s=new Z({});break;case"h3":s=new J({});break;case"h4":s=new X({});break;case"h5":s=new Y({});break;case"h6":s=new ee({});break;case"head":s=new te({});break;case"header":s=new se({});break;case"hr":s=new ne({});break;case"html":s=new re({});break;case"i":s=new ae({});break;case"iframe":s=new oe({});break;case"img":s=new ce({});break;case"input":s=new de({});break;case"ins":s=new le({});break;case"kbd":s=new ue({});break;case"label":s=new ie({});break;case"legend":s=new pe({});break;case"li":s=new me({});break;case"link":s=new he({});break;case"main":s=new _e({});break;case"map":s=new be({});break;case"mark":s=new we({});break;case"meta":s=new xe({});break;case"meter":s=new ve({});break;case"nav":s=new ke({});break;case"noscript":s=new Ee({});break;case"object":s=new fe({});break;case"ol":s=new Ve({});break;case"optgroup":s=new ge({});break;case"option":s=new ye({});break;case"output":s=new Ae({});break;case"p":s=new Ce({});break;case"param":s=new Se({});break;case"picture":s=new Oe({});break;case"pre":s=new Te({});break;case"progress":s=new Pe({});break;case"q":s=new je({});break;case"rp":s=new Le({});break;case"rt":s=new He({});break;case"ruby":s=new Ne({});break;case"s":s=new De({});break;case"samp":s=new Me({});break;case"script":s=new $e({});break;case"section":s=new Be({});break;case"select":s=new Fe({});break;case"small":s=new Ie({});break;case"source":s=new qe({});break;case"span":s=new Re({});break;case"strong":s=new Ge({});break;case"style":s=new ze({});break;case"sub":s=new Qe({});break;case"summary":s=new Ue({});break;case"sup":s=new We({});break;case"svg":s=new Ke({});break;case"table":s=new Ze({});break;case"tbody":s=new Je({});break;case"td":s=new Xe({});break;case"template":s=new Ye({});break;case"textarea":s=new et({});break;case"tfoot":s=new tt({});break;case"th":s=new st({});break;case"thead":s=new nt({});break;case"time":s=new rt({});break;case"title":s=new at({});break;case"tr":s=new ot({});break;case"track":s=new ct({});break;case"u":s=new dt({});break;case"ul":s=new lt({});break;case"var":s=new ut({});break;case"video":s=new it({});break;case"wbr":s=new pt({});break;default:s=new r(e.tagName,{})}for(let n=0;n<e.attributes.length;n++){const t=e.attributes[n];s.setAttr(t.name,t.value)}if(0===e.children.length)s.text=null!=(t=e.innerHTML)?t:"";else if(e.children)for(let n=0;n<e.children.length;n++){const t=e.children[n];s.addChild(bt(t))}return s}e.Abbr=l,e.Address=u,e.Anchor=d,e.Area=i,e.Article=p,e.Aside=m,e.Audio=h,e.Base=b,e.Bdi=w,e.Bdo=x,e.Block=class extends M{constructor(e={}){super("block",e)}},e.BlockQuote=v,e.Body=k,e.Bold=_,e.Br=E,e.Button=f,e.Canvas=V,e.Caption=g,e.Cite=y,e.Code=A,e.Col=C,e.ColGroup=S,e.Column=class extends ${constructor(e={}){super(e),this.addStyle("flex-direction",null==e?void 0:e.direction)}},e.Custom=r,e.Data=O,e.DataList=T,e.Dd=P,e.Del=j,e.Details=L,e.Dfn=H,e.Dialog=N,e.Div=D,e.Dl=B,e.Dt=F,e.Em=I,e.Embed=q,e.FieldSet=R,e.FigCaption=G,e.Figure=z,e.Flex=$,e.Footer=Q,e.Form=U,e.GlobalDom=s,e.Grid=class extends M{constructor(e={}){super("grid",e)}},e.H1=K,e.H2=Z,e.H3=J,e.H4=X,e.H5=Y,e.H6=ee,e.Head=te,e.Header=se,e.Heading=W,e.Hr=ne,e.Html=re,e.I=ae,e.Iframe=oe,e.Img=ce,e.Inline=class extends M{constructor(e={}){super("inline",e)}},e.InlineBlock=class extends M{constructor(e={}){super("inline-block",e)}},e.Input=de,e.Ins=le,e.Kbd=ue,e.Label=ie,e.Legend=pe,e.Li=me,e.Link=he,e.Main=_e,e.Map=be,e.Mark=we,e.Meta=xe,e.Meter=ve,e.Nav=ke,e.NoScript=Ee,e.NodeAttr=n,e.NodeStyle=c,e.Obj=fe,e.ObjectDom=t,e.Ol=Ve,e.OptGroup=ge,e.Option=ye,e.Output=Ae,e.P=Ce,e.Param=Se,e.Picture=Oe,e.Pre=Te,e.Progress=Pe,e.Quote=je,e.Row=class extends ${constructor(e={}){super(e),this.addStyle("flex-direction",null==e?void 0:e.direction)}},e.Rp=Le,e.Rt=He,e.Ruby=Ne,e.S=De,e.Samp=Me,e.Script=$e,e.Section=Be,e.Select=Fe,e.Small=Ie,e.Source=qe,e.Span=Re,e.Strong=Ge,e.Style=ze,e.Sub=Qe,e.Summary=Ue,e.Sup=We,e.Svg=Ke,e.TBody=Je,e.TFoot=tt,e.THead=nt,e.Table=Ze,e.Td=Xe,e.Template=Ye,e.TextArea=et,e.Th=st,e.Time=rt,e.Title=at,e.Tr=ot,e.Track=ct,e.U=dt,e.Ul=lt,e.Var=ut,e.Video=it,e.Wbr=pt,e.Wrap=class extends ${constructor(e={}){super(e),this.addStyle("flex-wrap",null==e?void 0:e.direction)}},e.convertClassList=o,e.convertCssStyles=a,e.create=function(e){return mt(e)},e.createDocument=mt,e.generateHtml=ht,e.jsonTable=function(e,t={}){var s,n,r,a;const o=new Ze(null!=(s=null==t?void 0:t.table)?s:{});let c=0;const d=new ot(null!=(r=null!=(n=null==t?void 0:t.headerRow)?n:null==t?void 0:t.tableRow)?r:{});for(const l of e){const e=new ot(null!=(a=null==t?void 0:t.tableRow)?a:{});for(const[t,s]of Object.entries(l)){if(0===c){const e=new st({text:t});d.addChild(e)}const n=new Xe({text:s});e.addChild(n)}0===c&&((null==t?void 0:t.header)?(t.header.addChild(d),o.addChild(t.header)):o.addChild(d),c++),(null==t?void 0:t.body)?t.body.addChild(e):o.addChild(e)}return(null==t?void 0:t.body)&&o.addChild(t.body),o},e.parseHtml=function(e,t="text/html"){const s=_t.parseFromString(e,t);return s.firstChild?bt(s.firstChild):new re({})},e.parseTextContent=function(e){var t;return null!=(t=(new DOMParser).parseFromString(ht(e),"text/html").documentElement.textContent)?t:""},e.render=function(e,t=document.body){let s=e.render().node;e.update=()=>{s&&s.remove(),s=e.render().node,t.appendChild(s)},t.appendChild(s)},Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
