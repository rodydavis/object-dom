import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface EmbedProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies the height of the embedded content
         */
        height?: string;
        /**
         * Specifies the address of the external file to embed
         */
        src?: string;
        /**
         * Specifies the media type of the embedded content
         */
        type?: string;
        /**
         * Specifies the width of the embedded content
         */
        width?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<embed>`
 *
 * Defines a container for an external application
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_embed.asp
 */
export declare class Embed extends GlobalDom<HTMLElement> {
    constructor(props?: EmbedProps);
}
