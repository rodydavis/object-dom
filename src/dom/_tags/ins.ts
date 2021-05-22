
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface InsProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<ins>`
     * 
     * Defines a text that has been inserted into a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_ins.asp
     */
    export class Ins extends GlobalDom<HTMLElement> {
      constructor(props: InsProps = {}) {
        super({ node: document.createElement("ins"), ...props });
      }
    }    
    