import { CSS } from './styles';

export * from './styles';

export type NodeArray = Array<ObjectDom<HTMLElement> | string>;
export interface Props {
  style: CSS;
  children: NodeArray;
}

function applyNodeStyle(node: HTMLElement, style: CSS) {
  for (const [key, value] of Object.entries(style)) {
    node.style.setProperty(key, value);
  }
}

export interface NodeProps<T extends HTMLElement> {
  id?: string;
  node?: T;
  text?: string;
  className?: string | string[];
  style?: CSS;
  children?: NodeArray;
}

interface ObjectDomProps<T extends HTMLElement> extends NodeProps<T> {
  node: T;
}

export abstract class ObjectDom<T extends HTMLElement> {
  abstract node: HTMLElement;
  abstract render: () => ObjectDom<T>;
  update: () => void = () => {};
  toHtml: (root?: HTMLElement | undefined) => string = root => this.render().node.outerHTML;
}

export class CoreDom<T extends HTMLElement> extends ObjectDom<T> {
  constructor(private props: ObjectDomProps<T>) {
    super();
  }

  render = () => this;

  public get classList(): string[] {
    const _classList: string[] = [];
    if (this.props?.className) {
      if (typeof this.props.className === 'string') {
        _classList.push(this.props.className);
      } else {
        this.props.className.forEach(e => _classList.push(e));
      }
    }
    return _classList;
  }

  public get id(): string | undefined {
    return this.props.id;
  }
  public set id(value: string | undefined) {
    this.props.id = value;
  }

  private get rootNode(): T {
    return this.props.node ?? this.render().rootNode;
  }
  private set rootNode(value: T) {
    this.props.node = value;
  }
  public get node(): T {
    const _parent = this.render();
    const _node = _parent.rootNode;
    if (_parent.id) _node.id = _parent.id;
    if (_parent.props?.text) {
      _node.innerText = _parent.props.text;
    } else {
      _node.innerText = '';
    }
    for (const className of _parent.classList) {
      _node.classList.add(className);
    }
    if (_parent.style) applyNodeStyle(_node, _parent.style);
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

  public get style(): CSS | undefined {
    return this.props.style;
  }
  public set style(value: CSS | undefined) {
    this.props.style = value;
  }

  public get children(): NodeArray {
    return this.props.children ?? [];
  }

  public set children(value: NodeArray) {
    this.props.children = value;
  }

  public addChild(value: ObjectDom<HTMLElement>, index?: number | undefined) {
    if (this.props.children == undefined) {
      this.props.children = [];
    }
    if (index) {
      this.props.children.splice(index, 0, value);
    } else {
      this.props.children.push(value);
    }
  }

  public removeChild(index: number) {
    if (this.props.children == undefined) {
      return;
    }
    this.props.children.splice(index, 1);
  }
}
