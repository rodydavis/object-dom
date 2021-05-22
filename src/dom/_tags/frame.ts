import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface FrameProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<frame>`
 *
 * Not supported in HTML5.Defines a window (a frame) in a frameset
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_frame.asp
 */
export class Frame extends GlobalDom<HTMLElement> {
  constructor(props: FrameProps = {}) {
    super({ node: document.createElement("frame"), ...props });
  }
}
