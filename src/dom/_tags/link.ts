
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface LinkProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<link>`
     * 
     * Defines the relationship between a document and an external resource (most 
used to link to style sheets)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_link.asp
     */
    export class Link extends GlobalDom<HTMLElement> {
      constructor(props: LinkProps = {}) {
        super({ node: document.createElement("link"), ...props });
      }
    }    
    