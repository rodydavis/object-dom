import { GlobalAttrs } from "./dom/attrs";
import { NodeEvents } from "./events";
import {
  AttrType,
  convertToPathCase,
  CSSStyles,
  NodeAttr,
  NodeStyle,
  PossibleAttr,
  PossibleStyle,
} from "./object-dom";

export interface NodeAttrs extends GlobalAttrs {
  [key: string]: PossibleAttr;
}
export interface NodeStyles extends CSSStyles {
  [key: string]: PossibleStyle;
}

export type NodeArray = Array<ObjectDom | string | Comment>;

export interface NodeProps<T extends HTMLElement = HTMLElement> {
  node?: T;
  text?: string;
  children?: NodeArray;
  attributes?: NodeAttrs;
  styles?: CSSStyles;
  events?: NodeEvents;
  onCreate?: ((node: HTMLElement) => void) | undefined;
}

export abstract class ObjectDom<T extends HTMLElement = HTMLElement> {
  abstract render(): ObjectDom<T> | GlobalDom<T>;
  renderDom(): GlobalDom<HTMLElement> {
    return renderChild(this.render());
  }
  update: () => void = () => {};
  onCreate: (node: HTMLElement) => void = (_) => {};
}

function renderChild(
  node: ObjectDom<HTMLElement> | GlobalDom<HTMLElement>
): GlobalDom<HTMLElement> {
  if (node instanceof GlobalDom) {
    return node;
  }
  return renderChild(node.render());
}

interface NodeEvent {
  callback: EventListenerOrEventListenerObject;
  options: boolean | AddEventListenerOptions | undefined;
}

export class GlobalDom<T extends HTMLElement> extends ObjectDom<T> {
  attributes: { [key: string]: NodeAttr<string | boolean | number> } = {};
  styles: { [key: string]: NodeStyle<string> } = {};
  _children: NodeArray = [];
  _node: HTMLElement;
  _events: { [key: string]: NodeEvent[] } = {};

  constructor(public props: NodeProps<T>) {
    super();
    this._node = props.node!;
    if (props.text) this.text = props.text;
    this.children = [...(props?.children ?? [])];
    if (props.attributes) {
      for (const [key, value] of Object.entries(props.attributes)) {
        this.addAttr(key, value);
      }
    }
    if (props.events) {
      for (const [key, value] of Object.entries(props.events)) {
        this.addEventListener(key, value);
      }
    }
    if (props.styles) {
      for (const [k, v] of Object.entries(props.styles)) {
        this.addStyle(k, v);
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

  render() {
    return this;
  }

  public get node(): HTMLElement {
    const base = generateNode(this);
    return base;
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
}

export function generateNode(source: GlobalDom<HTMLElement>) {
  const result = document.createElement(source._node.tagName);
  if (source.text) {
    result.textContent = source.text;
  }
  for (const child of source.children) {
    if (child instanceof ObjectDom) {
      let childNode = generateNode(child.renderDom());
      child.update = () => {
        const _newNode = generateNode(child.renderDom());
        result?.replaceChild(_newNode, childNode);
        childNode = _newNode;
      };
      result.appendChild(childNode);
    } else {
      result.append(child);
    }
  }
  if (source.styles) {
    for (const [key, val] of Object.entries(source.styles)) {
      result.style.setProperty(convertToPathCase(key), val.value);
    }
  }
  if (source.attributes) {
    for (const [key, value] of Object.entries(source.attributes).filter((n) => n[1].value)) {
      const val = value.value;
      const fixedKey = convertToPathCase(key);
      if (val) {
        if (typeof val === "string") {
          result.setAttribute(fixedKey, val);
        } else if (typeof val === "number") {
          result.setAttribute(fixedKey, `${val}`);
        } else if (typeof val === "boolean" && val) {
          result.setAttribute(fixedKey, fixedKey);
        }
      }
    }
  }
  for (const [type, events] of Object.entries(source._events)) {
    for (const event of events) {
      result.addEventListener(type, event.callback, event.options);
    }
  }
  if (source.props.onCreate) {
    source.props.onCreate(result);
  }
  return result;
}
