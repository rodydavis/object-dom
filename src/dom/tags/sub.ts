import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines subscripted text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_sub.asp
 */
export class Sub extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("sub"), ...props });
  }
}