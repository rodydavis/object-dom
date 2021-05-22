import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface AddressProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<address>`
 *
 * Defines contact information for the author/owner of a document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_address.asp
 */
export class Address extends GlobalDom<HTMLElement> {
  constructor(props: AddressProps = {}) {
    super({ node: document.createElement("address"), ...props });
  }
}
