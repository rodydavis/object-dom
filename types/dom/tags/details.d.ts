import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines additional details that
 * the user can view or hide.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_details.asp
 */
export declare class Details extends GlobalDom<HTMLDetailsElement> {
    constructor(props?: NodeProps<HTMLDetailsElement>);
}