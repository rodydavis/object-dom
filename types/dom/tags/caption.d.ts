import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface CaptionProps extends NodeProps<HTMLTableCaptionElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<caption>`
*
* Defines a table caption
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_caption.asp
*/
export declare class Caption extends GlobalDom<HTMLTableCaptionElement> {
    constructor(props?: CaptionProps);
}
