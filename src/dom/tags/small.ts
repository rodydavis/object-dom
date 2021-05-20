import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines smaller text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_small.asp
 */
export class Small extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("small"), ...props });
  }
}
