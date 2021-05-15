import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a cell in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_td.asp
 */
export class Td extends GlobalDom<HTMLTableDataCellElement> {
  constructor(props: NodeProps<HTMLTableDataCellElement> = {}) {
    super({ node: document.createElement("td"), ...props });
  }
}