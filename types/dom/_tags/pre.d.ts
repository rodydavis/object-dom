import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface PreProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<pre>`
*
* Defines preformatted text
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_pre.asp
*/
export declare class Pre extends GlobalDom<HTMLElement> {
    constructor(props?: PreProps);
}
