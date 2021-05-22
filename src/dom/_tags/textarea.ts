
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface TextareaProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<textarea>`
     * 
     * Defines a multiline input control (text area)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_textarea.asp
     */
    export class Textarea extends GlobalDom<HTMLElement> {
      constructor(props: TextareaProps = {}) {
        super({ node: document.createElement("textarea"), ...props });
      }
    }    
    