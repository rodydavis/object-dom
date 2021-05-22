import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface NoscriptProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<noscript>`
* 
* Defines an alternate content for users that do not support 
client-side scripts
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_noscript.asp
*/
export class Noscript extends GlobalDom<HTMLElement> {
  constructor(props: NoscriptProps = {}) {
    super({ node: document.createElement("noscript"), ...props });
  }
}
