
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface TdProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<td>`
     * 
     * Defines a cell in a table
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_td.asp
     */
    export class Td extends GlobalDom<HTMLElement> {
      constructor(props: TdProps = {}) {
        super({ node: document.createElement("td"), ...props });
      }
    }    
    