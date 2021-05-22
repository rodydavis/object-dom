import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface InsProps extends NodeProps<HTMLModElement> {
    attributes?: {
        /**
    * `<ins cite>`
    *
    * Specifies a URL to a document that explains the reason why the text was inserted/changed
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <p>This is a text.  <ins cite="why_inserted.htm">This is an inserted text.<\/ins><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_ins_cite.asp
    */
        cite?: string;
        /**
    * `<ins datetime>`
    *
    * Specifies the date and time when the text was inserted/changed
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <p>This is a text.  <ins datetime="2015-09-15T22:55:03Z">This is an inserted text.<\/ins><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_ins_datetime.asp
    */
        datetime?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<ins>`
*
* Defines a text that has been inserted into a document
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_ins.asp
*/
export declare class Ins extends GlobalDom<HTMLModElement> {
    constructor(props?: InsProps);
}
