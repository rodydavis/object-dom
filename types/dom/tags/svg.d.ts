import { GlobalDom, NodeAttr, NodeProps } from "../../object-dom";
interface SvgProps extends NodeProps<HTMLElement> {
    preserveAspectRatio?: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax";
    viewbox?: string;
    weight?: string;
    height?: string;
    x?: string;
    y?: string;
}
/**
 * Defines a container for SVG graphics.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_svg.asp
 */
export declare class Svg extends GlobalDom<HTMLElement> {
    constructor(props?: SvgProps);
    viewbox: NodeAttr;
    preserveAspectRatio: NodeAttr;
    weight: NodeAttr;
    height: NodeAttr;
    x: NodeAttr;
    y: NodeAttr;
}
export {};
