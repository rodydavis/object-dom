import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines style information for a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_style.asp
 */
export class Style extends GlobalDom<HTMLStyleElement> {
  constructor(props: NodeProps<HTMLStyleElement> = {}) {
    super({ node: document.createElement("style"), ...props });
  }
}
