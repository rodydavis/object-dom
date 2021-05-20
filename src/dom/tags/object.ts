import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a container for an external application.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_object.asp
 */
export class Obj extends GlobalDom<HTMLObjectElement> {
  constructor(props: NodeProps<HTMLObjectElement> = {}) {
    super({ node: document.createElement("object"), ...props });
  }
}
