import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a part of text in an alternate 
 * voice or mood.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_i.asp
 */
export class I extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("i"), ...props });
  }
}
