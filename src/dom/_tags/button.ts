
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ButtonProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<button>`
     * 
     * Defines a clickable button
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_button.asp
     */
    export class Button extends GlobalDom<HTMLElement> {
      constructor(props: ButtonProps = {}) {
        super({ node: document.createElement("button"), ...props });
      }
    }    
    