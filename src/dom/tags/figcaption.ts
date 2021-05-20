import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a caption for a `<figure>` element.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_figcaption.asp
 */
export class FigCaption extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("figcaption"), ...props });
  }
}
