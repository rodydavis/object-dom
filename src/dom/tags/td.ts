import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TdProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<td colspan>`
* 
* Specifies the number of columns a cell should span
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
  <tr>
    <td colspan="2">Sum: $180</td>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_td_colspan.asp
*/
    colspan?: string;

    /**
* `<td headers>`
* 
* Specifies one or more header cells a cell is related to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
  <tr>
    <th id="name">Name</th>
    <th id="email">Email</th>
    <th id="phone">Phone</th>
    <th id="addr">Address</th>
  </tr>
  <tr>
    <td headers="name">John Doe</td>
    <td headers="email">someone@example.com</td>
    <td headers="phone">+45342323</td>
    <td headers="addr">Rosevn 56,4300 Sandnes,Norway</td>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_td_headers.asp
*/
    headers?: string;

    /**
* `<td rowspan>`
* 
* Sets the number of rows a cell should span
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
        <tr>
    <th>Month</th>
    <th>Savings</th>
    <th>Savings for holiday!</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
    <td rowspan="2">$50</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_td_rowspan.asp
*/
    rowspan?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<td>`
* 
* Defines a cell in a table
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_td.asp
*/
export class Td extends GlobalDom<HTMLElement> {
  constructor(props: TdProps = {}) {
    super({ node: document.createElement("td"), ...props });
  }
}
