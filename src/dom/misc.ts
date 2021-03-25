import { CoreDom, NodeProps } from '../base';

export class Custom extends CoreDom<HTMLElement> {
  constructor(tag: string, props: NodeProps = {}) {
    super({ node: document.createElement(tag), ...props });
  }
}

export class Break extends CoreDom<HTMLBRElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('br'), ...props });
  }
}
