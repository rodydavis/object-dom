import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface OptgroupProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies that an option-group should be disabled
         */
        disabled?: string;
        /**
         * Specifies a label for an option-group
         */
        label?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<optgroup>`
 *
 * Defines a group of related options in a drop-down list
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_optgroup.asp
 */
export declare class Optgroup extends GlobalDom<HTMLElement> {
    constructor(props?: OptgroupProps);
}
