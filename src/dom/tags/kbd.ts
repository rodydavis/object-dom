import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines keyboard input.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_kbd.asp
 */
export class Kbd extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("kbd"), ...props });
  }
}
