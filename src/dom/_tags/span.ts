
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface SpanProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<span>`
     * 
     * Defines a section in a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_span.asp
     */
    export class Span extends GlobalDom<HTMLElement> {
      constructor(props: SpanProps = {}) {
        super({ node: document.createElement("span"), ...props });
      }
    }    
    