import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface H6Props extends NodeProps<HTMLHeadingElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<h6>`
*
* Defines HTML headings
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_h6.asp
*/
export declare class H6 extends GlobalDom<HTMLHeadingElement> {
    constructor(props?: H6Props);
}
