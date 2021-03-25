import { CSS } from './styles';

export * from './styles';

export type NodeArray = Array<ObjectDom | string>;
export interface Props {
  style: CSS;
  children: NodeArray;
}

function applyNodeStyle(node: HTMLElement, style: CSS) {
  for (const [key, value] of Object.entries(style)) {
    node.style.setProperty(key, value);
  }
}

export interface NodeProps {
  id?: string;
  text?: string;
  className?: string | string[];
  style?: CSS;
  children?: NodeArray;
}

interface ObjectDomProps<T extends HTMLElement> extends NodeProps {
  node: T;
}

export abstract class ObjectDom {
  abstract node: HTMLElement;
  update: () => void = () => {};
  abstract build: () => CoreDom<HTMLElement>;
  toHtml = () => this.build().node.outerHTML;
}

export class CoreDom<T extends HTMLElement> extends ObjectDom {
  constructor(props: ObjectDomProps<T>) {
    super();
    this._node = props.node;
    this._style = props.style;
    this._children = [];
    this._classList = [];
    this.id = props.id;
    if (props?.text) this.node.innerText = props.text;
    if (props?.className) {
      if (typeof props.className === 'string') {
        this.addClassName(props.className);
      } else {
        props.className.forEach(e => this.addClassName(e));
      }
    }
    if (this.style) applyNodeStyle(this.node, this.style);
    if (props?.children) for (const child of props.children) this.addChild(child);
  }

  build = () => this;

  private _classList: string[];
  public get classList(): string[] {
    return this._classList;
  }
  addClassName(val: string) {
    this._classList.push(val);
    this.node.classList.add(val);
  }

  private _id: string | undefined;
  public get id(): string | undefined {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
    if (value) this.node.id = value;
  }

  private _node: T;
  public get node(): T {
    return this._node;
  }
  public set node(value: T) {
    this._node = value;
  }

  private _style: CSS | undefined;
  public get style(): CSS | undefined {
    return this._style;
  }
  public set style(value: CSS | undefined) {
    this._style = value;
    if (this.style) applyNodeStyle(this.node, this.style);
  }

  private _children: NodeArray;
  public get children(): NodeArray {
    return this._children;
  }
  public addChild(value: ObjectDom | string) {
    this._children.push(value);
    if (value instanceof ObjectDom) {
      this._node.append(value.build().node);
    } else {
      this._node.append(value);
    }
  }
}
