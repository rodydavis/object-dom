import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines an abbreviation or an acronym.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_abbr.asp
 */
export class Abbr extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("abbr"), ...props });
  }
}
