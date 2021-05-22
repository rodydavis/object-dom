
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ThProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<th>`
     * 
     * Defines a header cell in a table
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_th.asp
     */
    export class Th extends GlobalDom<HTMLElement> {
      constructor(props: ThProps = {}) {
        super({ node: document.createElement("th"), ...props });
      }
    }    
    