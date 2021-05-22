
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface CiteProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<cite>`
     * 
     * Defines the title of a work
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_cite.asp
     */
    export class Cite extends GlobalDom<HTMLElement> {
      constructor(props: CiteProps = {}) {
        super({ node: document.createElement("cite"), ...props });
      }
    }    
    