import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an ordered list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_ol.asp
 */
export class Ol extends GlobalDom<HTMLOListElement> {
  constructor(props: NodeProps<HTMLOListElement> = {}) {
    super({ node: document.createElement("ol"), ...props });
  }
}
