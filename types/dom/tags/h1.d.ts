import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface H1Props extends NodeProps<HTMLHeadingElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<h1>`
*
* Defines HTML headings
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_h1.asp
*/
export declare class H1 extends GlobalDom<HTMLHeadingElement> {
    constructor(props?: H1Props);
}
