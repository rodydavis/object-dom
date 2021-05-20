import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Adds a machine-readable translation
 * of a given content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_data.asp
 */
export declare class Data extends GlobalDom<HTMLDataElement> {
    constructor(props?: NodeProps<HTMLDataElement>);
}
