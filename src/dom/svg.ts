import { GlobalDom, NodeProps } from '../base';

export class Svg extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement('svg'), ...props });
  }
}
