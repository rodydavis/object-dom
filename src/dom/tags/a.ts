import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface AnchorProps extends NodeProps<HTMLAnchorElement> {
  attributes?: {
    /**
     * Specifies that the target will be downloaded
     * when a user clicks on the hyperlink.
     */
    download?: string;
    /**
     * Specifies the URL of the page the link goes to
     */
    href?: string;
    /**
     * Specifies the language of the linked document.
     */
    hreflang?: string;
    /**
     * Specifies what media/device the linked
     * document is optimized for.
     */
    media?: string;
    /**
     * Specifies a space-separated list of URLs to
     * which, when the link is followed, post
     * requests with the body ping will be sent by
     * the browser (in the background). Typically
     * used for tracking.
     */
    ping?: string;
    /**
     * Specifies which referrer information to
     * send with the link.
     */
    referrerpolicy?:
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url";
    /**
     * Specifies the relationship between the
     * current document and the linked document.
     */
    rel?:
      | "alternate"
      | "author"
      | "bookmark"
      | "external"
      | "help"
      | "license"
      | "next"
      | "nofollow"
      | "noreferrer"
      | "noopener"
      | "prev"
      | "search"
      | "tag";
    /**
     * Specifies where to open the linked document.
     */
    target?: "_blank" | "_parent" | "_self" | "_top";
    /**
     * Specifies the media type of the linked document.
     */
    type?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * Defines a hyperlink.
 *
 * Default styling:
 * ```
 * a:link, a:visited {
 *   color: (internal value);
 *   text-decoration: underline;
 *   cursor: auto;
 * }
 *
 * a:link:active, a:visited:active {
 *   color: (internal value);
 * }
 * ```
 *
 * Reference: https://www.w3schools.com/TAGS/tag_a.asp
 */
export class Anchor extends GlobalDom<HTMLAnchorElement> {
  constructor(props: AnchorProps = {}) {
    super({ node: document.createElement("a"), ...props });
  }
}
