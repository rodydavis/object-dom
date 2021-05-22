import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface FormProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<form accept-charset>`
* 
* Specifies the character encodings that are to be used for the form submission
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_form_accept-charset.asp
*/
    acceptCharset?: string;

    /**
* `<form action>`
* 
* Specifies where to send the form-data when a form is submitted
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form 
    action="/action_page.php"
    method="get">
  <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>  <input 
    type="submit" value="Submit"></form>`
* 
@see https://www.w3schools.com/TAGS/att_form_action.asp
*/
    action?: string;

    /**
* `<form autocomplete>`
* 
* Specifies whether a form should have autocomplete on or off
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **4.0**  |   **5.2**   | **Yes** |
* 
Example: `<form action="/action_page.php" method="get" autocomplete="on">
   <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="email">Email:</label>  
    <input type="text" id="email" name="email"><br><br>  <input 
    type="submit">
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_form_autocomplete.asp
*/
    autocomplete?: /**
     * Default. The browser will automatically complete values based on values that the user has entered before
     *
     */
      | "on"
      | /**
       * The user must enter a value into each field for every use. The browser does not automatically complete entries
       *
       */ "off";

    /**
* `<form enctype>`
* 
* Specifies how the form-data should be encoded when submitting it to the server (only for method="post")
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page_binary.asp"
 method="post" enctype="multipart/form-data">
  <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>  <input 
    type="submit" value="Submit">
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_form_enctype.asp
*/
    enctype?: /**
     * Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values)
     *
     */
      | "application/x-www-form-urlencoded"
      | /**
* This value is necessary if the user will upload a file through the 
    form
* 
*/ "multipart/form-data"
      | /**
       * Sends data without any encoding at all. Not recommended
       *
       */ "text/plain";

    /**
* `<form method>`
* 
* Specifies the HTTP method to use when sending form-data
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form 
    action="/action_page.php"
    method="get">
  <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>  <input 
    type="submit" value="Submit">
    </form>`
* 
@see https://www.w3schools.com/TAGS/att_form_method.asp
*/
    method?: /**
     * Default. Appends the form-data to the URL in name/value pairs: URL?name=value&name=value
     *
     */
      | "get"
      | /**
       * Sends the form-data as an HTTP post transaction
       *
       */ "post";

    /**
* `<form name>`
* 
* Specifies the name of a form
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form 
    action="/action_page.php"
    method="get" name="myForm">
  <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>  <input 
    type="button" onclick="formSubmit()" value="Send form data!">
    </form>`
* 
@see https://www.w3schools.com/TAGS/att_form_name.asp
*/
    name?: string;

    /**
* `<form novalidate>`
* 
* Specifies that the form should not be validated when submitted
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **4.0**  |   **10.1**   | **10.0** |
* 
Example: `<form action="/action_page.php" novalidate>
   <label for="email">Enter your email:</label>  <input 
    type="email" id="email" name="email"><br><br>  <input 
    type="submit">
 </form>`
* 
@see https://www.w3schools.com/TAGS/att_form_novalidate.asp
*/
    novalidate?: string;

    /**
* `<form rel>`
* 
* Specifies the relationship between a linked resource and the current 
    document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form rel="value">`
* 
@see https://www.w3schools.com/TAGS/att_form_rel.asp
*/
    rel?: /**
     * Specifies that the referenced document is not a part of the current site
     *
     */
      | "external"
      | /**
       * Links to a help document
       *
       */ "help"
      | /**
       * Links to copyright information for the document
       *
       */ "license"
      | /**
       * The next document in a selection
       *
       */ "next"
      | /**
* Links to an unendorsed document, like a paid link.
 ("nofollow" is used by Google, to specify that the Google search spider should not follow that link)
* 
*/ "nofollow"
      | /**
       */ "noopener"
      | /**
       * Specifies that the browser should not send a HTTP referrer header if the user follows the hyperlink
       *
       */ "noreferrer"
      | /**
       */ "opener"
      | /**
       * The previous document in a selection
       *
       */ "prev"
      | /**
       * Links to a search tool for the document
       *
       */ "search";

    /**
* `<form target>`
* 
* Specifies where to display the response that is received after submitting the form
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<form action="/action_page.php"
    method="get" target="_blank">
  <label for="fname">First name:</label>  <input type="text" id="fname" 
    name="fname"><br><br>  <label for="lname">Last name:</label>  
    <input type="text" id="lname" name="lname"><br><br>  <input 
    type="submit" value="Submit">
    </form>`
* 
@see https://www.w3schools.com/TAGS/att_form_target.asp
*/
    target?: /**
     * The response is displayed in a new window or tab
     *
     */
      | "_blank"
      | /**
       * The response is displayed in the same frame (this is default)
       *
       */ "_self"
      | /**
       * The response is displayed in the parent frame
       *
       */ "_parent"
      | /**
       * The response is displayed in the full body of the window
       *
       */ "_top"
      | /**
       * The response is displayed in a named iframe
       *
       */ "framename";
    [key: string]: PossibleAttr;
  };
}

/**
* `<form>`
* 
* Defines an HTML form for user input
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_form.asp
*/
export class Form extends GlobalDom<HTMLElement> {
  constructor(props: FormProps = {}) {
    super({ node: document.createElement("form"), ...props });
  }
}
