
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface SourceProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<source>`
     * 
     * Defines multiple media resources for media elements (`<video>` and <audio>)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **4.0**  | **3.5**  |   **4.0**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_source.asp
     */
    export class Source extends GlobalDom<HTMLElement> {
      constructor(props: SourceProps = {}) {
        super({ node: document.createElement("source"), ...props });
      }
    }    
    