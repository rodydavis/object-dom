import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ColgroupProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<colgroup span>`
* 
* Specifies the number of columns a column group should span
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<table>
  <colgroup span="2" style="background:red"></colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
  <tr>
    <td>5869207</td>
    <td>My first CSS</td>
    <td>$49</td>
  </tr>
 </table>`
* 
@see https://www.w3schools.com/TAGS/att_colgroup_span.asp
*/
    span?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<colgroup>`
* 
* Specifies a group of one or more columns in a table for formatting
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_colgroup.asp
*/
export class Colgroup extends GlobalDom<HTMLElement> {
  constructor(props: ColgroupProps = {}) {
    super({ node: document.createElement("colgroup"), ...props });
  }
}
