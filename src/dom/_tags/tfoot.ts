
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface TfootProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<tfoot>`
     * 
     * Groups the footer content in a table
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_tfoot.asp
     */
    export class Tfoot extends GlobalDom<HTMLElement> {
      constructor(props: TfootProps = {}) {
        super({ node: document.createElement("tfoot"), ...props });
      }
    }    
    