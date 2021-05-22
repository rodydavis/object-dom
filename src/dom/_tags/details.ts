import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface DetailsProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies that the details should be visible (open) to the user
     */
    open?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<details>`
 *
 * Defines additional details that the user can view or hide
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **12.0**  | **49.0**  |   **6.0**   | **79.0** |
 *
 * @see https://www.w3schools.com/TAGS/tag_details.asp
 */
export class Details extends GlobalDom<HTMLElement> {
  constructor(props: DetailsProps = {}) {
    super({ node: document.createElement("details"), ...props });
  }
}
