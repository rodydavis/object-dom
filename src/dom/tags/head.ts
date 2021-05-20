import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Contains metadata/information for 
 * the document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_head.asp
 */
export class Head extends GlobalDom<HTMLHeadElement> {
  constructor(props: NodeProps<HTMLHeadElement> = {}) {
    super({ node: document.createElement("head"), ...props });
  }
}
