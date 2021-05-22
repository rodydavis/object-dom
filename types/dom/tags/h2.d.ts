import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface H2Props extends NodeProps<HTMLHeadingElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<h2>`
*
* Defines HTML headings
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_h2.asp
*/
export declare class H2 extends GlobalDom<HTMLHeadingElement> {
    constructor(props?: H2Props);
}
