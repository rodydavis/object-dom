import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a row in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_tr.asp
 */
export class Tr extends GlobalDom<HTMLTableRowElement> {
  constructor(props: NodeProps<HTMLTableRowElement> = {}) {
    super({ node: document.createElement("tr"), ...props });
  }
}
