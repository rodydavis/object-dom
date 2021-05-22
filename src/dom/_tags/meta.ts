
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface MetaProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<meta>`
     * 
     * Defines metadata about an HTML document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_meta.asp
     */
    export class Meta extends GlobalDom<HTMLElement> {
      constructor(props: MetaProps = {}) {
        super({ node: document.createElement("meta"), ...props });
      }
    }    
    