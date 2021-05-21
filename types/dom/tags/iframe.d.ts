import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines an inline frame.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_iframe.asp
 */
export declare class Iframe extends GlobalDom<HTMLIFrameElement> {
    constructor(props?: NodeProps<HTMLIFrameElement>);
    replace(doc: Document): void;
}
