import { GlobalAttrs } from "./dom/attrs";
import { convertToPathCase } from "./dom/utils";
import { NodeEvents } from "./events";
import {
  AttrType,
  AutoCapitalize,
  convertClassList,
  CSSStyles,
  Direction,
  InputMode,
  NodeAttr,
  NodeStyle,
  PossibleAttr,
  PossibleStyle,
  StringBool,
  StringYesNo,
} from "./object-dom";

export type NodeAttrs = {
  [key: string]: PossibleAttr;
};
export interface NodeStyles extends CSSStyles {
  [key: string]: PossibleStyle;
}

export type NodeArray = Array<ObjectDom | string | Comment>;

export interface NodeProps<T extends HTMLElement = HTMLElement> extends GlobalAttrs {
  node?: T;
  text?: string;
  children?: NodeArray;
  attributes?: NodeAttrs;
  events?: NodeEvents;
}

export interface ObjectDomProps<T extends HTMLElement = HTMLElement> extends NodeProps<T> {
  node: T;
}

export abstract class ObjectDom<T extends HTMLElement = HTMLElement> {
  abstract render: () => GlobalDom<T>;
  update: () => void = () => {};
}

interface NodeEvent {
  callback: EventListenerOrEventListenerObject;
  options: boolean | AddEventListenerOptions | undefined;
}

export class GlobalDom<T extends HTMLElement = HTMLElement> extends ObjectDom<T> {
  attributes: { [key: string]: NodeAttr<string | boolean | number> } = {};
  styles: { [key: string]: NodeStyle<string> } = {};
  _children: NodeArray = [];
  _node: HTMLElement;
  _events: { [key: string]: NodeEvent[] } = {};

  constructor(props: ObjectDomProps<T>) {
    super();
    this._node = props.node;
    if (props.text) this.text = props.text;
    this.children = [...(props?.children ?? [])];
    this.attributes = {
      id: new NodeAttr(this, "id", props?.id),
      className: new NodeAttr(this, "class", convertClassList(props?.className)),
      contentEditable: new NodeAttr<StringBool>(this, "contenteditable", props?.contenteditable),
      accesskey: new NodeAttr(this, "accesskey", props?.accesskey),
      autocapitalize: new NodeAttr<AutoCapitalize>(this, "autocapitalize", props?.autocapitalize),
      dir: new NodeAttr<Direction>(this, "dir", props?.dir),
      draggable: new NodeAttr<StringBool>(this, "draggable", props?.draggable),
      enterkeyhint: new NodeAttr<string>(this, "enterkeyhint", props?.enterkeyhint),
      hidden: new NodeAttr<boolean>(this, "hidden", props?.hidden),
      inputmode: new NodeAttr<InputMode>(this, "inputmode", props?.inputmode),
      is: new NodeAttr<string>(this, "is", props?.is),
      lang: new NodeAttr<string>(this, "lang", props?.lang),
      nonce: new NodeAttr<string>(this, "nonce", props?.nonce),
      part: new NodeAttr<string>(this, "part", props?.part),
      slot: new NodeAttr<string>(this, "slot", props?.slot),
      spellcheck: new NodeAttr<StringBool>(this, "spellcheck", props?.spellcheck),
      style: new NodeAttr<string | number | boolean>(this, "style", convertCssStyles(props?.style)),
      tabindex: new NodeAttr<number>(this, "tabindex", props?.tabindex),
      title: new NodeAttr<string>(this, "title", props?.title),
      translate: new NodeAttr<StringYesNo>(this, "translate", props?.translate),
    };
    if (props.attributes) {
      for (const [key, value] of Object.entries(props.attributes)) {
        this.addAttr(key, value);
      }
    }
    if (props.style) {
      for (const [key, value] of Object.entries(props.style)) {
        this.addStyle(key, value);
      }
    }
    if (props.events) {
      for (const [key, value] of Object.entries(props.events)) {
        this.addEventListener(key, value);
      }
    }
  }

  addAttr(key: string, value: PossibleAttr) {
    if (value) {
      if (typeof value === "string") {
        this.attributes[key] = new NodeAttr<string>(this, key, value);
      } else if (typeof value === "boolean") {
        this.attributes[key] = new NodeAttr<boolean>(this, key, value);
      } else if (typeof value === "number") {
        this.attributes[key] = new NodeAttr<number>(this, key, value);
      } else if (value) {
        this.attributes[key] = value;
      }
    }
  }

  setAttr(key: string, value: AttrType) {
    if (!this.attributes[key]) {
      this.addAttr(key, value);
    }
    this.attributes[key].value = value;
  }

  addStyle(key: string, value: PossibleStyle) {
    if (value) {
      if (typeof value === "string") {
        this.styles[key] = new NodeStyle<string>(this, key, value);
      } else if (value) {
        this.styles[key] = value;
      }
    }
  }

  setStyle(key: string, value: string) {
    if (!this.styles[key]) {
      this.addStyle(key, value);
    }
    this.styles[key].value = value;
  }

  render = () => this;

  public get node(): T {
    return generateNode(this) as T;
  }

  public get children(): NodeArray {
    return this._children;
  }

  public set children(value: NodeArray) {
    this._children = value;
    this.update();
  }

  public addChild(value: ObjectDom<HTMLElement> | string, index?: number | undefined) {
    const current = this.children;
    if (index) {
      current.splice(index, 0, value);
    } else {
      current.push(value);
    }
    this.children = current;
  }

  public removeChild(index: number) {
    const current = this.children;
    current.splice(index, 1);
    this.children = current;
  }

  private _text: string | undefined;
  public get text(): string | undefined {
    return this._text;
  }
  public set text(text: string | undefined) {
    this._text = text;
    if (text) this._node.innerText = text;
  }

  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | undefined,
    options: boolean | AddEventListenerOptions | undefined = undefined
  ) {
    if (!callback) return;
    if (!this._events[type]) this._events[type] = [];
    this._events[type].push({ callback, options });
  }

  public toString = (): string => {
    return generateCode(this);
  };
}

export function generateCode(source: GlobalDom<HTMLElement>) {
  const tab = "";
  const sb: string[] = [];
  sb.push(`new ${source.constructor.name}({`);
  if (source.text) sb.push(`${tab}text: "${source.text}"`);
  if (source.styles) {
    const styles = Object.entries(source.styles)
      .filter((n) => n[1].value)
      .map(([key, value]) => `"${key}": "${value.value}"`);
    if (styles.length > 0) {
      sb.push(`${tab}styles: {`);
      for (const item of styles) {
        sb.push(`${tab}${tab}${item},`);
      }
      sb.push(`${tab}},`);
    }
  }
  if (source.attributes) {
    const attrs = Object.entries(source.attributes)
      .filter((n) => n[1].value)
      .filter((n) => n[1].value)
      .map(([key, value]) => `"${key}": "${value.value}"`);
    if (attrs.length > 0) {
      sb.push(`${tab}attributes: {`);
      for (const item of attrs) {
        sb.push(`${tab}${tab}${item},`);
      }
      sb.push(`${tab}},`);
    }
  }
  if (source.children && source.children.length > 0) {
    sb.push(`${tab}children: {`);
    for (const child of source.children) {
      const item = child.toString();
      sb.push(`${tab}${tab}${item},`);
    }
    sb.push(`${tab}},`);
  }
  sb.push(`})`);
  return sb.join("");
}

export function generateNode(source: GlobalDom<HTMLElement>) {
  const result = document.createElement(source._node.tagName);
  if (source.text) {
    result.textContent = source.text;
  }
  for (const child of source.children) {
    if (child instanceof ObjectDom) {
      let childNode = generateNode(child.render());
      child.update = () => {
        if (childNode) childNode.remove();
        childNode = generateNode(child.render());
        result.appendChild(childNode);
      };
      result.appendChild(childNode);
    } else {
      result.append(child);
    }
  }
  if (source.styles) {
    for (const [key, value] of Object.entries(source.styles).filter((n) => n[1].value)) {
      result.style.setProperty(key, value.value);
    }
  }
  if (source.attributes) {
    for (const [key, value] of Object.entries(source.attributes).filter((n) => n[1].value)) {
      const val = value.value;
      if (val) {
        if (typeof val === "string") {
          result.setAttribute(key, val);
        } else if (typeof val === "number") {
          result.setAttribute(key, `${val}`);
        } else if (typeof val === "boolean" && val) {
          result.setAttribute(key, key);
        }
      }
    }
  }
  for (const [type, events] of Object.entries(source._events)) {
    for (const event of events) {
      result.addEventListener(type, event.callback, event.options);
    }
  }
  return result;
}

function convertCssStyles(style: CSSStyles | string | undefined): string | undefined {
  if (style) {
    if (typeof style === "string") return style;
    const results: string[] = [];
    for (const [key, value] of Object.entries(style)) {
      const _key = convertToPathCase(key);
      results.push(`${_key}: ${value};`);
    }
    return results.join(" ");
  }
  return undefined;
}
