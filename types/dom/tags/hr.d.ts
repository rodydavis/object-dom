import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface HrProps extends NodeProps<HTMLHRElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<hr>`
*
* Defines a thematic change in the content
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_hr.asp
*/
export declare class Hr extends GlobalDom<HTMLHRElement> {
    constructor(props?: HrProps);
}
