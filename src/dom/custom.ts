import { GlobalDom, NodeProps } from "../base";

export class Custom<T extends HTMLElement = HTMLElement> extends GlobalDom<T> {
  constructor(tag: string, props: NodeProps<T> = {}) {
    super({ node: document.createElement(tag) as T, ...props });
  }
}
