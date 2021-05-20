import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines important text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_strong.asp
 */
export class Strong extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("strong"), ...props });
  }
}
