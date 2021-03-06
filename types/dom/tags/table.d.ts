import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface TableProps extends NodeProps<HTMLTableElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<table>`
*
* Defines a table
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_table.asp
*/
export declare class Table extends GlobalDom<HTMLTableElement> {
    constructor(props?: TableProps);
}
