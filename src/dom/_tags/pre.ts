import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface PreProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<pre>`
 *
 * Defines preformatted text
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_pre.asp
 */
export class Pre extends GlobalDom<HTMLElement> {
  constructor(props: PreProps = {}) {
    super({ node: document.createElement("pre"), ...props });
  }
}
