import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface IProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<i>`
 *
 * Defines a part of text in an alternate voice or mood
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_i.asp
 */
export class I extends GlobalDom<HTMLElement> {
  constructor(props: IProps = {}) {
    super({ node: document.createElement("i"), ...props });
  }
}
