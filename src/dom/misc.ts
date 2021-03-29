import { CoreDom, NodeProps } from '../base';

export class Custom extends CoreDom<HTMLElement> {
  constructor(tag: string, props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement(tag), ...props });
  }
}
