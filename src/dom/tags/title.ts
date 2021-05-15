import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a title for the document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_title.asp
 */
export class Title extends GlobalDom<HTMLTitleElement> {
  constructor(props: NodeProps<HTMLTitleElement> = {}) {
    super({ node: document.createElement("title"), ...props });
  }
}
