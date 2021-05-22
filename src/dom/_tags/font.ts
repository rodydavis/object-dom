
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface FontProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<font>`
     * 
     * Not supported in HTML5. Use CSS instead.Defines font, color, and size for text
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_font.asp
     */
    export class Font extends GlobalDom<HTMLElement> {
      constructor(props: FontProps = {}) {
        super({ node: document.createElement("font"), ...props });
      }
    }    
    