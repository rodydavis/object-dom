import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Overrides the current text direction.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_bdo.asp
 */
export class Bdo extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("bdo"), ...props });
  }
}
