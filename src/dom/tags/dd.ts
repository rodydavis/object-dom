import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a description/value of
 * a term in a description list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_dd.asp
 */
export class Dd extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("dd"), ...props });
  }
}
