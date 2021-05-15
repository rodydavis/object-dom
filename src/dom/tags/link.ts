import { As, CrossOrigin, GlobalDom, NodeAttr, NodeProps } from "../../object-dom";

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
    this.as = new NodeAttr(this, "as", props.as);
    this.crossorigin = new NodeAttr(this, "crossorigin", props.crossorigin);
    this.disabled = new NodeAttr(this, "disabled", props.disabled);
    this.href = new NodeAttr(this, "href", props.href);
  }
  as: NodeAttr<As>;
  crossorigin: NodeAttr<CrossOrigin>;
  disabled: NodeAttr<boolean>;
  href: NodeAttr;
}
