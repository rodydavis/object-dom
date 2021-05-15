import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Specifies self-contained content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_figure.asp
 */
export class Figure extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("figure"), ...props });
  }
}
