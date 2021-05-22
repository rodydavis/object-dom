import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface TrackProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate
         */
        default?: string;
        /**
         * Specifies the kind of text track
         */
        kind?: string;
        /**
         * Specifies the title of the text track
         */
        label?: string;
        /**
         * Required. Specifies the URL of the track file
         */
        src?: string;
        /**
         * Specifies the language of the track text data (required if kind="subtitles")
         */
        srclang?: string;
        [key: string]: PossibleAttr;
    };
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
export declare class Track extends GlobalDom<HTMLElement> {
    constructor(props?: TrackProps);
}
