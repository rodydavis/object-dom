import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface H4Props extends NodeProps<HTMLHeadingElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<h4>`
*
* Defines HTML headings
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_h4.asp
*/
export declare class H4 extends GlobalDom<HTMLHeadingElement> {
    constructor(props?: H4Props);
}
