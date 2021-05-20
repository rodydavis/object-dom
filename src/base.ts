import { GlobalAttrs } from "./dom/attrs";
import {
  AttrType,
  AutoCapitalize,
  convertClassList,
  convertCssStyles,
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
export type NodeStyles = {
  [key: string]: PossibleStyle;
};

export type NodeArray = Array<ObjectDom | string>;

export interface NodeProps<T extends HTMLElement = HTMLElement> extends GlobalAttrs {
  node?: T;
  text?: string;
  children?: NodeArray;
  attributes?: NodeAttrs;
  styles?: NodeStyles;
}

export interface ObjectDomProps<T extends HTMLElement = HTMLElement> extends NodeProps<T> {
  node: T;
}

export abstract class ObjectDom<T extends HTMLElement = HTMLElement> {
  abstract render: () => GlobalDom<T>;
  update: () => void = () => {};
}

export class GlobalDom<T extends HTMLElement = HTMLElement> extends ObjectDom<T> {
  attributes: { [key: string]: NodeAttr<string | boolean | number> } = {};
  styles: { [key: string]: NodeStyle<string> } = {};
  _children: NodeArray = [];
  constructor(private props: ObjectDomProps<T>) {
    super();
    if (this.props.text) this.text = this.props.text;
    this._children = [];
    if (props.children) {
      this._children = [...props.children];
    }
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
    if (this.props.attributes) {
      for (const [key, value] of Object.entries(this.props.attributes)) {
        this.addAttr(key, value);
      }
    }
    if (this.props.styles) {
      for (const [key, value] of Object.entries(this.props.styles)) {
        this.addStyle(key, value);
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
      this.addAttr(key, value);
    }
    this.styles[key].value = value;
  }

  render = () => this;

  public get node(): T {
    const _node = this.rootNode;
    _node.innerHTML = "";
    for (const child of this.children) {
      if (child instanceof ObjectDom) {
        let childNode = child.render().node;
        child.update = () => {
          if (childNode) childNode.remove();
          childNode = child.render().node;
          _node.appendChild(childNode);
        };
        _node.appendChild(childNode);
      } else {
        _node.append(child);
      }
    }
    if (this.text && this.text?.length > 0) {
      _node.innerHTML = this.text;
    }
    return _node;
  }

  public get children(): NodeArray {
    return this._children;
  }

  public set children(value: NodeArray) {
    this._children = value;
    this.update();
  }

  public get rootNode(): T {
    return this.props.node ?? document.createElement("div");
  }
  public set rootNode(value: T) {
    this.props.node = value;
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
    if (text) this.node.innerText = text;
  }

  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject,
    options: boolean | AddEventListenerOptions | undefined = undefined
  ) {
    this.rootNode.addEventListener(type, callback, options);
  }

  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject,
    options: boolean | AddEventListenerOptions | undefined = undefined
  ) {
    this.rootNode.removeEventListener(type, callback, options);
  }

  public toString = (): string => {
    const tab = "";
    const sb: string[] = [];
    sb.push(`new ${this.constructor.name}({`);
    if (this.text) sb.push(`${tab}text: "${this.text}"`);
    if (this.styles) {
      const styles = Object.entries(this.styles)
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
    if (this.attributes) {
      const attrs = Object.entries(this.attributes)
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
    if (this.children && this.children.length > 0) {
      sb.push(`${tab}children: {`);
      for (const child of this.children) {
        const item = child.toString();
        sb.push(`${tab}${tab}${item},`);
      }
      sb.push(`${tab}},`);
    }
    sb.push(`})`);
    return sb.join("");
  };
}
