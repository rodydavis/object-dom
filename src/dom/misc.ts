import { ObjectDom, NodeProps } from '../base';

export class Custom extends ObjectDom<HTMLElement> {
  constructor(tag: string, props: NodeProps = {}) {
    super({ node: document.createElement(tag), ...props });
  }
}

export class Break extends ObjectDom<HTMLBRElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('br'), ...props });
  }
}
