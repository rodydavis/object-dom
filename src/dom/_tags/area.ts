
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface AreaProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<area>`
     * 
     * Defines an area inside an image map
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_area.asp
     */
    export class Area extends GlobalDom<HTMLElement> {
      constructor(props: AreaProps = {}) {
        super({ node: document.createElement("area"), ...props });
      }
    }    
    