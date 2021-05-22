
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface MapProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<map>`
     * 
     * Defines an image map
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_map.asp
     */
    export class Map extends GlobalDom<HTMLElement> {
      constructor(props: MapProps = {}) {
        super({ node: document.createElement("map"), ...props });
      }
    }    
    