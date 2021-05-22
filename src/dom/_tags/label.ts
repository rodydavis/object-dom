
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface LabelProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<label>`
     * 
     * Defines a label for an `<input>` element
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_label.asp
     */
    export class Label extends GlobalDom<HTMLElement> {
      constructor(props: LabelProps = {}) {
        super({ node: document.createElement("label"), ...props });
      }
    }    
    