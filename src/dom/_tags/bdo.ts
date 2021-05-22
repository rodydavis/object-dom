
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface BdoProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<bdo>`
     * 
     * Overrides the current text direction
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_bdo.asp
     */
    export class Bdo extends GlobalDom<HTMLElement> {
      constructor(props: BdoProps = {}) {
        super({ node: document.createElement("bdo"), ...props });
      }
    }    
    