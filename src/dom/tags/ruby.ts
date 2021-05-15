import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a ruby annotation (for East Asian typography).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_ruby.asp
 */
export class Ruby extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("ruby"), ...props });
  }
}
