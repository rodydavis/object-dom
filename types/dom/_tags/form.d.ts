import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface FormProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies the character encodings that are to be used for the form submission
         */
        acceptCharset?: string;
        /**
         * Specifies where to send the form-data when a form is submitted
         */
        action?: string;
        /**
         * Specifies whether a form should have autocomplete on or off
         */
        autocomplete?: string;
        /**
         * Specifies how the form-data should be encoded when submitting it to the server (only for method="post")
         */
        enctype?: string;
        /**
         * Specifies the HTTP method to use when sending form-data
         */
        method?: string;
        /**
         * Specifies the name of a form
         */
        name?: string;
        /**
         * Specifies that the form should not be validated when submitted
         */
        novalidate?: string;
        /**
                * Specifies the relationship between a linked resource and the current
        document
                */
        rel?: string;
        /**
         * Specifies where to display the response that is received after submitting the form
         */
        target?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<form>`
 *
 * Defines an HTML form for user input
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_form.asp
 */
export declare class Form extends GlobalDom<HTMLElement> {
    constructor(props?: FormProps);
}
