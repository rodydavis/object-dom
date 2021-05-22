import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface SummaryProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<summary>`
*
* Defines a visible heading for a `<details>` element
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **12.0**  | **49.0**  |   **6.0**   | **79.0** |
*
@see https://www.w3schools.com/TAGS/tag_summary.asp
*/
export declare class Summary extends GlobalDom<HTMLElement> {
    constructor(props?: SummaryProps);
}
