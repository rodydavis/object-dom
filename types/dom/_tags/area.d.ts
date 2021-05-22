import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface AreaProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies an alternate text for the area. Required if the href attribute is present
         */
        alt?: string;
        /**
         * Specifies the coordinates of the area
         */
        coords?: string;
        /**
         * Specifies that the target will be downloaded when a user clicks on the hyperlink
         */
        download?: string;
        /**
         * Specifies the hyperlink target for the area
         */
        href?: string;
        /**
         * Specifies the language of the target URL
         */
        hreflang?: string;
        /**
         * Specifies what media/device the target URL is optimized for
         */
        media?: string;
        /**
         * Specifies which referrer information to send with the link
         */
        referrerpolicy?: string;
        /**
         * Specifies the relationship between the current document and the target URL
         */
        rel?: string;
        /**
         * Specifies the shape of the area
         */
        shape?: string;
        /**
         * Specifies where to open the target URL
         */
        target?: string;
        /**
         * Specifies the media type of the target URL
         */
        type?: string;
        [key: string]: PossibleAttr;
    };
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
export declare class Area extends GlobalDom<HTMLElement> {
    constructor(props?: AreaProps);
}
