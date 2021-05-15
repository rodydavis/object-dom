import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a thematic change in the content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hr.asp
 */
export class Hr extends GlobalDom<HTMLHRElement> {
  constructor(props: NodeProps<HTMLHRElement> = {}) {
    super({ node: document.createElement("hr"), ...props });
  }
}
