import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface VarProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<var>`
 *
 * Defines a variable
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_var.asp
 */
export class Var extends GlobalDom<HTMLElement> {
  constructor(props: VarProps = {}) {
    super({ node: document.createElement("var"), ...props });
  }
}
