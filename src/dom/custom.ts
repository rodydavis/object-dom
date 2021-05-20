import type { NodeProps } from "../object-dom";
import { GlobalDom } from "../object-dom";

export class Custom extends GlobalDom<HTMLElement> {
  constructor(tag: string, props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement(tag), ...props });
  }
}
