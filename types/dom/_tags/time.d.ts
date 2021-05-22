import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface TimeProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Represent a machine-readable format of the <time> element
         */
        datetime?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<time>`
 *
 * Defines a specific time (or datetime)
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **62.0**  | **22.0**  |   **7.0**   | **18.0** |
 *
 * @see https://www.w3schools.com/TAGS/tag_time.asp
 */
export declare class Time extends GlobalDom<HTMLElement> {
    constructor(props?: TimeProps);
}
