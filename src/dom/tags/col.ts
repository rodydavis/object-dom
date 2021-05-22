import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Specifies column properties for
 * each column within a `<colgroup>` element.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_col.asp
 */
export class Col extends GlobalDom<HTMLTableColElement> {
  constructor(props: NodeProps<HTMLTableColElement> = {}) {
    super({ node: document.createElement("col"), ...props });
  }
}
