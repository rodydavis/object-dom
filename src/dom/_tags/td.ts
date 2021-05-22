import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TdProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the number of columns a cell should span
     */
    colspan?: string;

    /**
     * Specifies one or more header cells a cell is related to
     */
    headers?: string;

    /**
     * Sets the number of rows a cell should span
     */
    rowspan?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<td>`
 *
 * Defines a cell in a table
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_td.asp
 */
export class Td extends GlobalDom<HTMLElement> {
  constructor(props: TdProps = {}) {
    super({ node: document.createElement("td"), ...props });
  }
}
