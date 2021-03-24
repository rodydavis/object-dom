import { Style } from './styles'
export * from './styles'

export type NodeArray = Array<ObjectDom<HTMLElement> | string>
export interface Props {
  style: Style
  children: NodeArray
}

function applyNodeStyle(node: HTMLElement, style: Style) {
  for (const [key, value] of Object.entries(style)) {
    node.style.setProperty(key, value)
  }
}

export class ObjectDom<T extends HTMLElement> {
  constructor(node: T, style: Style, children: NodeArray) {
    this._node = node
    this._style = style
    this._children = []
    this.updateStyle()
    for (const child of children) this.addChild(child)
  }

  private _node: T
  public get node(): T {
    return this._node
  }

  private _style: Style
  public get style(): Style {
    return this._style
  }
  public set style(value: Style) {
    this._style = value
    this.updateStyle()
  }

  updateStyle() {
    applyNodeStyle(this.node, this.style)
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
