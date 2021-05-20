import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a text that has been
 * inserted into a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_ins.asp
 */
export declare class Ins extends GlobalDom<HTMLModElement> {
    constructor(props?: NodeProps<HTMLModElement>);
}
