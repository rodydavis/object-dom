import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface InsProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies a URL to a document that explains the reason why the text was inserted/changed
         */
        cite?: string;
        /**
         * Specifies the date and time when the text was inserted/changed
         */
        datetime?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<ins>`
 *
 * Defines a text that has been inserted into a document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_ins.asp
 */
export declare class Ins extends GlobalDom<HTMLElement> {
    constructor(props?: InsProps);
}
