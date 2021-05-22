import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface BaseProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<base href>`
* 
* Specifies the base URL for all relative URLs in the page
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<head>
  
 <base href="https://www.w3schools.com/images/">
 </head>`
* 
@see https://www.w3schools.com/TAGS/att_base_href.asp
*/
    href?: string;

    /**
* `<base target>`
* 
* Specifies the default target for all hyperlinks and forms in the page
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<head>
  
 <base target="_blank">
 </head>`
* 
@see https://www.w3schools.com/TAGS/att_base_target.asp
*/
    target?: /**
     * Opens the link in a new window or tab
     *
     */
    | "_blank"

      /**
       * Default. Opens the link in the same frame as it was clicked
       *
       */
      | "_self"

      /**
       * Opens the link in the parent frame
       *
       */
      | "_parent"

      /**
       * Opens the link in the full body of the window
       *
       */
      | "_top";

    [key: string]: PossibleAttr;
  };
}

/**
* `<base>`
* 
* Specifies the base URL/target for all relative URLs in a document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_base.asp
*/
export class Base extends GlobalDom<HTMLElement> {
  constructor(props: BaseProps = {}) {
    super({ node: document.createElement("base"), ...props });
  }
}
