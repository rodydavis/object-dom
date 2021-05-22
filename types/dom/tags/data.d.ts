import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DataProps extends NodeProps<HTMLDataElement> {
    attributes?: {
        /**
    * `<data value>`
    *
    * Specifies the machine-readable translation of the content of the element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    @see https://www.w3schools.com/TAGS/att_data_value.asp
    */
        value?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<data>`
*
* Adds a machine-readable  translation of a given content
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **62.0**  | **22.0**  |   **Not supported**   | **13.0** |
*
@see https://www.w3schools.com/TAGS/tag_data.asp
*/
export declare class Data extends GlobalDom<HTMLDataElement> {
    constructor(props?: DataProps);
}
