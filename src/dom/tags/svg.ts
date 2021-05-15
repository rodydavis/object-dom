import { GlobalDom, NodeAttr, NodeProps } from "../../object-dom";

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
export class Svg extends GlobalDom<HTMLElement> {
  constructor(props: SvgProps = {}) {
    super({ node: document.createElement("svg"), ...props });
    this.viewbox = new NodeAttr(this, "viewbox", props?.viewbox);
    this.preserveAspectRatio = new NodeAttr(
      this,
      "preserve-aspect-ratio",
      props?.preserveAspectRatio
    );
    this.weight = new NodeAttr(this, "weight", props?.weight);
    this.height = new NodeAttr(this, "height", props?.height);
    this.x = new NodeAttr(this, "x", props?.x);
    this.y = new NodeAttr(this, "y", props?.y);
  }
  viewbox: NodeAttr;
  preserveAspectRatio: NodeAttr;
  weight: NodeAttr;
  height: NodeAttr;
  x: NodeAttr;
  y: NodeAttr;
}