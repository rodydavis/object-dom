import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines navigation links.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_nav.asp
 */
export class Nav extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("nav"), ...props });
  }
}
