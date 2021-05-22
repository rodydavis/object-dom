
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface DfnProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<dfn>`
     * 
     * Specifies a term that is going to be defined within the content
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_dfn.asp
     */
    export class Dfn extends GlobalDom<HTMLElement> {
      constructor(props: DfnProps = {}) {
        super({ node: document.createElement("dfn"), ...props });
      }
    }    
    