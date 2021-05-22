import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface PProps extends NodeProps<HTMLParagraphElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<p>`
*
* Defines a paragraph
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_p.asp
*/
export declare class P extends GlobalDom<HTMLParagraphElement> {
    constructor(props?: PProps);
}
