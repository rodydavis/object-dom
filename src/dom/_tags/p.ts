
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface PProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<p>`
     * 
     * Defines a paragraph
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_p.asp
     */
    export class P extends GlobalDom<HTMLElement> {
      constructor(props: PProps = {}) {
        super({ node: document.createElement("p"), ...props });
      }
    }    
    