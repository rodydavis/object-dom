import { ObjectDom, NodeProps } from '../base';

export class Break extends ObjectDom<HTMLBRElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('br'), ...props });
  }
}
