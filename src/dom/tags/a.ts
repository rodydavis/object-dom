import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a hyperlink.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_a.asp
 */
export class Anchor extends GlobalDom<HTMLAnchorElement> {
  constructor(props: NodeProps<HTMLAnchorElement> = {}) {
    super({ node: document.createElement("a"), ...props });
  }
}
