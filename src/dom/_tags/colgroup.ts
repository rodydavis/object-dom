import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ColgroupProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the number of columns a column group should span
     */
    span?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<colgroup>`
 *
 * Specifies a group of one or more columns in a table for formatting
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_colgroup.asp
 */
export class Colgroup extends GlobalDom<HTMLElement> {
  constructor(props: ColgroupProps = {}) {
    super({ node: document.createElement("colgroup"), ...props });
  }
}
