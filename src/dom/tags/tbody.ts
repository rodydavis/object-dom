import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Groups the body content in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_tbody.asp
 */
export class TBody extends GlobalDom<HTMLTableSectionElement> {
  constructor(props: NodeProps<HTMLTableSectionElement> = {}) {
    super({ node: document.createElement("tbody"), ...props });
  }
}
