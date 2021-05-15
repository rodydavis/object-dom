import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines additional details that 
 * the user can view or hide.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_details.asp
 */
export class Details extends GlobalDom<HTMLDetailsElement> {
  constructor(props: NodeProps<HTMLDetailsElement> = {}) {
    super({ node: document.createElement("details"), ...props });
  }
}
