import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface SelectProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies that the drop-down list should automatically get focus when the page loads
     */
    autofocus?: string;

    /**
     * Specifies that a drop-down list should be disabled
     */
    disabled?: string;

    /**
     * Defines which form the drop-down list belongs to
     */
    form?: string;

    /**
     * Specifies that multiple options can be selected at once
     */
    multiple?: string;

    /**
     * Defines a name for the drop-down list
     */
    name?: string;

    /**
     * Specifies that the user is required to select a value before submitting the form
     */
    required?: string;

    /**
     * Defines the number of visible options in a drop-down list
     */
    size?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<select>`
 *
 * Defines a drop-down list
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_select.asp
 */
export class Select extends GlobalDom<HTMLElement> {
  constructor(props: SelectProps = {}) {
    super({ node: document.createElement("select"), ...props });
  }
}
