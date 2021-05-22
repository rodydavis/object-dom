import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface DivProps extends NodeProps<HTMLDivElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<div>`
* 
* Defines a section in a document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_div.asp
*/
export class Div extends GlobalDom<HTMLDivElement> {
  constructor(props: DivProps = {}) {
    super({ node: document.createElement("div"), ...props });
  }
}
