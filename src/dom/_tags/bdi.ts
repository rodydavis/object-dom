
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface BdiProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<bdi>`
     * 
     * Isolates a part of text that might be formatted in a different direction 
from other text outside it
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **16.0**  | **10.0**  |   **Not supported**   | **79.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_bdi.asp
     */
    export class Bdi extends GlobalDom<HTMLElement> {
      constructor(props: BdiProps = {}) {
        super({ node: document.createElement("bdi"), ...props });
      }
    }    
    