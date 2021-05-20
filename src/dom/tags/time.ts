import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a specific time (or datetime).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_time.asp
 */
export class Time extends GlobalDom<HTMLTimeElement> {
  constructor(props: NodeProps<HTMLTimeElement> = {}) {
    super({ node: document.createElement("time"), ...props });
  }
}
