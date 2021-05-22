
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ImgProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<img>`
     * 
     * Defines an image
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_img.asp
     */
    export class Img extends GlobalDom<HTMLElement> {
      constructor(props: ImgProps = {}) {
        super({ node: document.createElement("img"), ...props });
      }
    }    
    