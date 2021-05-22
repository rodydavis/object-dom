import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface MetaProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies the character encoding for the HTML document
         */
        charset?: string;
        /**
         * Specifies the value associated with the http-equiv or name attribute
         */
        content?: string;
        /**
         * Provides an HTTP header for the information/value of the content attribute
         */
        httpEquiv?: string;
        /**
         * Specifies a name for the metadata
         */
        name?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<meta>`
 *
 * Defines metadata about an HTML document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_meta.asp
 */
export declare class Meta extends GlobalDom<HTMLElement> {
    constructor(props?: MetaProps);
}
