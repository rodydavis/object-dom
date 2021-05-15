import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a piece of computer code.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_code.asp
 */
export class Code extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("code"), ...props });
  }
}
