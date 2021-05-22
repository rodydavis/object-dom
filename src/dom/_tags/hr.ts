
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface HrProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<hr>`
     * 
     * Defines a thematic change in the content
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_hr.asp
     */
    export class Hr extends GlobalDom<HTMLElement> {
      constructor(props: HrProps = {}) {
        super({ node: document.createElement("hr"), ...props });
      }
    }    
    