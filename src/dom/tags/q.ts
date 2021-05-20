import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a short quotation.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_q.asp
 */
export class Quote extends GlobalDom<HTMLQuoteElement> {
  constructor(props: NodeProps<HTMLQuoteElement> = {}) {
    super({ node: document.createElement("q"), ...props });
  }
}
