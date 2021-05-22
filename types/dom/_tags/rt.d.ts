import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface RtProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<rt>`
*
* Defines an explanation/pronunciation of characters (for East Asian
typography)
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.0**  | **38.0**  |   **5.0**   | **5.5** |
*
@see https://www.w3schools.com/TAGS/tag_rt.asp
*/
export declare class Rt extends GlobalDom<HTMLElement> {
    constructor(props?: RtProps);
}
