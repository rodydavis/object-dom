import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface CenterProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<center>`
 *
 * Not supported in HTML5. Use CSS instead.Defines centered text
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_center.asp
 */
export class Center extends GlobalDom<HTMLElement> {
  constructor(props: CenterProps = {}) {
    super({ node: document.createElement("center"), ...props });
  }
}
