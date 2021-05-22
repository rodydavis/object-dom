
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface AProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<a>`
     * 
     * Defines a hyperlink
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_a.asp
     */
    export class A extends GlobalDom<HTMLElement> {
      constructor(props: AProps = {}) {
        super({ node: document.createElement("a"), ...props });
      }
    }    
    