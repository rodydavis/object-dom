import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface NoframesProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<noframes>`
 *
 * Not supported in HTML5.Defines an alternate content for users that do not support frames
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_noframes.asp
 */
export declare class Noframes extends GlobalDom<HTMLElement> {
    constructor(props?: NoframesProps);
}
