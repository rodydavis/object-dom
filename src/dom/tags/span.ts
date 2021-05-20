import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a section in a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_span.asp
 */
export class Span extends GlobalDom<HTMLSpanElement> {
  constructor(props: NodeProps<HTMLSpanElement> = {}) {
    super({ node: document.createElement("span"), ...props });
  }
}
