import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines bold text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_b.asp
 */
export class Bold extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("b"), ...props });
  }
}
