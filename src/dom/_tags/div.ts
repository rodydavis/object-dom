
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface DivProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<div>`
     * 
     * Defines a section in a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_div.asp
     */
    export class Div extends GlobalDom<HTMLElement> {
      constructor(props: DivProps = {}) {
        super({ node: document.createElement("div"), ...props });
      }
    }    
    