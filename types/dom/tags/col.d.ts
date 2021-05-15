import { GlobalDom, NodeProps } from "../../object-dom";
/**
 * Specifies column properties for
 * each column within a `<colgroup>` element.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_col.asp
 */
export declare class Col extends GlobalDom<HTMLTableColElement> {
    constructor(props?: NodeProps<HTMLTableColElement>);
}
