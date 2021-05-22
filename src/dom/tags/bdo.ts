import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface BdoProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<bdo dir>`
* 
* Required. Specifies the text direction of the text inside the <bdo> element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: <p>Hello world. <bdo dir="rtl">Hello world<\/bdo><\/p>
* 
@see https://www.w3schools.com/TAGS/att_bdo_dir.asp
*/
    dir?: /**
     * Left-to-right text direction
     *
     */
    | "ltr"

      /**
       * Right-to-left text direction
       *
       */
      | "rtl";

    [key: string]: PossibleAttr;
  };
}

/**
* `<bdo>`
* 
* Overrides the current text direction
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_bdo.asp
*/
export class Bdo extends GlobalDom<HTMLElement> {
  constructor(props: BdoProps = {}) {
    super({ node: document.createElement("bdo"), ...props });
  }
}
