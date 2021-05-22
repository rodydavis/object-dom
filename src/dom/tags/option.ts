import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface OptionProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<option disabled>`
* 
* Specifies that an option should be disabled
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **8.0** |
* 
Example: `<label for="cars">Choose a car:</label><select id="cars">
  
 <option value="volvo" disabled>Volvo</option>
  
 <option value="saab">Saab</option>
  
 <option value="vw">VW</option>
  
 <option value="audi">Audi</option>
 </select>`
* 
@see https://www.w3schools.com/TAGS/att_option_disabled.asp
*/
    disabled?: string;

    /**
* `<option label>`
* 
* Specifies a shorter label for an option
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Not supported**  |   **Yes**   | **8.0** |
* 
Example: `<label for="cars">Choose a car:</label><select id="cars">
  
 <option label="Volvo">Volvo (Latin for "I roll")</option>
  
 <option label="Saab">Saab (Swedish Aeroplane AB)</option>
  
 <option label="Mercedes">Mercedes (Mercedes-Benz)</option>
  
 <option label="Audi">Audi (Auto Union Deutschland Ingolstadt)</option>
 </select>`
* 
@see https://www.w3schools.com/TAGS/att_option_label.asp
*/
    label?: string;

    /**
* `<option selected>`
* 
* Specifies that an option should be pre-selected when the page loads
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<label for="cars">Choose a car:</label><select id="cars">
  
 <option value="volvo">Volvo</option>
  
 <option value="saab">Saab</option>
  
 <option value="vw">VW</option>
  
 <option value="audi" selected>Audi</option>
 </select>`
* 
@see https://www.w3schools.com/TAGS/att_option_selected.asp
*/
    selected?: string;

    /**
* `<option value>`
* 
* Specifies the value to be sent to a server
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page.php">
   <label for="cars">Choose a car:</label>  <select id="cars" name="cars">
    
 <option value="volvo">Volvo XC90</option>
    
 <option value="saab">Saab 95</option>
    
 <option value="mercedes">Mercedes SLK</option>
    
 <option value="audi">Audi TT</option>
  
 </select>
  
 <input type="submit" value="Submit">
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_option_value.asp
*/
    value?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<option>`
* 
* Defines an option in a drop-down list
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_option.asp
*/
export class Option extends GlobalDom<HTMLElement> {
  constructor(props: OptionProps = {}) {
    super({ node: document.createElement("option"), ...props });
  }
}
