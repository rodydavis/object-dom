import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface FooterProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<footer>`
 *
 * Defines a footer for a document or section
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **5.0**  | **4.0**  |   **5.0**   | **9.0** |
 *
 * @see https://www.w3schools.com/TAGS/tag_footer.asp
 */
export class Footer extends GlobalDom<HTMLElement> {
  constructor(props: FooterProps = {}) {
    super({ node: document.createElement("footer"), ...props });
  }
}
