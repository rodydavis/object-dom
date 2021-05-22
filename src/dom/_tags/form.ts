
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface FormProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<form>`
     * 
     * Defines an HTML form for user input
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_form.asp
     */
    export class Form extends GlobalDom<HTMLElement> {
      constructor(props: FormProps = {}) {
        super({ node: document.createElement("form"), ...props });
      }
    }    
    