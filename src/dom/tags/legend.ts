import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a caption for a `<fieldset>` element.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_legend.asp
 */
export class Legend extends GlobalDom<HTMLLegendElement> {
  constructor(props: NodeProps<HTMLLegendElement> = {}) {
    super({ node: document.createElement("legend"), ...props });
  }
}
