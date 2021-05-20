import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a section in a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_section.asp
 */
export class Section extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("section"), ...props });
  }
}
