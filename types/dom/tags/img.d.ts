import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines an image.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_img.asp
 */
export declare class Img extends GlobalDom<HTMLImageElement> {
    constructor(props?: NodeProps<HTMLImageElement>);
}
