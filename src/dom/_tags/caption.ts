import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface CaptionProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<caption>`
* 
* Defines a table caption
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_caption.asp
*/
export class Caption extends GlobalDom<HTMLElement> {
  constructor(props: CaptionProps = {}) {
    super({ node: document.createElement("caption"), ...props });
  }
}
