
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface H1 to <h6>Props extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<h1 to <h6>>`
     * 
     * Defines HTML headings
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_h1 to <h6>.asp
     */
    export class H1 to <h6> extends GlobalDom<HTMLElement> {
      constructor(props: H1 to <h6>Props = {}) {
        super({ node: document.createElement("h1 to <h6>"), ...props });
      }
    }    
    