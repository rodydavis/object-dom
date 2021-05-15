import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an alternate content for users
 * that do not support client-side scripts.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_noscript.asp
 */
export class NoScript extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("noscript"), ...props });
  }
}
