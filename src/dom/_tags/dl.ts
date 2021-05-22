
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface DlProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<dl>`
     * 
     * Defines a description list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_dl.asp
     */
    export class Dl extends GlobalDom<HTMLElement> {
      constructor(props: DlProps = {}) {
        super({ node: document.createElement("dl"), ...props });
      }
    }    
    