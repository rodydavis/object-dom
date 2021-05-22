
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ColProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<col>`
     * 
     * Specifies column properties for each column within a `<colgroup>` element
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_col.asp
     */
    export class Col extends GlobalDom<HTMLElement> {
      constructor(props: ColProps = {}) {
        super({ node: document.createElement("col"), ...props });
      }
    }    
    