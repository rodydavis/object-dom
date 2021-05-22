import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface LiProps extends NodeProps<HTMLLIElement> {
    attributes?: {
        /**
    * `<li value>`
    *
    * Only for <ol> lists. Specifies the start value of a list item. The
        following list items will increment from that number
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <ol>               <li value="100">Coffee<\/li>               <li>Tea<\/li>               <li>Milk<\/li>               <li>Water<\/li>               <li>Juice<\/li>               <li>Beer<\/li>       <\/ol>
    *
    @see https://www.w3schools.com/TAGS/att_li_value.asp
    */
        value?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<li>`
*
* Defines a list item
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_li.asp
*/
export declare class Li extends GlobalDom<HTMLLIElement> {
    constructor(props?: LiProps);
}
