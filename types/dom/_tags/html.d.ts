import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface HtmlProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies the XML namespace attribute (If you need your content to conform to XHTML)
         */
        xmlns?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<html>`
 *
 * Defines the root of an HTML document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_html.asp
 */
export declare class Html extends GlobalDom<HTMLElement> {
    constructor(props?: HtmlProps);
}
