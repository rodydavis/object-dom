import { GlobalDom, NodeProps } from '../base';

export class Custom extends GlobalDom<HTMLElement> {
  constructor(tag: string, props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement(tag), ...props });
  }
}
