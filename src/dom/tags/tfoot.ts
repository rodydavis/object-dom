import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Groups the footer content in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_tfoot.asp
 */
export class TFoot extends GlobalDom<HTMLTableSectionElement> {
  constructor(props: NodeProps<HTMLTableSectionElement> = {}) {
    super({ node: document.createElement("tfoot"), ...props });
  }
}
