import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Isolates a part of text that might be
 * formatted in a different direction from other
 * text outside it.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_bdi.asp
 */
export class Bdi extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("bdi"), ...props });
  }
}
