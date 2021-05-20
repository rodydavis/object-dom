import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines emphasized text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_em.asp
 */
export class Em extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("em"), ...props });
  }
}
