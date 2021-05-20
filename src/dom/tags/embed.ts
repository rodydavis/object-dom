import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a container for an external 
 * application.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_embed.asp
 */
export class Embed extends GlobalDom<HTMLEmbedElement> {
  constructor(props: NodeProps<HTMLEmbedElement> = {}) {
    super({ node: document.createElement("embed"), ...props });
  }
}
