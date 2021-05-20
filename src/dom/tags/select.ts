import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a drop-down list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_select.asp
 */
export class Select extends GlobalDom<HTMLSelectElement> {
  constructor(props: NodeProps<HTMLSelectElement> = {}) {
    super({ node: document.createElement("select"), ...props });
  }
}
