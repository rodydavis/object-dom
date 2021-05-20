import { As, CrossOrigin, GlobalDom, NodeProps } from "../../object-dom";

interface LinkProps extends NodeProps<HTMLLinkElement> {
  as?: As;
  crossorigin?: CrossOrigin;
  disabled?: boolean;
  href?: string;
}

/**
 * Defines the relationship between a
 * document and an external resource
 * (most used to link to style sheets).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_link.asp
 */
export class Link extends GlobalDom<HTMLLinkElement> {
  constructor(props: LinkProps = {}) {
    super({ node: document.createElement("link"), ...props });
    this.addAttr("as", props?.as);
    this.addAttr("crossorigin", props?.crossorigin);
    this.addAttr("disabled", props?.disabled);
    this.addAttr("href", props?.href);
  }
}
