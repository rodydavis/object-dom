import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a variable.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_var.asp
 */
export class Var extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("var"), ...props });
  }
}
