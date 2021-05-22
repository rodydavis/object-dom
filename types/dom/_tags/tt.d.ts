import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface TtProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<tt>`
 *
 * Not supported in HTML5. Use CSS instead.Defines teletype text
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_tt.asp
 */
export declare class Tt extends GlobalDom<HTMLElement> {
    constructor(props?: TtProps);
}
