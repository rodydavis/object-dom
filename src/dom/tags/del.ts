import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines text that has been deleted
 * from a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_del.asp
 */
export class Del extends GlobalDom<HTMLModElement> {
  constructor(props: NodeProps<HTMLModElement> = {}) {
    super({ node: document.createElement("del"), ...props });
  }
}
