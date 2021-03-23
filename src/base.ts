type NodeArray = Array<ObjectDom<HTMLElement> | string>

export class ObjectDom<T extends HTMLElement> {
  constructor(public node: T, public styles: Styles, public children: NodeArray) {}
  render(): string {
    const node = this.node
    return nodeToHtml(node, this.styles, this.children)
  }
  update() {
    render(this, this.node)
  }
}

export function render(source: ObjectDom<HTMLElement>, target: HTMLElement = document.body) {
  const htmlResult = source.render()
  console.log(htmlResult)
  target.innerHTML = htmlResult
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
  const nodes: string[] = []
  for (const child of children) {
    if (child instanceof ObjectDom) {
      const childHtml = child.render()
      nodes.push(childHtml)
    } else {
      nodes.push(child)
    }
  }
  if (nodes.length > 0) {
    node.innerHTML = nodes.join('\n')
  }
}

function nodeToHtml(node: HTMLElement, styles: Styles, children: NodeArray): string {
  applyNodeStyles(node, styles)
  applyNodeChildren(node, children)
  return node.outerHTML
}
