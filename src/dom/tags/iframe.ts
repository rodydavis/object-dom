import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines an inline frame.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_iframe.asp
 */
export class Iframe extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("iframe"), ...props });
  }
}
