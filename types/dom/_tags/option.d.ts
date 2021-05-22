import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface OptionProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies that an option should be disabled
         */
        disabled?: string;
        /**
         * Specifies a shorter label for an option
         */
        label?: string;
        /**
         * Specifies that an option should be pre-selected when the page loads
         */
        selected?: string;
        /**
         * Specifies the value to be sent to a server
         */
        value?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<option>`
 *
 * Defines an option in a drop-down list
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_option.asp
 */
export declare class Option extends GlobalDom<HTMLElement> {
    constructor(props?: OptionProps);
}
