import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface BlockquoteProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the source of the quotation
     */
    cite?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<blockquote>`
 *
 * Defines a section that is quoted from another source
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_blockquote.asp
 */
export class Blockquote extends GlobalDom<HTMLElement> {
  constructor(props: BlockquoteProps = {}) {
    super({ node: document.createElement("blockquote"), ...props });
  }
}
