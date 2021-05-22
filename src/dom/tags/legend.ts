import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface LegendProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<legend>`
* 
* Defines a caption for a `<fieldset>` element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_legend.asp
*/
export class Legend extends GlobalDom<HTMLElement> {
  constructor(props: LegendProps = {}) {
    super({ node: document.createElement("legend"), ...props });
  }
}
