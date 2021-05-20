import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines preformatted text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_pre.asp
 */
export class Pre extends GlobalDom<HTMLPreElement> {
  constructor(props: NodeProps<HTMLPreElement> = {}) {
    super({ node: document.createElement("pre"), ...props });
  }
}
