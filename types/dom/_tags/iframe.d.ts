import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface IframeProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies a feature policy for the <iframe>
         */
        allow?: string;
        /**
                * Set to true if the <iframe> can activate fullscreen mode by calling the
        requestFullscreen() method
                */
        allowfullscreen?: string;
        /**
                * Set to true if a cross-origin <iframe> should be allowed to invoke the
        Payment Request API
                */
        allowpaymentrequest?: string;
        /**
         * Specifies the height of an <iframe>. Default height is 150 pixels
         */
        height?: string;
        /**
                * Specifies whether a browser should load an iframe immediately or to
        defer loading of iframes until some conditions are met
                */
        loading?: string;
        /**
         * Specifies the name of an <iframe>
         */
        name?: string;
        /**
                * Specifies which referrer information to send when
        fetching the iframe
                */
        referrerpolicy?: string;
        /**
         * Enables an extra set of restrictions for the content in an <iframe>
         */
        sandbox?: string;
        /**
         * Specifies the address of the document to embed in the <iframe>
         */
        src?: string;
        /**
         * Specifies the HTML content of the page to show in the <iframe>
         */
        srcdoc?: string;
        /**
         * Specifies the width of an <iframe>. Default width is 300 pixels
         */
        width?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<iframe>`
 *
 * Defines an inline frame
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_iframe.asp
 */
export declare class Iframe extends GlobalDom<HTMLElement> {
    constructor(props?: IframeProps);
}
