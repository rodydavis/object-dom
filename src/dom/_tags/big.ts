
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface BigProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<big>`
     * 
     * Not supported in HTML5. Use CSS instead.Defines big text
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_big.asp
     */
    export class Big extends GlobalDom<HTMLElement> {
      constructor(props: BigProps = {}) {
        super({ node: document.createElement("big"), ...props });
      }
    }    
    