
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface FramesetProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<frameset>`
     * 
     * Not supported in HTML5.Defines a set of frames
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_frameset.asp
     */
    export class Frameset extends GlobalDom<HTMLElement> {
      constructor(props: FramesetProps = {}) {
        super({ node: document.createElement("frameset"), ...props });
      }
    }    
    