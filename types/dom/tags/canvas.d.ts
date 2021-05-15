import { GlobalDom, NodeProps } from "../../object-dom";
/**
 * Used to draw graphics, on the fly,
 * via scripting (usually JavaScript).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_canvas.asp
 */
export declare class Canvas extends GlobalDom<HTMLCanvasElement> {
    constructor(props?: NodeProps<HTMLCanvasElement>);
}
