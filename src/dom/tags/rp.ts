import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines what to show in browsers 
 * that do not support ruby annotations.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_rp.asp
 */
export class Rp extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("rp"), ...props });
  }
}