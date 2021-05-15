import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a table caption.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_caption.asp
 */
export class Caption extends GlobalDom<HTMLTableCaptionElement> {
  constructor(props: NodeProps<HTMLTableCaptionElement> = {}) {
    super({ node: document.createElement("caption"), ...props });
  }
}
