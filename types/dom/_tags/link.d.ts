import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface LinkProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies how the element handles cross-origin requests
         */
        crossorigin?: string;
        /**
         * Specifies the location of the linked document
         */
        href?: string;
        /**
         * Specifies the language of the text in the linked document
         */
        hreflang?: string;
        /**
         * Specifies on what device the linked document will be displayed
         */
        media?: string;
        /**
         * Specifies which referrer to use when fetching the resource
         */
        referrerpolicy?: string;
        /**
         * Required. Specifies the relationship between the current document and the linked document
         */
        rel?: string;
        /**
         * Specifies the size of the linked resource. Only for rel="icon"
         */
        sizes?: string;
        /**
         * Defines a preferred or an alternate stylesheet
         */
        title?: string;
        /**
         * Specifies the media type of the linked document
         */
        type?: string;
        [key: string]: PossibleAttr;
    };
}
/**
     * HTML tag: `<link>`
     *
     * Defines the relationship between a document and an external resource (most
used to link to style sheets)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     *
     * @see https://www.w3schools.com/TAGS/tag_link.asp
     */
export declare class Link extends GlobalDom<HTMLElement> {
    constructor(props?: LinkProps);
}
