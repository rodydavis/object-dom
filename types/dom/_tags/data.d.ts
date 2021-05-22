import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DataProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies the machine-readable translation of the content of the element
         */
        value?: string;
        [key: string]: PossibleAttr;
    };
}
/**
     * HTML tag: `<data>`
     *
     * Adds a machine-readable
translation of a given content
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **62.0**  | **22.0**  |   **Not supported**   | **13.0** |
     *
     * @see https://www.w3schools.com/TAGS/tag_data.asp
     */
export declare class Data extends GlobalDom<HTMLElement> {
    constructor(props?: DataProps);
}
