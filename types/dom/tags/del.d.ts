import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DelProps extends NodeProps<HTMLModElement> {
    attributes?: {
        /**
    * `<del cite>`
    *
    * Specifies a URL to a document that explains the reason why the text was deleted/changed
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <p><del cite="del_demo_cite.htm">This text has been deleted<\/del><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_del_cite.asp
    */
        cite?: string;
        /**
    * `<del datetime>`
    *
    * Specifies the date and time of when the text was deleted/changed
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <p>  <del datetime="2015-11-15T22:55:03Z">This text has been deleted<\/del>  <\/p>
    *
    @see https://www.w3schools.com/TAGS/att_del_datetime.asp
    */
        datetime?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<del>`
*
* Defines text that has been deleted from a document
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_del.asp
*/
export declare class Del extends GlobalDom<HTMLModElement> {
    constructor(props?: DelProps);
}
