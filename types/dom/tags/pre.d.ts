import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface PreProps extends NodeProps<HTMLPreElement> {
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
export declare class Pre extends GlobalDom<HTMLPreElement> {
    constructor(props?: PreProps);
}
