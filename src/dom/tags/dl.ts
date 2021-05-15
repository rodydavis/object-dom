import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a description list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_dl.asp
 */
export class Dl extends GlobalDom<HTMLDListElement> {
  constructor(props: NodeProps<HTMLDListElement> = {}) {
    super({ node: document.createElement("dl"), ...props });
  }
}
