
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface FieldsetProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<fieldset>`
     * 
     * Groups related elements in a form
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_fieldset.asp
     */
    export class Fieldset extends GlobalDom<HTMLElement> {
      constructor(props: FieldsetProps = {}) {
        super({ node: document.createElement("fieldset"), ...props });
      }
    }    
    