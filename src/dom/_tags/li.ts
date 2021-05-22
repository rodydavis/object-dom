import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface LiProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
            * Only for <ol> lists. Specifies the start value of a list item. The 
    following list items will increment from that number
            */
    value?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<li>`
 *
 * Defines a list item
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_li.asp
 */
export class Li extends GlobalDom<HTMLElement> {
  constructor(props: LiProps = {}) {
    super({ node: document.createElement("li"), ...props });
  }
}
