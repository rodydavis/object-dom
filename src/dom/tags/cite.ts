import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines the title of a work.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_cite.asp
 */
export class Cite extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("cite"), ...props });
  }
}
