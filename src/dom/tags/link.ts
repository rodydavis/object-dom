import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface LinkProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<link crossorigin>`
* 
* Specifies how the element handles cross-origin requests
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_link_crossorigin.asp
*/
    crossorigin?: string;

    /**
* `<link href>`
* 
* Specifies the location of the linked document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<link rel="stylesheet" href="styles.css">`
* 
@see https://www.w3schools.com/TAGS/att_link_href.asp
*/
    href?: string;

    /**
* `<link hreflang>`
* 
* Specifies the language of the text in the linked document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<link href="tag_link.asp" rel="parent" rev="subsection" hreflang="en">`
* 
@see https://www.w3schools.com/TAGS/att_link_hreflang.asp
*/
    hreflang?: string;

    /**
* `<link media>`
* 
* Specifies on what device the linked document will be displayed
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<head>
       
      <link rel="stylesheet" type="text/css" href="theme.css">
  
 <link rel="stylesheet" type="text/css" href="print.css" media="print">
    </head>`
* 
@see https://www.w3schools.com/TAGS/att_link_media.asp
*/
    media?: /**
     * Specifies an AND operator
     *
     */
    | "and"

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
* `<link referrerpolicy>`
* 
* Specifies which referrer to use when fetching the resource
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **51.0**  | **50.0**  |   **11.1**   | **79.0** |
* 
Example: `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" referrerpolicy="no-referrer">`
* 
@see https://www.w3schools.com/TAGS/att_link_referrerpolicy.asp
*/
    referrerpolicy?: /**
     * No referrer information will be sent along with a request
     *
     */
    | "no-referrer"

      /**
* Default. The referrer header will not be sent to origins 
    without HTTPS
* 
*/
      | "no-referrer-when-downgrade"

      /**
       * Send only scheme, host, and port to the request client
       *
       */
      | "origin"

      /**
* For cross-origin requests: Send only scheme, 
    host, and port. For same-origin requests: Also include 
    the path
* 
*/
      | "origin-when-cross-origin"

      /**
* Send origin, path and query string (but not fragment, password, or username). This 
    value is considered unsafe
* 
*/
      | "unsafe-url";

    /**
* `<link rel>`
* 
* Required. Specifies the relationship between the current document and the linked document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<link rel="stylesheet" href="styles.css">`
* 
@see https://www.w3schools.com/TAGS/att_link_rel.asp
*/
    rel?: /**
* Provides a link to an alternate version of the document (i.e. print page, translated or mirror).
 Example: <link rel="alternate" type="application/atom+xml" title="W3Schools News" href="/blog/news/atom">
* 
*/
    | "alternate"

      /**
       * Provides a link to the author of the document
       *
       */
      | "author"

      /**
       * Specifies that the browser should preemptively perform DNS resolution for the target resource's origin
       *
       */
      | "dns-prefetch"

      /**
       * Provides a link to a help document. Example: <link rel="help" href="/help/">
       *
       */
      | "help"

      /**
       * Imports an icon to represent the document.Example: <link rel="icon" href="/favicon.ico" type="image/x-icon">
       *
       */
      | "icon"

      /**
       * Provides a link to copyright information for the document
       *
       */
      | "license"

      /**
       * Provides a link to the next document in the series
       *
       */
      | "next"

      /**
       * Provides the address of the pingback server that handles pingbacks to the current document
       *
       */
      | "pingback"

      /**
       * Specifies that the browser should preemptively connect to the target resource's origin.
       *
       */
      | "preconnect"

      /**
       * Specifies that the browser should preemptively fetch and cache the target resource as it is likely to be required for a follow-up navigation
       *
       */
      | "prefetch"

      /**
       * Specifies that the browser agent must preemptively fetch and cache the target resource for current navigation according to the destination given by the "as" attribute (and the priority associated with that destination).
       *
       */
      | "preload"

      /**
* Specifies that the browser should pre-render (load) the specified 
    webpage in the background. So, if the user navigates to this page, it speeds 
    up the page load (because the page is already loaded). Warning! 
    This waste the user's bandwidth! Only use prerender if it is absolutely sure 
    that the webpage is required at some point in the user journey
* 
*/
      | "prerender"

      /**
       * Indicates that the document is a part of a series, and that the previous document in the series is the referenced document
       *
       */
      | "prev"

      /**
       * Provides a link to a resource that can be used to search through the current document and its related pages.
       *
       */
      | "search"

      /**
       * Imports a style sheet
       *
       */
      | "stylesheet";

    /**
* `<link sizes>`
* 
* Specifies the size of the linked resource. Only for rel="icon"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Not supported**  | **Not supported**  |   **Not supported**   | **Not supported** |
* 
Example: `<link rel="icon" href="demo_icon.gif" type="image/gif" sizes="16x16">`
* 
@see https://www.w3schools.com/TAGS/att_link_sizes.asp
*/
    sizes?: /**
* Specifies one or more sizes for the  linked icon.The height and width values are separated by an "x" or "X".
  Examples:
  
      <link rel="icon" href="favicon.png" sizes="16x16" type="image/png"> (1 size)
      <link rel="icon" href="favicon.png" sizes="16x16 32x32"   type="image/png"> (2 sizes)
* 
*/
    | "HeightxWidth"

      /**
* Specifies that the icon is scalable (like an SVG image)Examples:
  
      <link rel="icon" href="icon.svg" sizes="any" type="image/svg+xml">   (any size)
* 
*/
      | "any";

    /**
* `<link title>`
* 
* Defines a preferred or an alternate stylesheet
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_link_title.asp
*/
    title?: string;

    /**
* `<link type>`
* 
* Specifies the media type of the linked document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<head>
       
      <link rel="stylesheet" type="text/css" href="styles.css">
    </head>`
* 
@see https://www.w3schools.com/TAGS/att_link_type.asp
*/
    type?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<link>`
* 
* Defines the relationship between a document and an external resource (most  used to link to style sheets)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_link.asp
*/
export class Link extends GlobalDom<HTMLElement> {
  constructor(props: LinkProps = {}) {
    super({ node: document.createElement("link"), ...props });
  }
}
