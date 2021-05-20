import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines the document's body.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_body.asp
 */
export declare class Body extends GlobalDom<HTMLBodyElement> {
    constructor(props?: NodeProps<HTMLBodyElement>);
}
