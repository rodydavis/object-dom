import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an unordered list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_ul.asp
 */
export class Ul extends GlobalDom<HTMLUListElement> {
  constructor(props: NodeProps<HTMLUListElement> = {}) {
    super({ node: document.createElement("ul"), ...props });
  }
}
