import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines the document's body.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_body.asp
 */
export class Body extends GlobalDom<HTMLBodyElement> {
  constructor(props: NodeProps<HTMLBodyElement> = {}) {
    super({ node: document.createElement("body"), ...props });
  }
}
