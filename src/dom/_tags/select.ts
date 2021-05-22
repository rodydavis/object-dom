
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface SelectProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<select>`
     * 
     * Defines a drop-down list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_select.asp
     */
    export class Select extends GlobalDom<HTMLElement> {
      constructor(props: SelectProps = {}) {
        super({ node: document.createElement("select"), ...props });
      }
    }    
    