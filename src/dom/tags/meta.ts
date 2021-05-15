import { GlobalDom, NodeAttr, NodeProps } from "../../object-dom";

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
    this.charset = new NodeAttr(this, "charset", props.charset);
    this.content = new NodeAttr(this, "content", props.content);
    this.httpEquiv = new NodeAttr(this, "http-equiv", props.httpEquiv);
    this.name = new NodeAttr(this, "name", props.name);
  }
  charset: NodeAttr;
  content: NodeAttr;
  httpEquiv: NodeAttr;
  name: NodeAttr;
}
