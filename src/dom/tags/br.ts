import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a single line break.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_br.asp
 */
export class Br extends GlobalDom<HTMLBRElement> {
  constructor(props: NodeProps<HTMLBRElement> = {}) {
    super({ node: document.createElement("br"), ...props });
  }
}
