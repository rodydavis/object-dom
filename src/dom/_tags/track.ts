
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface TrackProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<track>`
     * 
     * Defines text tracks for media elements (`<video>` and <audio>)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **23.0**  | **31.0**  |   **6.0**   | **10.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_track.asp
     */
    export class Track extends GlobalDom<HTMLElement> {
      constructor(props: TrackProps = {}) {
        super({ node: document.createElement("track"), ...props });
      }
    }    
    