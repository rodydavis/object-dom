import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface OutputProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<output for>`
* 
* Specifies the relationship between the result of the calculation, and the elements used in the calculation
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **10.0**  | **4.0**  |   **7.0**   | **13.0** |
* 
Example: `<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
      <input type="range" id="a" value="50">
  +<input type="number" id="b" value="25">
  =<output name="x" for="a b"></output>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_output_for.asp
*/
    for?: string;

    /**
* `<output form>`
* 
* Specifies which form the output element belongs to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Not supported**  | **Not supported**  |   **Not supported**   | **Not supported** |
* 
Example: `<form action="/action_page.php" id="numform"
 oninput="x.value=parseInt(a.value)+parseInt(b.value)"><input type="range" id="a" name="a" value="50">
 + <input type="number" id="b" name="b" value="25">
 <input type="submit">
 </form>
 
 <output form="numform" id="x" name="x" for="a+b"></output>`
* 
@see https://www.w3schools.com/TAGS/att_output_form.asp
*/
    form?: string;

    /**
* `<output name>`
* 
* Specifies a name for the output element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **10.0**  | **4.0**  |   **7.0**   | **13.0** |
* 
Example: `<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
      <input type="range" id="a" value="50">
  +<input type="number" id="b" value="25">
  =<output name="x" for="a b"></output>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_output_name.asp
*/
    name?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<output>`
* 
* Defines the result of a calculation
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **10.0**  | **4.0**  |   **5.1**   | **13.0** |
* 
@see https://www.w3schools.com/TAGS/tag_output.asp
*/
export class Output extends GlobalDom<HTMLElement> {
  constructor(props: OutputProps = {}) {
    super({ node: document.createElement("output"), ...props });
  }
}
