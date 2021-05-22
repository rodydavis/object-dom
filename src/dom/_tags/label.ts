import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface LabelProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the id of the form element the label should be bound to
     */
    for?: string;

    /**
     * Specifies which form the label belongs to
     */
    form?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<label>`
 *
 * Defines a label for an `<input>` element
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_label.asp
 */
export class Label extends GlobalDom<HTMLElement> {
  constructor(props: LabelProps = {}) {
    super({ node: document.createElement("label"), ...props });
  }
}
