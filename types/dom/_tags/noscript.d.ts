import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface NoscriptProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
     * HTML tag: `<noscript>`
     *
     * Defines an alternate content for users that do not support
client-side scripts
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     *
     * @see https://www.w3schools.com/TAGS/tag_noscript.asp
     */
export declare class Noscript extends GlobalDom<HTMLElement> {
    constructor(props?: NoscriptProps);
}
