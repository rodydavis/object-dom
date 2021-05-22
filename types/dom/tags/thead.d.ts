import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface TheadProps extends NodeProps<HTMLTableSectionElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<thead>`
*
* Groups the header content in a table
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_thead.asp
*/
export declare class Thead extends GlobalDom<HTMLTableSectionElement> {
    constructor(props?: TheadProps);
}
