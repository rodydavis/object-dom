
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface OptionProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<option>`
     * 
     * Defines an option in a drop-down list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_option.asp
     */
    export class Option extends GlobalDom<HTMLElement> {
      constructor(props: OptionProps = {}) {
        super({ node: document.createElement("option"), ...props });
      }
    }    
    