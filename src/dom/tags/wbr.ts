import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a possible line-break.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_wbr.asp
 */
export class Wbr extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("wbr"), ...props });
  }
}
