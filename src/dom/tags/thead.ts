import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Groups the header content in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_thead.asp
 */
export class THead extends GlobalDom<HTMLTableSectionElement> {
  constructor(props: NodeProps<HTMLTableSectionElement> = {}) {
    super({ node: document.createElement("thead"), ...props });
  }
}
