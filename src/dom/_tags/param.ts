import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ParamProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<param name>`
* 
* Specifies the name of a parameter
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<object data="horse.wav">
  <param name="autoplay" value="true">
 </object>`
* 
@see https://www.w3schools.com/TAGS/att_param_name.asp
*/
    name?: string;

    /**
* `<param value>`
* 
* Specifies the value of the parameter
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<object data="horse.wav">
  <param name="autoplay" value="true">
 </object>`
* 
@see https://www.w3schools.com/TAGS/att_param_value.asp
*/
    value?: string;
    [key: string]: PossibleAttr;
  };
}

/**
* `<param>`
* 
* Defines a parameter for an object
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_param.asp
*/
export class Param extends GlobalDom<HTMLElement> {
  constructor(props: ParamProps = {}) {
    super({ node: document.createElement("param"), ...props });
  }
}
