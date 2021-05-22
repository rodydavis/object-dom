
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface CanvasProps extends NodeProps<HTMLElement> {

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
    