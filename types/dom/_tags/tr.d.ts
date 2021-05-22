import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface TrProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<tr>`
*
* Defines a row in a table
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_tr.asp
*/
export declare class Tr extends GlobalDom<HTMLElement> {
    constructor(props?: TrProps);
}
