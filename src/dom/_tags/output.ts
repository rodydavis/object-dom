
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface OutputProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<output>`
     * 
     * Defines the result of a calculation
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **10.0**  | **4.0**  |   **5.1**   | **13.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_output.asp
     */
    export class Output extends GlobalDom<HTMLElement> {
      constructor(props: OutputProps = {}) {
        super({ node: document.createElement("output"), ...props });
      }
    }    
    