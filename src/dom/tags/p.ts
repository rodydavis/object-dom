import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a paragraph.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_p.asp
 */
export class P extends GlobalDom<HTMLParagraphElement> {
  constructor(props: NodeProps<HTMLParagraphElement> = {}) {
    super({ node: document.createElement("p"), ...props });
  }
}
