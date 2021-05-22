
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface HtmlProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<html>`
     * 
     * Defines the root of an HTML document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_html.asp
     */
    export class Html extends GlobalDom<HTMLElement> {
      constructor(props: HtmlProps = {}) {
        super({ node: document.createElement("html"), ...props });
      }
    }    
    