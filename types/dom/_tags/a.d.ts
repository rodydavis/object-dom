import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface AProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
    * `<a download>`
    *
    * Specifies that the target will be downloaded when a user clicks on the hyperlink
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **14.0***  | **20.0***  |   **10.1**   | **18.0** |
    *
    Example: `<a href="/images/myw3schoolsimage.jpg" download>`
    *
    @see https://www.w3schools.com/TAGS/att_a_download.asp
    */
        download?: string;
        /**
    * `<a href>`
    *
    * Specifies the URL of the page the link goes to
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<a href="https://www.w3schools.com">Visit W3Schools</a>`
    *
    @see https://www.w3schools.com/TAGS/att_a_href.asp
    */
        href?: string;
        /**
    * `<a hreflang>`
    *
    * Specifies the language of the linked document
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<a href="https://www.w3schools.com" hreflang="en">W3Schools</a>`
    *
    @see https://www.w3schools.com/TAGS/att_a_hreflang.asp
    */
        hreflang?: string;
        /**
    * `<a media>`
    *
    * Specifies what media/device the linked document is optimized for
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<a href="att_a_media.asp?output=print"
     media="print and (resolution:300dpi)">
     Open media attribute page for print.</a>`
    *
    @see https://www.w3schools.com/TAGS/att_a_media.asp
    */
        media?: "and"
        /**
         * Specifies a NOT operator
         *
         */
         | "not"
        /**
         * Specifies an OR operator
         *
         */
         | ",";
        /**
    * `<a ping>`
    *
    * Specifies a space-separated list of URLs to which, when the link is
        followed, post requests with the body ping will be sent by the browser (in
        the background). Typically used for tracking.
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **No**   | **No** |
    *
    Example: `<a href="https://www.w3schools.com/html" ping="https://www.w3schools.com/trackpings">`
    *
    @see https://www.w3schools.com/TAGS/att_a_ping.asp
    */
        ping?: string;
        /**
    * `<a referrerpolicy>`
    *
    * Specifies which referrer information to send with the link
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    @see https://www.w3schools.com/TAGS/att_a_referrerpolicy.asp
    */
        referrerpolicy?: string;
        /**
    * `<a rel>`
    *
    * Specifies the relationship between the current document and the linked document
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<a rel="nofollow" href="http://www.functravel.com/">Cheap Flights</a>`
    *
    @see https://www.w3schools.com/TAGS/att_a_rel.asp
    */
        rel?: "alternate"
        /**
         * Provides a link to the author of the document
         *
         */
         | "author"
        /**
         * Permanent URL used for bookmarking
         *
         */
         | "bookmark"
        /**
         * Indicates that the referenced document is not part of the same site as the current document
         *
         */
         | "external"
        /**
         * Provides a link to a help document
         *
         */
         | "help"
        /**
         * Provides a link to licensing information for the document
         *
         */
         | "license"
        /**
         * Provides a link to the next document in the series
         *
         */
         | "next"
        /**
  * Links to an unendorsed document, like a paid link.
   ("nofollow" is used by Google, to specify that the Google search spider should not follow that link)
  *
  */
         | "nofollow"
        /**
         * Requires that any browsing context created by following the hyperlink must not have an opener browsing context
         *
         */
         | "noopener"
        /**
  * Makes the referrer unknown. No referer header will be included when the user
      clicks the hyperlink
  *
  */
         | "noreferrer"
        /**
         * The previous document in a selection
         *
         */
         | "prev"
        /**
         * Links to a search tool for the document
         *
         */
         | "search"
        /**
         * A tag (keyword) for the current document
         *
         */
         | "tag";
        /**
    * `<a target>`
    *
    * Specifies where to open the linked document
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>`
    *
    @see https://www.w3schools.com/TAGS/att_a_target.asp
    */
        target?: "_blank"
        /**
         * Opens the linked document in the same frame as it was clicked (this is default)
         *
         */
         | "_self"
        /**
         * Opens the linked document in the parent frame
         *
         */
         | "_parent"
        /**
         * Opens the linked document in the full body of the window
         *
         */
         | "_top"
        /**
         * Opens the linked document in the named iframe
         *
         */
         | "framename";
        /**
    * `<a type>`
    *
    * Specifies the media type of the linked document
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<a href="https://www.w3schools.com" type="text/html">W3Schools</a>`
    *
    @see https://www.w3schools.com/TAGS/att_a_type.asp
    */
        type?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<a>`
*
* Defines a hyperlink
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_a.asp
*/
export declare class A extends GlobalDom<HTMLElement> {
    constructor(props?: AProps);
}
