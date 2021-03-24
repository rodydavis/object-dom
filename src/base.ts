type NodeArray = Array<ObjectDom<HTMLElement> | string>

export class ObjectDom<T extends HTMLElement> {
  constructor(node: T, styles: Styles, children: NodeArray) {
    this._node = node
    this._styles = styles
    this._children = []
    applyNodeStyles(this.node, this.styles)
    for (const child of children) this.addChild(child)
  }

  private _node: T
  public get node(): T {
    return this._node
  }

  private _styles: Styles
  public get styles(): Styles {
    return this._styles
  }
  public set styles(value: Styles) {
    this._styles = value
    applyNodeStyles(this.node, this.styles)
  }

  private _children: NodeArray
  public get children(): NodeArray {
    return this._children
  }
  public addChild(value: ObjectDom<HTMLElement> | string) {
    this._children.push(value)
    if (value instanceof ObjectDom) {
      this._node.append(value.node)
    } else {
      this._node.append(value)
    }
  }
}

export function render(source: ObjectDom<HTMLElement>, target: HTMLElement = document.body) {
  target.innerHTML = ''
  target.appendChild(source.node)
  console.log('render node', target, source)
}

export interface Styles {
  width?: string
  height?: string
}

function applyNodeStyles(node: HTMLElement, styles: Styles) {
  if (styles?.width) node.style.width = styles.width
  if (styles?.height) node.style.height = styles.height
}
