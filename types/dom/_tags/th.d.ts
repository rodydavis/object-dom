import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface ThProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies an abbreviated version of the content in a header cell
         */
        abbr?: string;
        /**
         * Specifies the number of columns a header cell should span
         */
        colspan?: string;
        /**
         * Specifies one or more header cells a cell is related to
         */
        headers?: string;
        /**
         * Specifies the number of rows a header cell should span
         */
        rowspan?: string;
        /**
         * Specifies whether a header cell is a header for a column, row, or group of columns or rows
         */
        scope?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<th>`
 *
 * Defines a header cell in a table
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_th.asp
 */
export declare class Th extends GlobalDom<HTMLElement> {
    constructor(props?: ThProps);
}
