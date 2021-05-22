import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface SubProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<sub>`
* 
* Defines subscripted text
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_sub.asp
*/
export class Sub extends GlobalDom<HTMLElement> {
  constructor(props: SubProps = {}) {
    super({ node: document.createElement("sub"), ...props });
  }
}
