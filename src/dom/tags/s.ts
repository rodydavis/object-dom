import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines text that is no longer correct.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_s.asp
 */
export class S extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("s"), ...props });
  }
}
