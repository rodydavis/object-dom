import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an image map.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_map.asp
 */
export class Map extends GlobalDom<HTMLMapElement> {
  constructor(props: NodeProps<HTMLMapElement> = {}) {
    super({ node: document.createElement("map"), ...props });
  }
}
