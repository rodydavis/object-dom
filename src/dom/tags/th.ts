import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ThProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<th abbr>`
* 
* Specifies an abbreviated version of the content in a header cell
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
  <tr>
    <th abbr="Make">Toy manufacturer</th>
    <th abbr="Model">Vehicle model</th>
  </tr>
  <tr>
    <td>Bruder Toys</td>
    <td>Cross Country Vehicle</td>
  </tr>
  <tr>
    <td>Bruder Toys</td>
    <td>DHL Lorry</td>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_th_abbr.asp
*/
    abbr?: string;

    /**
* `<th colspan>`
* 
* Specifies the number of columns a header cell should span
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
       
      <tr>
         
      <th colspan="2">Monthly Savings</th>
       
      </tr>
       
      <tr>
         
      <td>January</td>
         
      <td>$100</td>
       
      </tr>
       
      <tr>
         
      <td>February</td>
         
      <td>$80</td>
       
      </tr>
      </table>`
* 
@see https://www.w3schools.com/TAGS/att_th_colspan.asp
*/
    colspan?: string;

    /**
* `<th headers>`
* 
* Specifies one or more header cells a cell is related to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
  <tr>
    <th id="name" colspan="2">Name</th>
  </tr>
  <tr>
    <th headers="name">Firsname</th>
    <th headers="name">Lastname</th>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_th_headers.asp
*/
    headers?: string;

    /**
* `<th rowspan>`
* 
* Specifies the number of rows a header cell should span
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
        <tr>
    <th>Month</th>
    <th>Savings</th>
    <th rowspan="3">Savings for holiday!</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_th_rowspan.asp
*/
    rowspan?: string;

    /**
* `<th scope>`
* 
* Specifies whether a header cell is a header for a column, row, or group of columns or rows
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
  <tr>
    <th></th>
    <th scope="col">Month</th>
    <th scope="col">Savings</th>
  </tr>
  <tr>
    <td>1</td>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>2</td>
    <td>February</td>
    <td>$80</td>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_th_scope.asp
*/
    scope?: /**
     * Specifies that the cell is a header for a column
     *
     */
    | "col"
      /**
       * Specifies that the cell is a header for a row
       *
       */
      | "row"
      /**
       * Specifies that the cell is a header for a group of columns
       *
       */
      | "colgroup"
      /**
       * Specifies that the cell is a header for a group of rows
       *
       */
      | "rowgroup";

    [key: string]: PossibleAttr;
  };
}

/**
* `<th>`
* 
* Defines a header cell in a table
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_th.asp
*/
export class Th extends GlobalDom<HTMLElement> {
  constructor(props: ThProps = {}) {
    super({ node: document.createElement("th"), ...props });
  }
}
