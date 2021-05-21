import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines an inline frame.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_iframe.asp
 */
export class Iframe extends GlobalDom<HTMLIFrameElement> {
  constructor(props: NodeProps<HTMLIFrameElement> = {}) {
    super({ node: document.createElement("iframe"), ...props });
  }

  replace(doc: Document) {
    const current = this.node.contentDocument;
    const srcNode = doc.documentElement;
    const newNode = current!.importNode(srcNode, true);
    current!.replaceChild(newNode, current!.documentElement);
  }
}
