import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a variable.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_var.asp
 */
export declare class Var extends GlobalDom<HTMLElement> {
    constructor(props?: NodeProps<HTMLElement>);
}
