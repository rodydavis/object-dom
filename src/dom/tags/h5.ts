import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface H5Props extends NodeProps<HTMLHeadingElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<h5>`
* 
* Defines HTML headings
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_h5.asp
*/
export class H5 extends GlobalDom<HTMLHeadingElement> {
  constructor(props: H5Props = {}) {
    super({ node: document.createElement("h5"), ...props });
  }
}
