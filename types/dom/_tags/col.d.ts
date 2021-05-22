import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface ColProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies the number of columns a <col> element should span
         */
        span?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<col>`
 *
 * Specifies column properties for each column within a `<colgroup>` element
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_col.asp
 */
export declare class Col extends GlobalDom<HTMLElement> {
    constructor(props?: ColProps);
}
