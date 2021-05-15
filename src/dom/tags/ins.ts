import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a text that has been
 * inserted into a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_ins.asp
 */
export class Ins extends GlobalDom<HTMLModElement> {
  constructor(props: NodeProps<HTMLModElement> = {}) {
    super({ node: document.createElement("ins"), ...props });
  }
}
