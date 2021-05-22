import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TextareaProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies that a text area should automatically get focus when the page loads
     */
    autofocus?: string;

    /**
     * Specifies the visible width of a text area
     */
    cols?: string;

    /**
     * Specifies that the text direction of the textarea will be submitted
     */
    dirname?: string;

    /**
     * Specifies that a text area should be disabled
     */
    disabled?: string;

    /**
     * Specifies which form the text area belongs to
     */
    form?: string;

    /**
     * Specifies the maximum number of characters allowed in the text area
     */
    maxlength?: string;

    /**
     * Specifies a name for a text area
     */
    name?: string;

    /**
     * Specifies a short hint that describes the expected value of a text area
     */
    placeholder?: string;

    /**
     * Specifies that a text area should be read-only
     */
    readonly?: string;

    /**
     * Specifies that a text area is required/must be filled out
     */
    required?: string;

    /**
     * Specifies the visible number of lines in a text area
     */
    rows?: string;

    /**
     * Specifies how the text in a text area is to be wrapped when submitted in a form
     */
    wrap?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<textarea>`
 *
 * Defines a multiline input control (text area)
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_textarea.asp
 */
export class Textarea extends GlobalDom<HTMLElement> {
  constructor(props: TextareaProps = {}) {
    super({ node: document.createElement("textarea"), ...props });
  }
}
