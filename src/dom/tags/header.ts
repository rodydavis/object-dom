import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a header for a document or section.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_header.asp
 */
export class Header extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("header"), ...props });
  }
}
