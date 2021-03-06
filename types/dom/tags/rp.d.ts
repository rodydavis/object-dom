import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface RpProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<rp>`
*
* Defines what to show in browsers that do not support ruby annotations
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.0**  | **38.0**  |   **5.0**   | **5.5** |
*
@see https://www.w3schools.com/TAGS/tag_rp.asp
*/
export declare class Rp extends GlobalDom<HTMLElement> {
    constructor(props?: RpProps);
}
