import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface HeadProps extends NodeProps<HTMLHeadElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<head>`
* 
* Contains metadata/information for the document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_head.asp
*/
export class Head extends GlobalDom<HTMLHeadElement> {
  constructor(props: HeadProps = {}) {
    super({ node: document.createElement("head"), ...props });
  }
}
