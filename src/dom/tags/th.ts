import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface HeaderNodeProps extends NodeProps<HTMLTableHeaderCellElement> {
  colspan?: number;
  rowspan?: number;
}

/**
 * Defines a header cell in a table.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_th.asp
 */
export class Th extends GlobalDom<HTMLTableHeaderCellElement> {
  constructor(props: HeaderNodeProps = {}) {
    super({ node: document.createElement("th"), ...props });
    if (props?.colspan) this.node.colSpan = props.colspan;
    if (props?.rowspan) this.node.rowSpan = props.rowspan;
    if (props?.text) this.node.innerText = props.text;
  }
}
