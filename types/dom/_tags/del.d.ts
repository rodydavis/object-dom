import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DelProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies a URL to a document that explains the reason why the text was deleted/changed
         */
        cite?: string;
        /**
         * Specifies the date and time of when the text was deleted/changed
         */
        datetime?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<del>`
 *
 * Defines text that has been deleted from a document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_del.asp
 */
export declare class Del extends GlobalDom<HTMLElement> {
    constructor(props?: DelProps);
}
