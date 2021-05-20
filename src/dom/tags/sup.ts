import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines superscripted text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_sup.asp
 */
export class Sup extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("sup"), ...props });
  }
}
