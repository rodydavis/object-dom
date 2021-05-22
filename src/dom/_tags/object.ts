
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ObjectProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<object>`
     * 
     * Defines a container for an external application
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_object.asp
     */
    export class Object extends GlobalDom<HTMLElement> {
      constructor(props: ObjectProps = {}) {
        super({ node: document.createElement("object"), ...props });
      }
    }    
    