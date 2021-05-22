import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface CodeProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<code>`
 *
 * Defines a piece of computer code
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_code.asp
 */
export class Code extends GlobalDom<HTMLElement> {
  constructor(props: CodeProps = {}) {
    super({ node: document.createElement("code"), ...props });
  }
}
