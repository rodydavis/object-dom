import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines the result of a calculation.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_output.asp
 */
export class Output extends GlobalDom<HTMLOutputElement> {
  constructor(props: NodeProps<HTMLOutputElement> = {}) {
    super({ node: document.createElement("output"), ...props });
  }
}