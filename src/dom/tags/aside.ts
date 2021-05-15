import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines content aside from the page content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_aside.asp
 */
export class Aside extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("aside"), ...props });
  }
}
