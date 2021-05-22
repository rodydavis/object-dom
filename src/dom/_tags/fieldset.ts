import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface FieldsetProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies that a group of related form elements should be disabled
     */
    disabled?: string;

    /**
     * Specifies which form the fieldset belongs to
     */
    form?: string;

    /**
     * Specifies a name for the fieldset
     */
    name?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<fieldset>`
 *
 * Groups related elements in a form
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_fieldset.asp
 */
export class Fieldset extends GlobalDom<HTMLElement> {
  constructor(props: FieldsetProps = {}) {
    super({ node: document.createElement("fieldset"), ...props });
  }
}
