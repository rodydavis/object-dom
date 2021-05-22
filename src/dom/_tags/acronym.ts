import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface AcronymProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<acronym>`
* 
* Not supported in HTML5. Use `<abbr>` instead.Defines an acronym
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_acronym.asp
*/
export class Acronym extends GlobalDom<HTMLElement> {
  constructor(props: AcronymProps = {}) {
    super({ node: document.createElement("acronym"), ...props });
  }
}
