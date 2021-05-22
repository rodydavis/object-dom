
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface DdProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<dd>`
     * 
     * Defines a description/value of a term in a description list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_dd.asp
     */
    export class Dd extends GlobalDom<HTMLElement> {
      constructor(props: DdProps = {}) {
        super({ node: document.createElement("dd"), ...props });
      }
    }    
    