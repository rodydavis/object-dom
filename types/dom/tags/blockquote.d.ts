import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a section that is
 * quoted from another source.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_blockquote.asp
 */
export declare class BlockQuote extends GlobalDom<HTMLQuoteElement> {
    constructor(props?: NodeProps<HTMLQuoteElement>);
}
