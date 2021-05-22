import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface UlProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<ul>`
* 
* Defines an unordered list
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_ul.asp
*/
export class Ul extends GlobalDom<HTMLElement> {
  constructor(props: UlProps = {}) {
    super({ node: document.createElement("ul"), ...props });
  }
}
