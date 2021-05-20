import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a container for multiple 
 * image resources.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_picture.asp
 */
export class Picture extends GlobalDom<HTMLPictureElement> {
  constructor(props: NodeProps<HTMLPictureElement> = {}) {
    super({ node: document.createElement("picture"), ...props });
  }
}
