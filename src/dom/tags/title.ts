import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TitleProps extends NodeProps<HTMLTitleElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<title>`
* 
* Defines a title for the document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_title.asp
*/
export class Title extends GlobalDom<HTMLTitleElement> {
  constructor(props: TitleProps = {}) {
    super({ node: document.createElement("title"), ...props });
  }
}
