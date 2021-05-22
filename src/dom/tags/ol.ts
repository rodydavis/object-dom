import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface OlProps extends NodeProps<HTMLOListElement> {
  attributes?: {
    /**
* `<ol reversed>`
* 
* Specifies that the list order should be reversed (9,8,7...)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **18.0**  | **18.0**  |   **6.0**   | **79.0** |
* 
Example: <ol reversed>     <li>Coffee<\/li>     <li>Tea<\/li>     <li>Milk<\/li>  <\/ol>
* 
@see https://www.w3schools.com/TAGS/att_ol_reversed.asp
*/
    reversed?: string;

    /**
* `<ol start>`
* 
* Specifies the start value of an ordered list
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: <ol start="50">               <li>Coffee<\/li>               <li>Tea<\/li>               <li>Milk<\/li>       <\/ol>
* 
@see https://www.w3schools.com/TAGS/att_ol_start.asp
*/
    start?: string;

    /**
* `<ol type>`
* 
* Specifies the kind of marker to use in the list
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: <ol type="I">               <li>Coffee<\/li>               <li>Tea<\/li>               <li>Milk<\/li>       <\/ol>
* 
@see https://www.w3schools.com/TAGS/att_ol_type.asp
*/
    type?: /**
     * Default. Decimal numbers (1, 2, 3, 4)
     *
     */
    | "1"

      /**
       * Alphabetically ordered list, lowercase (a, b, c, d)
       *
       */
      | "a"

      /**
       * Alphabetically ordered list, uppercase (A, B, C, D)
       *
       */
      | "A"

      /**
       * Roman numbers, lowercase (i, ii, iii, iv)
       *
       */
      | "i"

      /**
       * Roman numbers, uppercase (I, II, III, IV)
       *
       */
      | "I";

    [key: string]: PossibleAttr;
  };
}

/**
* `<ol>`
* 
* Defines an ordered list
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_ol.asp
*/
export class Ol extends GlobalDom<HTMLOListElement> {
  constructor(props: OlProps = {}) {
    super({ node: document.createElement("ol"), ...props });
  }
}
