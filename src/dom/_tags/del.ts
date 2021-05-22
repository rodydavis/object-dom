
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface DelProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<del>`
     * 
     * Defines text that has been deleted from a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_del.asp
     */
    export class Del extends GlobalDom<HTMLElement> {
      constructor(props: DelProps = {}) {
        super({ node: document.createElement("del"), ...props });
      }
    }    
    