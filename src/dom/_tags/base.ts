
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface BaseProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<base>`
     * 
     * Specifies the base URL/target for all relative URLs in a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_base.asp
     */
    export class Base extends GlobalDom<HTMLElement> {
      constructor(props: BaseProps = {}) {
        super({ node: document.createElement("base"), ...props });
      }
    }    
    