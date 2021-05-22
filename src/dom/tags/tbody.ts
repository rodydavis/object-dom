import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TbodyProps extends NodeProps<HTMLTableSectionElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<tbody>`
* 
* Groups the body content in a table
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_tbody.asp
*/
export class Tbody extends GlobalDom<HTMLTableSectionElement> {
  constructor(props: TbodyProps = {}) {
    super({ node: document.createElement("tbody"), ...props });
  }
}
