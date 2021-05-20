import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines multiple media resources for 
 * media elements (`<video>` and `<audio>`).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_source.asp
 */
export class Source extends GlobalDom<HTMLSourceElement> {
  constructor(props: NodeProps<HTMLSourceElement> = {}) {
    super({ node: document.createElement("source"), ...props });
  }
}
