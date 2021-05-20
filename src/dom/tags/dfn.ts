import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Specifies a term that is going 
 * to be defined within the content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_dfn.asp
 */
export class Dfn extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("dfn"), ...props });
  }
}
