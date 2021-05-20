import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a client-side script.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_script.asp
 */
export class Script extends GlobalDom<HTMLScriptElement> {
  constructor(props: NodeProps<HTMLScriptElement> = {}) {
    super({ node: document.createElement("script"), ...props });
  }
}
