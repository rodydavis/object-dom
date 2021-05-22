import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface IframeProps extends NodeProps<HTMLIFrameElement> {
    attributes?: {
        /**
    * `<iframe allow>`
    *
    * Specifies a feature policy for the <iframe>
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    @see https://www.w3schools.com/TAGS/att_iframe_allow.asp
    */
        allow?: string;
        /**
    * `<iframe allowfullscreen>`
    *
    * Set to true if the <iframe> can activate fullscreen mode by calling the
        requestFullscreen() method
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    @see https://www.w3schools.com/TAGS/att_iframe_allowfullscreen.asp
    */
        allowfullscreen?: string;
        /**
    * `<iframe allowpaymentrequest>`
    *
    * Set to true if a cross-origin <iframe> should be allowed to invoke the
        Payment Request API
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    @see https://www.w3schools.com/TAGS/att_iframe_allowpaymentrequest.asp
    */
        allowpaymentrequest?: string;
        /**
    * `<iframe height>`
    *
    * Specifies the height of an <iframe>. Default height is 150 pixels
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <iframe src="\/default.asp" width="200" height="200">  <\/iframe>
    *
    @see https://www.w3schools.com/TAGS/att_iframe_height.asp
    */
        height?: string;
        /**
    * `<iframe loading>`
    *
    * Specifies whether a browser should load an iframe immediately or to
        defer loading of iframes until some conditions are met
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **77.0**  | **Not Supported**  |   **Not Supported**   | **79.0** |
    *
    Example: <img src="\/w3images\/wedding.jpg" alt="Wedding" style="width:100%"><img      src="\/w3images\/rocks.jpg" alt="Rocks" style="width:100%"><!--      off-screen images --><img src="\/w3images\/paris.jpg" alt="Paris"      style="width:100%" loading="lazy"><img src="\/w3images\/nature.jpg"      alt="Nature" style="width:100%" loading="lazy"><img src="\/w3images\/underwater.jpg"      alt="Underwater" style="width:100%" loading="lazy"><img src="\/w3images\/ocean.jpg"      alt="Ocean" style="width:100%" loading="lazy"><img src="\/w3images\/mountainskies.jpg"      alt="Mountains" style="width:100%" loading="lazy">
    *
    @see https://www.w3schools.com/TAGS/att_iframe_loading.asp
    */
        loading?: "eager"
        /**
         * Defer loading of iframes until some conditions are met
         *
         */
         | "lazy";
        /**
    * `<iframe name>`
    *
    * Specifies the name of an <iframe>
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <iframe src="demo_iframe.htm" name="iframe_a"><\/iframe>    <a href="https:\/\/www.w3schools.com" target="iframe_a">W3Schools.com<\/a>
    *
    @see https://www.w3schools.com/TAGS/att_iframe_name.asp
    */
        name?: string;
        /**
    * `<iframe referrerpolicy>`
    *
    * Specifies which referrer information to send when
        fetching the iframe
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **51.0**  | **50.0**  |   **11.1**   | **79.0** |
    *
    Example: <iframe src="https:\/\/w3schools.com\/" referrerpolicy="no-referrer"><\/iframe>
    *
    @see https://www.w3schools.com/TAGS/att_iframe_referrerpolicy.asp
    */
        referrerpolicy?: "no-referrer"
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
  * For same-origin requests: Referrer info will be sent. For cross-origin
      requests: No referrer info will be sent
  *
  */
         | "same-origin"
        /**
  * Only send referrer info if the security level is the same (e.g. HTTPS to
      HTTPS). Do not send to a less secure destination (e.g. HTTPS to HTTP)
  *
  */
         | "strict-origin"
        /**
  * Send full path when performing a same-origin request. Send only origin
      when the security level stays the same (e.g. HTTPS to HTTPS). Send no header
      to a less secure destination (HTTPS to HTTP)
  *
  */
         | "strict-origin-when-cross-origin"
        /**
  * Send origin, path and query string (but not fragment, password, or username). This
      value is considered unsafe
  *
  */
         | "unsafe-url";
        /**
    * `<iframe sandbox>`
    *
    * Enables an extra set of restrictions for the content in an <iframe>
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **4.0**  | **17.0**  |   **5.0**   | **10.0** |
    *
    Example: <iframe src="demo_iframe_sandbox.htm" sandbox><\/iframe>
    *
    @see https://www.w3schools.com/TAGS/att_iframe_sandbox.asp
    */
        sandbox?: "(no value)"
        /**
         * Allows form submission
         *
         */
         | "allow-forms"
        /**
         * Allows to open modal windows
         *
         */
         | "allow-modals"
        /**
         * Allows to lock the screen orientation
         *
         */
         | "allow-orientation-lock"
        /**
         * Allows to use the Pointer Lock API
         *
         */
         | "allow-pointer-lock"
        /**
         * Allows popups
         *
         */
         | "allow-popups"
        /**
         * Allows popups to open new windows without inheriting the sandboxing
         *
         */
         | "allow-popups-to-escape-sandbox"
        /**
         * Allows to start a presentation session
         *
         */
         | "allow-presentation"
        /**
         * Allows the iframe content to be treated as being from the same  origin
         *
         */
         | "allow-same-origin"
        /**
         * Allows to run scripts
         *
         */
         | "allow-scripts"
        /**
         * Allows the iframe content to navigate its top-level browsing context
         *
         */
         | "allow-top-navigation"
        /**
  * Allows the iframe content to navigate its top-level browsing context,
      but only if initiated by user
  *
  */
         | "allow-top-navigation-by-user-activation";
        /**
    * `<iframe src>`
    *
    * Specifies the address of the document to embed in the <iframe>
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <iframe src="\/default.asp"><\/iframe>
    *
    @see https://www.w3schools.com/TAGS/att_iframe_src.asp
    */
        src?: string;
        /**
    * `<iframe srcdoc>`
    *
    * Specifies the HTML content of the page to show in the <iframe>
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **20.0**  | **25.0**  |   **6.0**   | **79.0** |
    *
    Example: <iframe srcdoc="<p>Hello world!<\/p>" src="demo_iframe_srcdoc.htm"><\/iframe>
    *
    @see https://www.w3schools.com/TAGS/att_iframe_srcdoc.asp
    */
        srcdoc?: string;
        /**
    * `<iframe width>`
    *
    * Specifies the width of an <iframe>. Default width is 300 pixels
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <iframe src="\/default.asp" width="200" height="200"><\/iframe>
    *
    @see https://www.w3schools.com/TAGS/att_iframe_width.asp
    */
        width?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<iframe>`
*
* Defines an inline frame
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_iframe.asp
*/
export declare class Iframe extends GlobalDom<HTMLIFrameElement> {
    constructor(props?: IframeProps);
}
