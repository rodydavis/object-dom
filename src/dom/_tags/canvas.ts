import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface CanvasProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<canvas height>`
* 
* Specifies the height of the canvas. Default value is 150
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **2.0**  |   **3.1**   | **9.0** |
* 
Example: `<canvas id="myCanvas" width="200" height="200" style="border:1px solid">`
* 
@see https://www.w3schools.com/TAGS/att_canvas_height.asp
*/
    height?: string;

    /**
* `<canvas width>`
* 
* Specifies the width of the canvas Default value is 300
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **2.0**  |   **3.1**   | **9.0** |
* 
Example: `<canvas id="myCanvas" width="200" height="200" style="border:1px solid">`
* 
@see https://www.w3schools.com/TAGS/att_canvas_width.asp
*/
    width?: string;
    [key: string]: PossibleAttr;
  };
}

/**
* `<canvas>`
* 
* Used to draw graphics, on the fly, via scripting (usually JavaScript)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **2.0**  |   **3.1**   | **9.0** |
* 
@see https://www.w3schools.com/TAGS/tag_canvas.asp
*/
export class Canvas extends GlobalDom<HTMLElement> {
  constructor(props: CanvasProps = {}) {
    super({ node: document.createElement("canvas"), ...props });
  }
}
