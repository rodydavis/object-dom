import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DtProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<dt>`
*
* Defines a term/name in a description list
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_dt.asp
*/
export declare class Dt extends GlobalDom<HTMLElement> {
    constructor(props?: DtProps);
}
