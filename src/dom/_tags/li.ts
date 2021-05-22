
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface LiProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<li>`
     * 
     * Defines a list item
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_li.asp
     */
    export class Li extends GlobalDom<HTMLElement> {
      constructor(props: LiProps = {}) {
        super({ node: document.createElement("li"), ...props });
      }
    }    
    