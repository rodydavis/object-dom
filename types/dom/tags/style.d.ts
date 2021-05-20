import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines style information for a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_style.asp
 */
export declare class Style extends GlobalDom<HTMLStyleElement> {
    constructor(props?: NodeProps<HTMLStyleElement>);
}
