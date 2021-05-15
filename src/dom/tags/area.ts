import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an area inside an image map.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_area.asp
 */
export class Area extends GlobalDom<HTMLAreaElement> {
  constructor(props: NodeProps<HTMLAreaElement> = {}) {
    super({ node: document.createElement("area"), ...props });
  }
}
