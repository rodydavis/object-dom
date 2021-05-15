import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a section that is 
 * quoted from another source.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_blockquote.asp
 */
export class BlockQuote extends GlobalDom<HTMLQuoteElement> {
  constructor(props: NodeProps<HTMLQuoteElement> = {}) {
    super({ node: document.createElement("blockquote"), ...props });
  }
}
