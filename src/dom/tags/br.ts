import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface BrProps extends NodeProps<HTMLBRElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<br>`
* 
* Defines a single line break
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_br.asp
*/
export class Br extends GlobalDom<HTMLBRElement> {
  constructor(props: BrProps = {}) {
    super({ node: document.createElement("br"), ...props });
  }
}
