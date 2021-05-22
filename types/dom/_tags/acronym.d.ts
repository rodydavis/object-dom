import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface AcronymProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<acronym>`
 *
 * Not supported in HTML5. Use `<abbr>` instead.Defines an acronym
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_acronym.asp
 */
export declare class Acronym extends GlobalDom<HTMLElement> {
    constructor(props?: AcronymProps);
}