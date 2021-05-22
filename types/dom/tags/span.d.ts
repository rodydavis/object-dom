import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface SpanProps extends NodeProps<HTMLSpanElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<span>`
*
* Defines a section in a document
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_span.asp
*/
export declare class Span extends GlobalDom<HTMLSpanElement> {
    constructor(props?: SpanProps);
}
