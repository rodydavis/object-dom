import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface LabelProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<label for>`
* 
* Specifies the id of the form element the label should be bound to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page.php">
   <label for="male">Male</label>  <input type="radio" name="gender" id="male" value="male"><br>  <label for="female">Female</label>  <input type="radio" name="gender" id="female" value="female"><br>  <label for="other">Other</label>  <input type="radio" name="gender" id="other" value="other"><br><br>  <input type="submit" value="Submit">
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_label_for.asp
*/
    for?: string;

    /**
* `<label form>`
* 
* Specifies which form the label belongs to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page.php" id="form1">
  <input type="radio" name="gender" id="male" value="male"><br>  <label for="female">Female</label>  <input type="radio" name="gender" id="female" value="female"><br>  <label for="other">Other</label>  <input type="radio" name="gender" id="other" value="other"><br><br>  <input type="submit" value="Submit">
 </form>
 <label for="male" form="form1">Male</label>`
* 
@see https://www.w3schools.com/TAGS/att_label_form.asp
*/
    form?: string;
    [key: string]: PossibleAttr;
  };
}

/**
* `<label>`
* 
* Defines a label for an `<input>` element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_label.asp
*/
export class Label extends GlobalDom<HTMLElement> {
  constructor(props: LabelProps = {}) {
    super({ node: document.createElement("label"), ...props });
  }
}
