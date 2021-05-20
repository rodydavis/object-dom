import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines a parameter for an object.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_param.asp
 */
export class Param extends GlobalDom<HTMLParamElement> {
  constructor(props: NodeProps<HTMLParamElement> = {}) {
    super({ node: document.createElement("param"), ...props });
  }
}
