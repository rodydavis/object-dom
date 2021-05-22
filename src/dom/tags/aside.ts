import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface AsideProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<aside>`
* 
* Defines content aside from the page content
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **6.0**  | **4.0**  |   **5.0**   | **9.0** |
* 
@see https://www.w3schools.com/TAGS/tag_aside.asp
*/
export class Aside extends GlobalDom<HTMLElement> {
  constructor(props: AsideProps = {}) {
    super({ node: document.createElement("aside"), ...props });
  }
}
