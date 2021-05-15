import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_table.asp
 */
export class Table extends GlobalDom<HTMLTableElement> {
  constructor(props: NodeProps<HTMLTableElement> = {}) {
    super({ node: document.createElement("table"), ...props });
  }
}
