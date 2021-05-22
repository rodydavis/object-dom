import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ButtonProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<button autofocus>`
* 
* Specifies that a button should automatically get focus when the page loads
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **5.0**  | **4.0**  |   **5.0**   | **10.0** |
* 
Example: `<button type="button" autofocus>Click Me!</button>`
* 
@see https://www.w3schools.com/TAGS/att_button_autofocus.asp
*/
    autofocus?: string;

    /**
* `<button disabled>`
* 
* Specifies that a button should be disabled
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<button type="button" disabled>Click Me!</button>`
* 
@see https://www.w3schools.com/TAGS/att_button_disabled.asp
*/
    disabled?: string;

    /**
* `<button form>`
* 
* Specifies which form the button belongs to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **10.0**  | **4.0**  |   **5.1**   | **16.0** |
* 
Example: `<form action="/action_page.php" method="get" id="form1"><label for="fname">First 
    name:</label><input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label><input type="text" id="lname" 
    name="lname"></form><button type="submit" form="form1" 
    value="Submit">Submit</button>`
* 
@see https://www.w3schools.com/TAGS/att_button_form.asp
*/
    form?: string;

    /**
* `<button formaction>`
* 
* Specifies where to send the form-data when a form is submitted. Only for type="submit"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **9.0**  | **4.0**  |   **5.1**   | **10.0** |
* 
Example: `<form action="/action_page.php" method="get">
   <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>  <button 
    type="submit">Submit</button>
  
 <button type="submit" formaction="/action_page2.php">Submit to another page</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_formaction.asp
*/
    formaction?: string;

    /**
* `<button formenctype>`
* 
* Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **9.0**  | **4.0**  |   **5.1**   | **10.0** |
* 
Example: `<form action="/action_page_binary.asp" method="post">
   <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname" value="Ståle"><br><br> 
 <button type="submit">Submit with character encoding</button>
  
 <button type="submit" formenctype="text/plain">Submit without character encoding</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_formenctype.asp
*/
    formenctype?: /**
     * Default. All characters will be encoded before sent
     *
     */
    | "application/x-www-form-urlencoded"

      /**
* This value is necessary if the user will upload a file through the 
    form
* 
*/
      | "multipart/form-data"

      /**
       * Sends data without any encoding at all. Not recommended
       *
       */
      | "text/plain";

    /**
* `<button formmethod>`
* 
* Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **9.0**  | **4.0**  |   **5.1**   | **10.0** |
* 
Example: `<form action="/action_page.php" method="get">
   <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>
  
 <button type="submit">Submit</button>
  
 <button type="submit" formmethod="post">Submit using POST</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_formmethod.asp
*/
    formmethod?: /**
     * Appends the form-data to the URL: URL?name=value&name=value
     *
     */
    | "get"

      /**
       * Sends the form-data as an HTTP post transaction
       *
       */
      | "post";

    /**
* `<button formnovalidate>`
* 
* Specifies that the form-data should not be validated on submission. Only for type="submit"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **6.0**  | **4.0**  |   **Yes**   | **11.0** |
* 
Example: `<form action="/action_page.php" method="get">
   <label for="email">Enter your email:</label>  <input 
    type="email" id="email" name="email"><br><br>
      <button type="submit">Submit</button>
  
 <button type="submit" formnovalidate>Submit without validation</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_formnovalidate.asp
*/
    formnovalidate?: string;

    /**
* `<button formtarget>`
* 
* Specifies where to display the response after submitting the form. Only for type="submit"
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **9.0**  | **4.0**  |   **5.1**   | **10.0** |
* 
Example: `<form action="/action_page.php" method="get">
   <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>
  
 <button type="submit" >Submit</button>
  
 <button type="submit" formtarget="_blank">Submit to a new window</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_formtarget.asp
*/
    formtarget?: /**
     * Loads the response in a new window/tab
     *
     */
    | "_blank"

      /**
       * Loads the response in the same frame (this is default)
       *
       */
      | "_self"

      /**
       * Loads the response in the parent frame
       *
       */
      | "_parent"

      /**
       * Loads the response in the full body of the window
       *
       */
      | "_top"

      /**
       * Loads the response in a named iframe
       *
       */
      | "framename";

    /**
* `<button name>`
* 
* Specifies a name for the button
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page.php" method="get">
  
 Choose your favorite subject:
  
 <button name="subject" type="submit" value="HTML">HTML</button>
  
 <button name="subject" type="submit" value="CSS">CSS</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_name.asp
*/
    name?: string;

    /**
* `<button type>`
* 
* Specifies the type of button
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>
  <button type="submit" value="Submit">Submit</button>
  <button type="reset" value="Reset">Reset</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_type.asp
*/
    type?: /**
     * The button is a clickable button
     *
     */
    | "button"

      /**
       * The button is a submit button (submits form-data)
       *
       */
      | "submit"

      /**
       * The button is a reset button (resets the form-data to its initial values)
       *
       */
      | "reset";

    /**
* `<button value>`
* 
* Specifies an initial value for the button
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page.php" method="get">
  
 Choose your favorite subject:
  
 <button name="subject" type="submit" value="fav_HTML">HTML</button>
  
 <button name="subject" type="submit" value="fav_CSS">CSS</button>
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_button_value.asp
*/
    value?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<button>`
* 
* Defines a clickable button
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_button.asp
*/
export class Button extends GlobalDom<HTMLElement> {
  constructor(props: ButtonProps = {}) {
    super({ node: document.createElement("button"), ...props });
  }
}
