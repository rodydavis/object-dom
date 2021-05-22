
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ColgroupProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<colgroup>`
     * 
     * Specifies a group of one or more columns in a table for formatting
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_colgroup.asp
     */
    export class Colgroup extends GlobalDom<HTMLElement> {
      constructor(props: ColgroupProps = {}) {
        super({ node: document.createElement("colgroup"), ...props });
      }
    }    
    