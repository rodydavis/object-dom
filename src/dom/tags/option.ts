import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an option in a drop-down list.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_option.asp
 */
export class Option extends GlobalDom<HTMLOptionElement> {
  constructor(props: NodeProps<HTMLOptionElement> = {}) {
    super({ node: document.createElement("option"), ...props });
  }
}
