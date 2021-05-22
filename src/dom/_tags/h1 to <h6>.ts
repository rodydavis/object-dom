import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface H1ToH6Props extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<h1 to <h6>>`
* 
* Defines HTML headings
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_h1 to <h6>.asp
*/
export class H1ToH6 extends GlobalDom<HTMLElement> {
  constructor(props: H1ToH6Props = {}) {
    super({ node: document.createElement("h1 to <h6>"), ...props });
  }
}
