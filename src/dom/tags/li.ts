import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a list item.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_li.asp
 */
export class Li extends GlobalDom<HTMLLIElement> {
  constructor(props: NodeProps<HTMLLIElement> = {}) {
    super({ node: document.createElement("li"), ...props });
  }
}
