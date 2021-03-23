export interface Styles {
  width?: string;
  height?: string;
}

export abstract class ObjectDom<T extends HTMLElement | string> {
  constructor(public node: T, public styles: Styles, public children: Array<ObjectDom<HTMLElement>>) { }
  render(): string {
    const node = this.node;
    if (node instanceof HTMLElement) {
      if (this.styles?.width) node.style.width = this.styles.width;
      if (this.styles?.height) node.style.height = this.styles.height;
      let children: string[] = [];
      for (const child of this.children) {
        const childHtml = child.render();
        children.push(childHtml);
      }
      if (children.length > 0) {
        node.innerHTML = children.join('\n');
      }
      return node.outerHTML;
    }
    return node.toString();
  }

}

export class Div extends ObjectDom<HTMLDivElement> {
  constructor(props: { style?: Styles, children?: Array<ObjectDom<HTMLElement>> } = {}) {
    super(document.createElement('div'), props?.style ?? {}, props?.children ?? []);
  }
}

export class Text extends ObjectDom<string> {
  constructor(public value: string, props: { style?: Styles, children?: Array<ObjectDom<HTMLElement>> } = { }) {
    super(value, props?.style ?? {}, props?.children ?? []);
  }
}

export function render<T extends HTMLElement>( source: ObjectDom<T>, target: HTMLElement = document.body) {
  const htmlResult = source.render();
  console.log(htmlResult);
  target.innerHTML = htmlResult;
}
