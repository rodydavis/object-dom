import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DlProps extends NodeProps<HTMLDListElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<dl>`
*
* Defines a description list
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_dl.asp
*/
export declare class Dl extends GlobalDom<HTMLDListElement> {
    constructor(props?: DlProps);
}
