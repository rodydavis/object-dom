import { Div } from './dom';
import { Style } from './styles';
export * from './styles';

export type NodeArray = Array<ObjectDom<HTMLElement> | string>;
export interface Props {
  style: Style;
  children: NodeArray;
}

function applyNodeStyle(node: HTMLElement, style: Style) {
  for (const [key, value] of Object.entries(style)) {
    node.style.setProperty(key, value);
  }
}

export interface NodeProps {
  id?: string;
  text?: string;
  className?: string | string[];
  style?: Style;
  children?: NodeArray;
}

interface ObjectDomProps<T extends HTMLElement> extends NodeProps {
  node: T;
}

export abstract class ObjectDomBase {
  abstract build: () => ObjectDom<HTMLElement>;
}

export class ObjectDom<T extends HTMLElement> extends ObjectDomBase {
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
    this.node.id = value ?? '';
  }

  private _node: T;
  public get node(): T {
    return this._node;
  }
  public set node(value: T) {
    this._node = value;
  }

  private _parent: ObjectDom<T> | undefined;
  public get parent(): ObjectDom<T> | undefined {
    return this._parent;
  }
  public set parent(value: ObjectDom<T> | undefined) {
    this._parent = value;
  }

  private _style: Style | undefined;
  public get style(): Style | undefined {
    return this._style;
  }
  public set style(value: Style | undefined) {
    this._style = value;
    if (this.style) applyNodeStyle(this.node, this.style);
  }

  private _children: NodeArray;
  public get children(): NodeArray {
    return this._children;
  }
  public addChild(value: ObjectDom<HTMLElement> | string) {
    this._children.push(value);
    if (value instanceof ObjectDom) {
      value.parent = this;
      this._node.append(value.node);
    } else {
      this._node.append(value);
    }
  }
}

export function render(source: ObjectDomBase, target: HTMLElement = document.body) {
  target.innerHTML = '';
  target.appendChild(source.build().node);
  //   console.log('render node', target, source)
}
