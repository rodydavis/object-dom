import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Specifies the main content of a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_main.asp
 */
export class Main extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("main"), ...props });
  }
}
