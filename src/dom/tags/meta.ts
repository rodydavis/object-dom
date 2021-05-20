import { GlobalDom, NodeProps } from "../../object-dom";

interface MetaProps extends NodeProps<HTMLMetaElement> {
  charset?: string;
  content?: string;
  httpEquiv?: string;
  name?: string;
}

/**
 * Defines metadata about an HTML document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_meta.asp
 */
export class Meta extends GlobalDom<HTMLMetaElement> {
  constructor(props: MetaProps = {}) {
    super({ node: document.createElement("meta"), ...props });
    this.addAttr("charset", props?.charset);
    this.addAttr("content", props?.content);
    this.addAttr("http-equiv", props?.httpEquiv);
    this.addAttr("name", props?.name);
  }
}
