import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a footer for a document or section.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_footer.asp
 */
export class Footer extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("footer"), ...props });
  }
}
