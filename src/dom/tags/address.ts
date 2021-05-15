import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines contact information for the
 * author/owner of a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_address.asp
 */
export class Address extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("address"), ...props });
  }
}
