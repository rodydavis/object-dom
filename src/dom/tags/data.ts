import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Adds a machine-readable translation 
 * of a given content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_data.asp
 */
export class Data extends GlobalDom<HTMLDataElement> {
  constructor(props: NodeProps<HTMLDataElement> = {}) {
    super({ node: document.createElement("data"), ...props });
  }
}
