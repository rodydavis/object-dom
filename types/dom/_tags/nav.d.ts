import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface NavProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<nav>`
*
* Defines navigation links
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.0**  | **4.0**  |   **5.0**   | **9.0** |
*
@see https://www.w3schools.com/TAGS/tag_nav.asp
*/
export declare class Nav extends GlobalDom<HTMLElement> {
    constructor(props?: NavProps);
}
