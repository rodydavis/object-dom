import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface QProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the source URL of the quote
     */
    cite?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<q>`
 *
 * Defines a short quotation
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_q.asp
 */
export class Q extends GlobalDom<HTMLElement> {
  constructor(props: QProps = {}) {
    super({ node: document.createElement("q"), ...props });
  }
}
