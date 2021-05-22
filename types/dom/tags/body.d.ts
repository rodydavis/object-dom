import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface BodyProps extends NodeProps<HTMLBodyElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<body>`
*
* Defines the document's body
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_body.asp
*/
export declare class Body extends GlobalDom<HTMLBodyElement> {
    constructor(props?: BodyProps);
}
