import {
  AutoCapitalize,
  Direction,
  GlobalAttrs,
  InputMode,
  NodeAttr,
  StringBool,
  StringYesNo
} from './dom/attrs';
import { convertClassList, convertCssStyles } from './styles';

export type NodeArray = Array<ObjectDom<HTMLElement> | string>;

export interface NodeProps<T extends HTMLElement> extends GlobalAttrs {
  node?: T;
  text?: string;
  children?: NodeArray;
}

export interface ObjectDomProps<T extends HTMLElement> extends NodeProps<T> {
  node: T;
}

export abstract class ObjectDom<T extends HTMLElement> {
  abstract node: HTMLElement;
  abstract render: () => ObjectDom<T>;
  update: () => void = () => {};
  toHtml: (root?: HTMLElement | undefined) => string = root => this.render().node.outerHTML;
}

export class GlobalDom<T extends HTMLElement> extends ObjectDom<T> {
  constructor(public props: ObjectDomProps<T>) {
    super();
    this.id = new NodeAttr(this, 'id', props?.id);
    this.className = new NodeAttr(this, 'class', convertClassList(props?.className));
    this.contentEditable = new NodeAttr(this, 'contenteditable', props?.contenteditable);
    this.accesskey = new NodeAttr(this, 'accesskey', props?.accesskey);
    this.autocapitalize = new NodeAttr(this, 'autocapitalize', props?.autocapitalize);
    this.dir = new NodeAttr(this, 'dir', props?.dir);
    this.draggable = new NodeAttr(this, 'draggable', props?.draggable);
    this.enterkeyhint = new NodeAttr(this, 'enterkeyhint', props?.enterkeyhint);
    this.hidden = new NodeAttr(this, 'hidden', props?.hidden);
    this.inputmode = new NodeAttr(this, 'inputmode', props?.inputmode);
    this.is = new NodeAttr(this, 'is', props?.is);
    this.lang = new NodeAttr(this, 'lang', props?.lang);
    this.nonce = new NodeAttr(this, 'nonce', props?.nonce);
    this.part = new NodeAttr(this, 'part', props?.part);
    this.slot = new NodeAttr(this, 'slot', props?.slot);
    this.spellcheck = new NodeAttr(this, 'spellcheck', props?.spellcheck);
    this.style = new NodeAttr(this, 'style', convertCssStyles(props?.style));
    this.tabindex = new NodeAttr(this, 'tabindex', props?.tabindex);
    this.title = new NodeAttr(this, 'title', props?.title);
    this.translate = new NodeAttr(this, 'translate', props?.translate);
  }
  id: NodeAttr;
  className: NodeAttr;
  contentEditable: NodeAttr<StringBool>;
  accesskey: NodeAttr;
  autocapitalize: NodeAttr<AutoCapitalize>;
  dir: NodeAttr<Direction>;
  draggable: NodeAttr<StringBool>;
  enterkeyhint: NodeAttr<string>;
  hidden: NodeAttr<boolean>;
  inputmode: NodeAttr<InputMode>;
  is: NodeAttr<string>;
  lang: NodeAttr<string>;
  nonce: NodeAttr<string>;
  part: NodeAttr<string>;
  slot: NodeAttr<string>;
  spellcheck: NodeAttr<StringBool>;
  style: NodeAttr<string | number | boolean>;
  tabindex: NodeAttr<number>;
  title: NodeAttr<string>;
  translate: NodeAttr<StringYesNo>;

  render = () => this;

  public get node(): T {
    const _parent = this.render();
    const _node = _parent.rootNode;
    if (_parent.props?.text) {
      _node.innerText = _parent.props.text;
    } else {
      _node.innerText = '';
    }
    for (const child of _parent.children) {
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
    return _node;
  }

  public get children(): NodeArray {
    return this.props.children ?? [];
  }

  public set children(value: NodeArray) {
    this.props.children = value;
    this.update();
  }

  public get rootNode(): T {
    return this.props.node ?? this.render().rootNode;
  }
  public set rootNode(value: T) {
    this.props.node = value;
    this.update();
  }

  public addChild(value: ObjectDom<HTMLElement>, index?: number | undefined) {
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
}
