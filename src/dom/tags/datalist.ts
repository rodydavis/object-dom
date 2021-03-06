import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface DatalistProps extends NodeProps<HTMLDataListElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<datalist>`
* 
* Specifies a list of pre-defined options for input controls
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **20.0**  | **4.0**  |   **12.1**   | **10.0** |
* 
@see https://www.w3schools.com/TAGS/tag_datalist.asp
*/
export class Datalist extends GlobalDom<HTMLDataListElement> {
  constructor(props: DatalistProps = {}) {
    super({ node: document.createElement("datalist"), ...props });
  }
}
