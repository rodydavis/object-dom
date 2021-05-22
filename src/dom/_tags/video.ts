
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface VideoProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<video>`
     * 
     * Defines embedded video content
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **4.0**  | **3.5**  |   **3.1**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_video.asp
     */
    export class Video extends GlobalDom<HTMLElement> {
      constructor(props: VideoProps = {}) {
        super({ node: document.createElement("video"), ...props });
      }
    }    
    