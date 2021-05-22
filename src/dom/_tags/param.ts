
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ParamProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<param>`
     * 
     * Defines a parameter for an object
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_param.asp
     */
    export class Param extends GlobalDom<HTMLElement> {
      constructor(props: ParamProps = {}) {
        super({ node: document.createElement("param"), ...props });
      }
    }    
    