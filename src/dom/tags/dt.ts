import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a term/name in a description list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_dt.asp
 */
export class Dt extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("dt"), ...props });
  }
}
