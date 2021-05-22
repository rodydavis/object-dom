import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface BaseProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the base URL for all relative URLs in the page
     */
    href?: string;

    /**
     * Specifies the default target for all hyperlinks and forms in the page
     */
    target?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<base>`
 *
 * Specifies the base URL/target for all relative URLs in a document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_base.asp
 */
export class Base extends GlobalDom<HTMLElement> {
  constructor(props: BaseProps = {}) {
    super({ node: document.createElement("base"), ...props });
  }
}
