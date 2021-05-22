import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ColProps extends NodeProps<HTMLTableColElement> {
  attributes?: {
    /**
* `<col span>`
* 
* Specifies the number of columns a <col> element should span
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: <table>   <colgroup>     <col span="2" style="background-color:red">     <col style="background-color:yellow">   <\/colgroup>   <tr>     <th>ISBN<\/th>     <th>Title<\/th>     <th>Price<\/th>   <\/tr>   <tr>     <td>3476896<\/td>     <td>My first HTML<\/td>     <td>$53<\/td>   <\/tr>  <\/table>
* 
@see https://www.w3schools.com/TAGS/att_col_span.asp
*/
    span?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<col>`
* 
* Specifies column properties for each column within a `<colgroup>` element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_col.asp
*/
export class Col extends GlobalDom<HTMLTableColElement> {
  constructor(props: ColProps = {}) {
    super({ node: document.createElement("col"), ...props });
  }
}
