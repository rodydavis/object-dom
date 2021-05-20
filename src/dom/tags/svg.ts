import { GlobalDom, NodeProps } from "../../object-dom";

interface SvgProps extends NodeProps<HTMLElement> {
  preserveAspectRatio?:
    | "none"
    | "xMinYMin"
    | "xMidYMin"
    | "xMaxYMin"
    | "xMinYMid"
    | "xMidYMid"
    | "xMaxYMid"
    | "xMinYMax"
    | "xMidYMax"
    | "xMaxYMax";
  viewbox?: string;
  width?: string;
  height?: string;
  x?: string;
  y?: string;
}

/**
 * Defines a container for SVG graphics.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_svg.asp
 */
export class Svg extends GlobalDom<HTMLElement> {
  constructor(props: SvgProps = {}) {
    super({ node: document.createElement("svg"), ...props });
    this.addAttr("viewbox", props?.viewbox);
    this.addAttr("preserve-aspect-ratio", props?.preserveAspectRatio);
    this.addAttr("width", props?.width);
    this.addAttr("height", props?.height);
    this.addAttr("x", props?.x);
    this.addAttr("y", props?.y);
  }
}
