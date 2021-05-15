import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines marked/highlighted text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_mark.asp
 */
export class Mark extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("mark"), ...props });
  }
}
