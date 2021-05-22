
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface OlProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<ol>`
     * 
     * Defines an ordered list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_ol.asp
     */
    export class Ol extends GlobalDom<HTMLElement> {
      constructor(props: OlProps = {}) {
        super({ node: document.createElement("ol"), ...props });
      }
    }    
    