import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface EmbedProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
    * `<embed height>`
    *
    * Specifies the height of the embedded content
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<embed src="pic_trulli.jpg" width="200" height="200">`
    *
    @see https://www.w3schools.com/TAGS/att_embed_height.asp
    */
        height?: string;
        /**
    * `<embed src>`
    *
    * Specifies the address of the external file to embed
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<embed src="pic_trulli.jpg">`
    *
    @see https://www.w3schools.com/TAGS/att_embed_src.asp
    */
        src?: string;
        /**
    * `<embed type>`
    *
    * Specifies the media type of the embedded content
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<embed type="image/jpg" src="pic_trulli.jpg">`
    *
    @see https://www.w3schools.com/TAGS/att_embed_type.asp
    */
        type?: string;
        /**
    * `<embed width>`
    *
    * Specifies the width of the embedded content
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<embed src="pic_trulli.jpg" width="200" height="200">`
    *
    @see https://www.w3schools.com/TAGS/att_embed_width.asp
    */
        width?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<embed>`
*
* Defines a container for an external application
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_embed.asp
*/
export declare class Embed extends GlobalDom<HTMLElement> {
    constructor(props?: EmbedProps);
}
