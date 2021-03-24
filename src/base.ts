type NodeArray = Array<ObjectDom<HTMLElement> | string>

export class ObjectDom<T extends HTMLElement> {
  constructor(node: T, styles: Styles, children: NodeArray) {
    this._node = node
    this._styles = styles
    this._children = children
    applyNodeStyles(this.node, this.styles)
    applyNodeChildren(this.node, this.children)
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
  public set children(value: NodeArray) {
    this._children = value
    applyNodeChildren(this.node, this.children)
  }
}

export function render(source: ObjectDom<HTMLElement>, target: HTMLElement = document.body) {
  //   const htmlResult = source.render()
  //   console.log(htmlResult)
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

function applyNodeChildren(node: HTMLElement, children: NodeArray) {
  node.innerHTML = ''
  for (const child of children) {
    if (child instanceof ObjectDom) {
      node.append(child.node)
    } else {
      node.append(child)
    }
  }
}
