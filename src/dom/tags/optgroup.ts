import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a group of related options 
 * in a drop-down list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_optgroup.asp
 */
export class OptGroup extends GlobalDom<HTMLOptGroupElement> {
  constructor(props: NodeProps<HTMLOptGroupElement> = {}) {
    super({ node: document.createElement("optgroup"), ...props });
  }
}
