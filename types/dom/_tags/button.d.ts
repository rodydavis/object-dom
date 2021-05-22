import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface ButtonProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies that a button should automatically get focus when the page loads
         */
        autofocus?: string;
        /**
         * Specifies that a button should be disabled
         */
        disabled?: string;
        /**
         * Specifies which form the button belongs to
         */
        form?: string;
        /**
         * Specifies where to send the form-data when a form is submitted. Only for type="submit"
         */
        formaction?: string;
        /**
         * Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
         */
        formenctype?: string;
        /**
         * Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
         */
        formmethod?: string;
        /**
         * Specifies that the form-data should not be validated on submission. Only for type="submit"
         */
        formnovalidate?: string;
        /**
         * Specifies where to display the response after submitting the form. Only for type="submit"
         */
        formtarget?: string;
        /**
         * Specifies a name for the button
         */
        name?: string;
        /**
         * Specifies the type of button
         */
        type?: string;
        /**
         * Specifies an initial value for the button
         */
        value?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<button>`
 *
 * Defines a clickable button
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_button.asp
 */
export declare class Button extends GlobalDom<HTMLElement> {
    constructor(props?: ButtonProps);
}
