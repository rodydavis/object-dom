import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Specifies a group of one or more 
 * columns in a table for formatting.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_colgroup.asp
 */
export class ColGroup extends GlobalDom<HTMLTableColElement> {
  constructor(props: NodeProps<HTMLTableColElement> = {}) {
    super({ node: document.createElement("colgroup"), ...props });
  }
}
