import { GlobalDom, NodeProps } from "../../object-dom";

interface BaseProps extends NodeProps<HTMLBaseElement> {
  href?: string;
}

/**
 * Specifies the base URL/target
 * for all relative URLs in a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_base.asp
 */
export class Base extends GlobalDom<HTMLBaseElement> {
  constructor(props: BaseProps = {}) {
    super({ node: document.createElement("base"), ...props });
    this.addAttr("href", props.href);
  }
}
