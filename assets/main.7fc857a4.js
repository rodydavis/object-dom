import {c as css, q as query, a as customElement, L as LitElement, h as html} from "./vendor.642b74ae.js";
var e = Object.defineProperty, t = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable, n = (t2, s2, r2) => s2 in t2 ? e(t2, s2, {enumerable: true, configurable: true, writable: true, value: r2}) : t2[s2] = r2, c = (e2, c2) => {
  for (var a2 in c2 || (c2 = {}))
    s.call(c2, a2) && n(e2, a2, c2[a2]);
  if (t)
    for (var a2 of t(c2))
      r.call(c2, a2) && n(e2, a2, c2[a2]);
  return e2;
};
class a {
  constructor() {
    this.update = () => {
    }, this.onCreate = (e2) => {
    };
  }
  renderDom() {
    return o(this.render());
  }
}
function o(e2) {
  return e2 instanceof u ? e2 : o(e2.render());
}
class u extends a {
  constructor(e2) {
    var t2;
    if (super(), this.props = e2, this.attributes = {}, this.styles = {}, this._children = [], this._events = {}, this._node = e2.node, e2.text && (this.text = e2.text), this.children = [...(t2 = e2 == null ? void 0 : e2.children) != null ? t2 : []], e2.attributes)
      for (const [s2, r2] of Object.entries(e2.attributes))
        this.addAttr(s2, r2);
    if (e2.events)
      for (const [s2, r2] of Object.entries(e2.events))
        this.addEventListener(s2, r2);
    if (e2.styles)
      for (const [s2, r2] of Object.entries(e2.styles))
        this.addStyle(s2, r2);
  }
  addAttr(e2, t2) {
    t2 && (typeof t2 == "string" || typeof t2 == "boolean" || typeof t2 == "number") && (this.attributes[e2] = new i(this, e2, t2));
  }
  setAttr(e2, t2) {
    this.attributes[e2] || this.addAttr(e2, t2), this.attributes[e2].value = t2;
  }
  addStyle(e2, t2) {
    t2 && (typeof t2 == "string" ? this.styles[e2] = new j(this, e2, t2) : t2 && (this.styles[e2] = t2));
  }
  setStyle(e2, t2) {
    this.styles[e2] || this.addStyle(e2, t2), this.styles[e2].value = t2;
  }
  render() {
    return this;
  }
  get node() {
    return d(this);
  }
  get children() {
    return this._children;
  }
  set children(e2) {
    this._children = e2, this.update();
  }
  addChild(e2, t2) {
    const s2 = this.children;
    t2 ? s2.splice(t2, 0, e2) : s2.push(e2), this.children = s2;
  }
  removeChild(e2) {
    const t2 = this.children;
    t2.splice(e2, 1), this.children = t2;
  }
  get text() {
    return this._text;
  }
  set text(e2) {
    this._text = e2, e2 && (this._node.innerText = e2);
  }
  addEventListener(e2, t2, s2) {
    t2 && (this._events[e2] || (this._events[e2] = []), this._events[e2].push({callback: t2, options: s2}));
  }
}
function d(e2) {
  const t2 = document.createElement(e2._node.tagName);
  e2.text && (t2.textContent = e2.text);
  for (const s2 of e2.children)
    if (s2 instanceof a) {
      let e3 = d(s2.renderDom());
      s2.update = () => {
        const r2 = d(s2.renderDom());
        t2 == null || t2.replaceChild(r2, e3), e3 = r2;
      }, t2.appendChild(e3);
    } else
      t2.append(s2);
  if (e2.styles)
    for (const [s2, r2] of Object.entries(e2.styles))
      t2.style.setProperty(l(s2), r2.value);
  if (e2.attributes)
    for (const [s2, r2] of Object.entries(e2.attributes).filter((e3) => e3[1].value)) {
      const e3 = r2.value, n2 = l(s2);
      e3 && (typeof e3 == "string" ? t2.setAttribute(n2, e3) : typeof e3 == "number" ? t2.setAttribute(n2, `${e3}`) : typeof e3 == "boolean" && e3 && t2.setAttribute(n2, n2));
    }
  for (const [s2, r2] of Object.entries(e2._events))
    for (const e3 of r2)
      t2.addEventListener(s2, e3.callback, e3.options);
  return e2.props.onCreate && e2.props.onCreate(t2), t2;
}
function l(e2) {
  return e2.split(/(?=[A-Z])/).join("-").toLowerCase();
}
class i {
  constructor(e2, t2, s2) {
    this._root = e2, this._key = l(t2), this._value = s2 != null ? s2 : null, this.update();
  }
  get value() {
    return this._value;
  }
  set value(e2) {
    this._value = e2, this.update();
  }
  update() {
    if (this.value !== null)
      return typeof this.value == "string" ? (this.node.setAttribute(this._key, this.value), void this._root.update()) : typeof this.value == "boolean" && this.value || typeof this.value == "number" && this.value ? (this.node.setAttribute(this._key, this._key), void this._root.update()) : void 0;
    this.clear();
  }
  clear() {
    this.node.removeAttribute(this._key), this._root.update();
  }
  get node() {
    return this._root.renderDom().node;
  }
}
class m extends u {
  constructor(e2, t2 = {}) {
    super(c({node: document.createElement(e2)}, t2));
  }
}
class h extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("div")}, e2));
  }
}
class j {
  constructor(e2, t2, s2) {
    this._root = e2, this._key = l(t2), this._value = s2 != null ? s2 : null, this.update();
  }
  get value() {
    return this._value;
  }
  set value(e2) {
    this._value = e2, this.update();
  }
  update() {
    if (this.value !== null)
      return typeof this.value == "string" ? (this.node.style.setProperty(this._key, this.value), void this._root.update()) : void 0;
    this.clear();
  }
  clear() {
    this.node.style.setProperty(this._key, null), this._root.update();
  }
  get node() {
    return this._root.renderDom().node;
  }
}
class D extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("a")}, e2));
  }
}
class O extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("abbr")}, e2));
  }
}
class S extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("address")}, e2));
  }
}
class A extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("area")}, e2));
  }
}
class T extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("article")}, e2));
  }
}
class M extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("aside")}, e2));
  }
}
class $ extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("audio")}, e2));
  }
}
class H extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("b")}, e2));
  }
}
class L extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("base")}, e2));
  }
}
class P extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("bdi")}, e2));
  }
}
class N extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("bdo")}, e2));
  }
}
class q extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("blockquote")}, e2));
  }
}
class B extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("body")}, e2));
  }
}
class F extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("br")}, e2));
  }
}
class I extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("button")}, e2));
  }
}
class R extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("canvas")}, e2));
  }
}
class U extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("caption")}, e2));
  }
}
class V extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("cite")}, e2));
  }
}
class W extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("code")}, e2));
  }
}
class K extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("col")}, e2));
  }
}
class Q extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("colgroup")}, e2));
  }
}
class Z extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("data")}, e2));
  }
}
class z extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("datalist")}, e2));
  }
}
class G extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("dd")}, e2));
  }
}
class J extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("del")}, e2));
  }
}
class X extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("details")}, e2));
  }
}
class Y extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("dfn")}, e2));
  }
}
class ee extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("dialog")}, e2));
  }
}
class te extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("dl")}, e2));
  }
}
class se extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("dt")}, e2));
  }
}
class re extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("em")}, e2));
  }
}
class ne extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("embed")}, e2));
  }
}
class ce extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("fieldset")}, e2));
  }
}
class ae extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("figcaption")}, e2));
  }
}
class oe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("figure")}, e2));
  }
}
class ue extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("footer")}, e2));
  }
}
class de extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("form")}, e2));
  }
}
class le extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("h1")}, e2));
  }
}
class ie extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("h2")}, e2));
  }
}
class pe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("h3")}, e2));
  }
}
class me extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("h4")}, e2));
  }
}
class be extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("h5")}, e2));
  }
}
class he extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("h6")}, e2));
  }
}
class xe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("head")}, e2));
  }
}
class ke extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("header")}, e2));
  }
}
class we extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("hr")}, e2));
  }
}
class fe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("html")}, e2));
  }
}
class Ee extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("i")}, e2));
  }
}
class ye extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("iframe")}, e2));
  }
}
class ve extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("img")}, e2));
  }
}
class ge extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("input")}, e2));
  }
}
class Ce extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("ins")}, e2));
  }
}
class _e extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("kbd")}, e2));
  }
}
class je extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("label")}, e2));
  }
}
class De extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("legend")}, e2));
  }
}
class Oe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("li")}, e2));
  }
}
class Se extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("link")}, e2));
  }
}
class Ae extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("main")}, e2));
  }
}
class Te extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("map")}, e2));
  }
}
class Me extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("mark")}, e2));
  }
}
class $e extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("meta")}, e2));
  }
}
class He extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("meter")}, e2));
  }
}
class Le extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("nav")}, e2));
  }
}
class Pe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("noscript")}, e2));
  }
}
class Ne extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("object")}, e2));
  }
}
class qe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("ol")}, e2));
  }
}
class Be extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("optgroup")}, e2));
  }
}
class Fe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("option")}, e2));
  }
}
class Ie extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("output")}, e2));
  }
}
class Re extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("p")}, e2));
  }
}
class Ue extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("param")}, e2));
  }
}
class Ve extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("picture")}, e2));
  }
}
class We extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("pre")}, e2));
  }
}
class Ke extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("progress")}, e2));
  }
}
class Qe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("q")}, e2));
  }
}
class Ze extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("rp")}, e2));
  }
}
class ze extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("rt")}, e2));
  }
}
class Ge extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("ruby")}, e2));
  }
}
class Je extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("s")}, e2));
  }
}
class Xe extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("samp")}, e2));
  }
}
class Ye extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("script")}, e2));
  }
}
class et extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("section")}, e2));
  }
}
class tt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("select")}, e2));
  }
}
class st extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("small")}, e2));
  }
}
class rt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("source")}, e2));
  }
}
class nt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("span")}, e2));
  }
}
class ct extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("strong")}, e2));
  }
}
class at extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("style")}, e2));
  }
}
class ot extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("sub")}, e2));
  }
}
class ut extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("summary")}, e2));
  }
}
class dt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("sup")}, e2));
  }
}
class lt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("svg")}, e2));
  }
}
class it extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("table")}, e2));
  }
}
class pt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("tbody")}, e2));
  }
}
class mt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("td")}, e2));
  }
}
class bt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("template")}, e2));
  }
}
class ht extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("textarea")}, e2));
  }
}
class xt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("tfoot")}, e2));
  }
}
class kt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("th")}, e2));
  }
}
class wt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("thead")}, e2));
  }
}
class ft extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("time")}, e2));
  }
}
class Et extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("title")}, e2));
  }
}
class yt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("tr")}, e2));
  }
}
class vt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("track")}, e2));
  }
}
class gt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("u")}, e2));
  }
}
class Ct extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("ul")}, e2));
  }
}
class _t extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("var")}, e2));
  }
}
class jt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("video")}, e2));
  }
}
class Dt extends u {
  constructor(e2 = {}) {
    super(c({node: document.createElement("wbr")}, e2));
  }
}
function At(e2) {
  var t2;
  let s2;
  switch (e2.tagName.toLowerCase()) {
    case "a":
      s2 = new D({});
      break;
    case "abbr":
      s2 = new O({});
      break;
    case "address":
      s2 = new S({});
      break;
    case "area":
      s2 = new A({});
      break;
    case "article":
      s2 = new T({});
      break;
    case "aside":
      s2 = new M({});
      break;
    case "audio":
      s2 = new $({});
      break;
    case "b":
      s2 = new H({});
      break;
    case "base":
      s2 = new L({});
      break;
    case "bdi":
      s2 = new P({});
      break;
    case "bdo":
      s2 = new N({});
      break;
    case "blockquote":
      s2 = new q({});
      break;
    case "body":
      s2 = new B({});
      break;
    case "br":
      s2 = new F({});
      break;
    case "button":
      s2 = new I({});
      break;
    case "canvas":
      s2 = new R({});
      break;
    case "caption":
      s2 = new U({});
      break;
    case "cite":
      s2 = new V({});
      break;
    case "code":
      s2 = new W({});
      break;
    case "col":
      s2 = new K({});
      break;
    case "colgroup":
      s2 = new Q({});
      break;
    case "data":
      s2 = new Z({});
      break;
    case "datalist":
      s2 = new z({});
      break;
    case "dd":
      s2 = new G({});
      break;
    case "del":
      s2 = new J({});
      break;
    case "details":
      s2 = new X({});
      break;
    case "dfn":
      s2 = new Y({});
      break;
    case "dialog":
      s2 = new ee({});
      break;
    case "div":
      s2 = new h({});
      break;
    case "dl":
      s2 = new te({});
      break;
    case "dt":
      s2 = new se({});
      break;
    case "em":
      s2 = new re({});
      break;
    case "embed":
      s2 = new ne({});
      break;
    case "fieldset":
      s2 = new ce({});
      break;
    case "figcaption":
      s2 = new ae({});
      break;
    case "figure":
      s2 = new oe({});
      break;
    case "footer":
      s2 = new ue({});
      break;
    case "form":
      s2 = new de({});
      break;
    case "h1":
      s2 = new le({});
      break;
    case "h2":
      s2 = new ie({});
      break;
    case "h3":
      s2 = new pe({});
      break;
    case "h4":
      s2 = new me({});
      break;
    case "h5":
      s2 = new be({});
      break;
    case "h6":
      s2 = new he({});
      break;
    case "head":
      s2 = new xe({});
      break;
    case "header":
      s2 = new ke({});
      break;
    case "hr":
      s2 = new we({});
      break;
    case "html":
      s2 = new fe({});
      break;
    case "i":
      s2 = new Ee({});
      break;
    case "iframe":
      s2 = new ye({});
      break;
    case "img":
      s2 = new ve({});
      break;
    case "input":
      s2 = new ge({});
      break;
    case "ins":
      s2 = new Ce({});
      break;
    case "kbd":
      s2 = new _e({});
      break;
    case "label":
      s2 = new je({});
      break;
    case "legend":
      s2 = new De({});
      break;
    case "li":
      s2 = new Oe({});
      break;
    case "link":
      s2 = new Se({});
      break;
    case "main":
      s2 = new Ae({});
      break;
    case "map":
      s2 = new Te({});
      break;
    case "mark":
      s2 = new Me({});
      break;
    case "meta":
      s2 = new $e({});
      break;
    case "meter":
      s2 = new He({});
      break;
    case "nav":
      s2 = new Le({});
      break;
    case "noscript":
      s2 = new Pe({});
      break;
    case "object":
      s2 = new Ne({});
      break;
    case "ol":
      s2 = new qe({});
      break;
    case "optgroup":
      s2 = new Be({});
      break;
    case "option":
      s2 = new Fe({});
      break;
    case "output":
      s2 = new Ie({});
      break;
    case "p":
      s2 = new Re({});
      break;
    case "param":
      s2 = new Ue({});
      break;
    case "picture":
      s2 = new Ve({});
      break;
    case "pre":
      s2 = new We({});
      break;
    case "progress":
      s2 = new Ke({});
      break;
    case "q":
      s2 = new Qe({});
      break;
    case "rp":
      s2 = new Ze({});
      break;
    case "rt":
      s2 = new ze({});
      break;
    case "ruby":
      s2 = new Ge({});
      break;
    case "s":
      s2 = new Je({});
      break;
    case "samp":
      s2 = new Xe({});
      break;
    case "script":
      s2 = new Ye({});
      break;
    case "section":
      s2 = new et({});
      break;
    case "select":
      s2 = new tt({});
      break;
    case "small":
      s2 = new st({});
      break;
    case "source":
      s2 = new rt({});
      break;
    case "span":
      s2 = new nt({});
      break;
    case "strong":
      s2 = new ct({});
      break;
    case "style":
      s2 = new at({});
      break;
    case "sub":
      s2 = new ot({});
      break;
    case "summary":
      s2 = new ut({});
      break;
    case "sup":
      s2 = new dt({});
      break;
    case "svg":
      s2 = new lt({});
      break;
    case "table":
      s2 = new it({});
      break;
    case "tbody":
      s2 = new pt({});
      break;
    case "td":
      s2 = new mt({});
      break;
    case "template":
      s2 = new bt({});
      break;
    case "textarea":
      s2 = new ht({});
      break;
    case "tfoot":
      s2 = new xt({});
      break;
    case "th":
      s2 = new kt({});
      break;
    case "thead":
      s2 = new wt({});
      break;
    case "time":
      s2 = new ft({});
      break;
    case "title":
      s2 = new Et({});
      break;
    case "tr":
      s2 = new yt({});
      break;
    case "track":
      s2 = new vt({});
      break;
    case "u":
      s2 = new gt({});
      break;
    case "ul":
      s2 = new Ct({});
      break;
    case "var":
      s2 = new _t({});
      break;
    case "video":
      s2 = new jt({});
      break;
    case "wbr":
      s2 = new Dt({});
      break;
    default:
      s2 = new m(e2.tagName, {});
  }
  for (let r2 = 0; r2 < e2.attributes.length; r2++) {
    const t3 = e2.attributes[r2];
    s2.setAttr(t3.name, t3.value);
  }
  if (e2.children.length === 0)
    s2.text = (t2 = e2.innerHTML) != null ? t2 : "";
  else if (e2.children)
    for (let r2 = 0; r2 < e2.children.length; r2++) {
      const t3 = e2.children[r2];
      s2.addChild(At(t3));
    }
  return s2;
}
function Tt(e2) {
  const t2 = new DOMParser().parseFromString(e2, "text/html");
  if (t2.firstChild) {
    const e3 = t2.querySelector("html");
    if (e3) {
      return Ht(Mt(e3, At(e3)));
    }
  }
  return Ht("new HTML({})");
}
function Mt(e2, t2) {
  var s2, r2;
  const n2 = e2.tagName.toLowerCase().split("<").join("").split(">").join("").trim(), c2 = function(e3) {
    switch (e3.split("<").join("").split(">").join("").trim()) {
      case "a":
        return "A";
      case "abbr":
        return "Abbr";
      case "address":
        return "Address";
      case "area":
        return "Area";
      case "article":
        return "Article";
      case "aside":
        return "Aside";
      case "audio":
        return "Audio";
      case "b":
        return "B";
      case "base":
        return "Base";
      case "bdi":
        return "Bdi";
      case "bdo":
        return "Bdo";
      case "blockquote":
        return "Blockquote";
      case "body":
        return "Body";
      case "br":
        return "Br";
      case "button":
        return "Button";
      case "canvas":
        return "Canvas";
      case "caption":
        return "Caption";
      case "cite":
        return "Cite";
      case "code":
        return "Code";
      case "col":
        return "Col";
      case "colgroup":
        return "Colgroup";
      case "data":
        return "Data";
      case "datalist":
        return "Datalist";
      case "dd":
        return "Dd";
      case "del":
        return "Del";
      case "details":
        return "Details";
      case "dfn":
        return "Dfn";
      case "dialog":
        return "Dialog";
      case "div":
        return "Div";
      case "dl":
        return "Dl";
      case "dt":
        return "Dt";
      case "em":
        return "Em";
      case "embed":
        return "Embed";
      case "fieldset":
        return "Fieldset";
      case "figcaption":
        return "Figcaption";
      case "figure":
        return "Figure";
      case "footer":
        return "Footer";
      case "form":
        return "Form";
      case "h1":
        return "H1";
      case "h2":
        return "H2";
      case "h3":
        return "H3";
      case "h4":
        return "H4";
      case "h5":
        return "H5";
      case "h6":
        return "H6";
      case "head":
        return "Head";
      case "header":
        return "Header";
      case "hr":
        return "Hr";
      case "html":
        return "Html";
      case "i":
        return "I";
      case "iframe":
        return "Iframe";
      case "img":
        return "Img";
      case "input":
        return "Input";
      case "ins":
        return "Ins";
      case "kbd":
        return "Kbd";
      case "label":
        return "Label";
      case "legend":
        return "Legend";
      case "li":
        return "Li";
      case "link":
        return "Link";
      case "main":
        return "Main";
      case "map":
        return "Map";
      case "mark":
        return "Mark";
      case "meta":
        return "Meta";
      case "meter":
        return "Meter";
      case "nav":
        return "Nav";
      case "noscript":
        return "Noscript";
      case "object":
        return "Obj";
      case "ol":
        return "Ol";
      case "optgroup":
        return "Optgroup";
      case "option":
        return "Option";
      case "output":
        return "Output";
      case "p":
        return "P";
      case "param":
        return "Param";
      case "picture":
        return "Picture";
      case "pre":
        return "Pre";
      case "progress":
        return "Progress";
      case "q":
        return "Q";
      case "rp":
        return "Rp";
      case "rt":
        return "Rt";
      case "ruby":
        return "Ruby";
      case "s":
        return "S";
      case "samp":
        return "Samp";
      case "script":
        return "Script";
      case "section":
        return "Section";
      case "select":
        return "Select";
      case "small":
        return "Small";
      case "source":
        return "Source";
      case "span":
        return "Span";
      case "strong":
        return "Strong";
      case "style":
        return "Style";
      case "sub":
        return "Sub";
      case "summary":
        return "Summary";
      case "sup":
        return "Sup";
      case "svg":
        return "Svg";
      case "table":
        return "Table";
      case "tbody":
        return "Tbody";
      case "td":
        return "Td";
      case "template":
        return "Template";
      case "textarea":
        return "Textarea";
      case "tfoot":
        return "Tfoot";
      case "th":
        return "Th";
      case "thead":
        return "Thead";
      case "time":
        return "Time";
      case "title":
        return "Title";
      case "tr":
        return "Tr";
      case "track":
        return "Track";
      case "u":
        return "U";
      case "ul":
        return "Ul";
      case "var":
        return "Var";
      case "video":
        return "Video";
      case "wbr":
        return "Wbr";
      default:
        return "Custom";
    }
  }(n2), o2 = [];
  t2.text && o2.push(`    text: \`${t2.text.trim()}\`,`);
  const u2 = (e3) => {
    if (e3.includes(":"))
      return `"${e3}"`;
    if (e3.includes("-")) {
      const t3 = e3.split("-");
      return t3[0] + t3[1].slice(0, 1).toUpperCase() + t3[1].slice(1, t3[1].length);
    }
    return e3;
  };
  if (t2.attributes) {
    const e3 = Object.entries(t2.attributes);
    if (e3.length > 0) {
      o2.push(" attributes: {");
      for (const [t3, r3] of e3)
        o2.push(`    ${u2(t3)}: "${(s2 = r3 == null ? void 0 : r3.value) != null ? s2 : ""}",`);
      o2.push(" },");
    }
  }
  if (t2.styles) {
    const e3 = Object.entries(t2.styles);
    if (e3.length > 0) {
      o2.push(" styles: {");
      for (const [t3, s3] of e3)
        o2.push(`    ${u2(t3)}: "${(r2 = s3 == null ? void 0 : s3.value) != null ? r2 : ""}",`);
      o2.push(" },");
    }
  }
  if (t2.children && t2.children.length > 0) {
    o2.push(" children: [");
    for (const e3 of t2.children)
      if (e3 instanceof a) {
        const t3 = e3.renderDom();
        o2.push(`    ${Mt(t3.node, t3)},`);
      } else
        typeof e3 == "string" ? o2.push(`    ${e3},`) : o2.push(`    ${$t(e3).join("\n")},`);
    o2.push(" ],");
  }
  return `new tags.${c2 === "Custom" ? `Custom("${n2}",` : `${c2}(`}{
    ${o2.join("\n")}
  })`;
}
function $t(e2) {
  for (var t2 = e2.childNodes, s2 = [], r2 = 0, n2 = t2.length; r2 < n2; r2++)
    t2[r2].nodeType == Node.COMMENT_NODE && s2.push(t2[r2]);
  return s2;
}
function Ht(e2) {
  return `
  import * as tags from 'object-dom';

  export class MyClass extends tags.ObjectDom {
    render() {
      return ${e2};
    }
  }
  
  `;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let MyElement = class extends LitElement {
  render() {
    const fixedSource = html_beautify(HTML_SOURCE);
    return html` <main>
      <textarea
        id="html-source"
        class="code"
        @input="${() => this.updateOutput()})"
        .value=${fixedSource}
      ></textarea>
      <div id="actions">
        <!-- <button>></button> -->
        <!-- <div class="spacer-vertical"></div>
        <button><</button> -->
      </div>
      <textarea id="code-source" class="code" readonly></textarea>
    </main>`;
  }
  async firstUpdated() {
    this.updateOutput();
  }
  updateOutput() {
    const htmlCode = this.htmlSource.value;
    if (htmlCode !== html_beautify(htmlCode)) {
      this.htmlSource.value = html_beautify(htmlCode);
    }
    const codeOutput = Tt(htmlCode);
    console.log("codeOutput", codeOutput);
    if (codeOutput) {
      this.codeSource.value = js_beautify(codeOutput, {
        indent_size: 2,
        space_in_empty_paren: true
      });
    }
  }
};
MyElement.styles = css`
    main {
      display: grid;
      width: 100%;
      height: 100vh;
      grid-template-areas:
        "input actions output"
        "input actions output"
        "input actions output";
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr auto 1fr;
    }
    #code-source {
      grid-area: output;
    }
    #html-source {
      grid-area: input;
    }
    #actions {
      width: 5px;
      grid-area: actions;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .code {
      margin: 5px;
    }
    .spacer-vertical {
      height: 10px;
    }
  `;
__decorateClass([
  query("#code-source")
], MyElement.prototype, "codeSource", 2);
__decorateClass([
  query("#html-source")
], MyElement.prototype, "htmlSource", 2);
MyElement = __decorateClass([
  customElement("my-element")
], MyElement);
const HTML_SOURCE = `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Object Dom Example</title>
    <style>
      body {
        padding: 0;
        margin: 0;
      }
    </style>
    <script type="module" src="/src/my-element.ts"></script>
  </head>
  <body>
    <my-element> </my-element>
  </body>
</html>
`;
