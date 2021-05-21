import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a paragraph.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_p.asp
 */
export declare class P extends GlobalDom<HTMLParagraphElement> {
    constructor(props?: NodeProps<HTMLParagraphElement>);
}