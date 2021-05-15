import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an explanation/pronunciation 
 * of characters (for East Asian typography).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_rt.asp
 */
export class Rt extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("rt"), ...props });
  }
}
