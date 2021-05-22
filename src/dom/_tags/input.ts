
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface InputProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<input>`
     * 
     * Defines an input control
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_input.asp
     */
    export class Input extends GlobalDom<HTMLElement> {
      constructor(props: InputProps = {}) {
        super({ node: document.createElement("input"), ...props });
      }
    }    
    