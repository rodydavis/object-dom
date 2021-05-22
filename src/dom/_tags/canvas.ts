import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface CanvasProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the height of the canvas. Default value is 150
     */
    height?: string;

    /**
     * Specifies the width of the canvas Default value is 300
     */
    width?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<canvas>`
 *
 * Used to draw graphics, on the fly, via scripting (usually JavaScript)
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **4.0**  | **2.0**  |   **3.1**   | **9.0** |
 *
 * @see https://www.w3schools.com/TAGS/tag_canvas.asp
 */
export class Canvas extends GlobalDom<HTMLElement> {
  constructor(props: CanvasProps = {}) {
    super({ node: document.createElement("canvas"), ...props });
  }
}
