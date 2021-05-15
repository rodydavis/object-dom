import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines sample output from a computer program.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_samp.asp
 */
export class Samp extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("samp"), ...props });
  }
}
