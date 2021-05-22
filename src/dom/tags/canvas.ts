import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Used to draw graphics, on the fly,
 * via scripting (usually JavaScript).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_canvas.asp
 */
export class Canvas extends GlobalDom<HTMLCanvasElement> {
  constructor(props: NodeProps<HTMLCanvasElement> = {}) {
    super({ node: document.createElement("canvas"), ...props });
  }
}
