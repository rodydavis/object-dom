import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a visible heading for a
 * `<details>` element
 *
 * Reference: https://www.w3schools.com/TAGS/tag_summary.asp
 */
export class Summary extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("summary"), ...props });
  }
}
