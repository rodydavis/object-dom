import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines preformatted text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_pre.asp
 */
export declare class Pre extends GlobalDom<HTMLPreElement> {
    constructor(props?: NodeProps<HTMLPreElement>);
}
