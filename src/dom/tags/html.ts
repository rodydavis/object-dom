import { GlobalDom, NodeProps } from "../../object-dom";

interface HtmlProps extends NodeProps<HTMLHtmlElement> {
  lang?: string;
  xmlns?: string;
}

/**
 * Defines the root of an HTML document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_html.asp
 */
export class Html extends GlobalDom<HTMLHtmlElement> {
  constructor(props: HtmlProps = {}) {
    super({ node: document.createElement("html"), ...props });
    this.addAttr("lang", props?.lang);
    this.addAttr("xmlns", props?.xmlns);
  }
}