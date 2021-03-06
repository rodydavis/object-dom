import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface AbbrProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<abbr>`
* 
* Defines an abbreviation or an acronym
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_abbr.asp
*/
export class Abbr extends GlobalDom<HTMLElement> {
  constructor(props: AbbrProps = {}) {
    super({ node: document.createElement("abbr"), ...props });
  }
}
