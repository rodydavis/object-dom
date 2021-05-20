import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Overrides the current text direction.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_bdo.asp
 */
export declare class Bdo extends GlobalDom<HTMLElement> {
    constructor(props?: NodeProps<HTMLElement>);
}
