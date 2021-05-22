import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface SvgProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<svg>`
 *
 * Defines a container for SVG graphics
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **4.0**  | **3.0**  |   **3.2**   | **9.0** |
 *
 * @see https://www.w3schools.com/TAGS/tag_svg.asp
 */
export declare class Svg extends GlobalDom<HTMLElement> {
    constructor(props?: SvgProps);
}
