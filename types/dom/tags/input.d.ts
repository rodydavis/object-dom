import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface InputProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
    * `<input accept>`
    *
    * Specifies a filter for what file types the user can pick from the file
        input dialog box (only for type="file")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **26.0**  | **37.0**  |   **11.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="img">Select image:</label>  <input type="file" id="img"
        name="img" accept="image/*">  <input type="submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_accept.asp
    */
        accept?: "file_extension"
        /**
         * The user can pick all sound files
         *
         */
         | "audio/*"
        /**
         * The user can pick all video files
         *
         */
         | "video/*"
        /**
         * The user can pick all image files
         *
         */
         | "image/*"
        /**
  * A valid media type, with no parameters. Look at
   IANA Media Types for a complete list of standard media types
  *
  */
         | "media_type";
        /**
    * `<input alt>`
    *
    * Specifies an alternate text for images (only for type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form action="/action_page.php">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname">
      
     <input type="image" src="submit.gif" alt="Submit" width="48" height="48">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_alt.asp
    */
        alt?: string;
        /**
    * `<input autocomplete>`
    *
    * Specifies whether an <input> element should have autocomplete enabled
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **17.0**  | **2.0**  |   **5.1**   | **6.0** |
    *
    Example: `<form action="/action_page.php" autocomplete="on">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>  <label
        for="email">Email:</label>  <input type="email" id="email"
        name="email" autocomplete="off"><br><br>  <input type="submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_autocomplete.asp
    */
        autocomplete?: "on"
        /**
         * Specifies that autocomplete is off (disabled)
         *
         */
         | "off";
        /**
    * `<input autofocus>`
    *
    * Specifies that an <input> element should automatically get focus when the page loads
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **5.0**  | **4.0**  |   **5.0**   | **11.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname" autofocus><br><br>  <label for="lname">Last
        name:</label>  <input type="text" id="lname" name="lname"><br><br>
        <input type="submit"></form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_autofocus.asp
    */
        autofocus?: string;
        /**
    * `<input checked>`
    *
    * Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form
        action="/action_page.php">
       <input type="checkbox" name="vehicle1" value="Bike">  <label
        for="vehicle1"> I have a bike</label><br>  <input type="checkbox"
        name="vehicle2" value="Car">  <label for="vehicle2"> I have a
        car</label><br>  <input type="checkbox" name="vehicle3"
        value="Boat" checked>  <label for="vehicle3"> I have a
        boat</label><br><br>  <input type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_checked.asp
    */
        checked?: string;
        /**
    * `<input dirname>`
    *
    * Specifies that the text direction will be submitted
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Not supported**  |   **Yes**   | **79.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname" dirname="fname.dir">  <input type="submit"
        value="Submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_dirname.asp
    */
        dirname?: string;
        /**
    * `<input disabled>`
    *
    * Specifies that an <input> element should be disabled
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form
        action="/action_page.php">
      <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" disabled><br><br>
        <input type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_disabled.asp
    */
        disabled?: string;
        /**
    * `<input form>`
    *
    * Specifies the form the <input> element belongs to
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **5.1**   | **Yes** |
    *
    Example: `<form action="/action_page.php" id="form1">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <input type="submit" value="Submit"></form>
        <label for="lname">Last name:</label><input type="text" id="lname"
        name="lname" form="form1">`
    *
    @see https://www.w3schools.com/TAGS/att_input_form.asp
    */
        form?: string;
        /**
    * `<input formaction>`
    *
    * Specifies the URL of the file that will process the input control when the form is submitted (for type="submit" and type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **5.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>  <input
        type="submit" value="Submit">  <input type="submit" formaction="/action_page2.php"
        value="Submit to another page"></form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_formaction.asp
    */
        formaction?: string;
        /**
    * `<input formenctype>`
    *
    * Specifies how the form-data should be encoded when submitting it to the server (for type="submit" and type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **5.1**   | **10.0** |
    *
    Example: `<form action="/action_page_binary.asp" method="post">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <input type="submit" value="Submit">
        <input type="submit" formenctype="multipart/form-data" value="Submit as
        Multipart/form-data">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_formenctype.asp
    */
        formenctype?: "application/x-www-form-urlencoded"
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
    * `<input formmethod>`
    *
    * Defines the HTTP method for sending data to the action URL (for type="submit" and type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **5.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php" method="get">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>  <input
        type="submit" value="Submit">  <input type="submit" formmethod="post"
        value="Submit using POST">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_formmethod.asp
    */
        formmethod?: "get"
        /**
         * Sends the form-data as an HTTP post transaction
         *
         */
         | "post";
        /**
    * `<input formnovalidate>`
    *
    * Defines that form elements should not be validated when submitted
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **10.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="email">Enter your email:</label>  <input
        type="email" id="email" name="email"><br><br>  <input type="submit"
        value="Submit">  <input type="submit" formnovalidate="formnovalidate"
        value="Submit without validation">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_formnovalidate.asp
    */
        formnovalidate?: string;
        /**
    * `<input formtarget>`
    *
    * Specifies where to display the response that is received after submitting the form (for type="submit" and type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **5.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <input type="text" id="fname" name="fname"><br><br>  <label
        for="lname">Last name:</label>  <input type="text" id="lname"
        name="lname"><br><br>
      
     <input type="submit" value="Submit as normal">
      
     <input type="submit" formtarget="_blank" value="Submit to a new window">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_formtarget.asp
    */
        formtarget?: "_blank"
        /**
         * The response is displayed in the same frame (this is default)
         *
         */
         | "_self"
        /**
         * The response is displayed in the parent frame
         *
         */
         | "_parent"
        /**
         * The response is displayed in the full body of the window
         *
         */
         | "_top"
        /**
         * The response is displayed in a named iframe
         *
         */
         | "framename";
        /**
    * `<input height>`
    *
    * Specifies the height of an <input> element (only for type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **16.0**  |   **Yes**   | **Yes** |
    *
    Example: `<form action="/action_page.php">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
     <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_height.asp
    */
        height?: string;
        /**
    * `<input list>`
    *
    * Refers to a <datalist> element that contains pre-defined options for an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **20.0**  | **4.0**  |   **Not supported**   | **10.0** |
    *
    Example: `<input list="browsers">
     <datalist id="browsers">
      
     <option value="Internet Explorer">
      
     <option value="Firefox">
      
     <option value="Google Chrome">
      
     <option value="Opera">
      
     <option value="Safari">
     </datalist>`
    *
    @see https://www.w3schools.com/TAGS/att_input_list.asp
    */
        list?: string;
        /**
    * `<input max>`
    *
    * Specifies the maximum value for an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **5.0**  | **16.0**  |   **5.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
      <label for="datemax">Enter a date before 1980-01-01:</label>
        <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
          <label for="datemin">Enter a date after 2000-01-01:</label>
        <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>
          <label for="quantity">Quantity (between 1 and 5):</label>
        <input type="number" id="quantity" name="quantity" min="1" max="5"><br><br>
          <input type="submit"></form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_max.asp
    */
        max?: "number"
        /**
         * Specifies the maximum date allowed
         *
         */
         | "date";
        /**
    * `<input maxlength>`
    *
    * Specifies the maximum number of characters allowed in an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form
        action="/action_page.php">
      <label for="username">Username:</label>  <input type="text"
        id="username" name="username" maxlength="10"><br><br>  <input
        type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_maxlength.asp
    */
        maxlength?: string;
        /**
    * `<input min>`
    *
    * Specifies a minimum value for an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **5.0**  | **16.0**  |   **5.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
      <label for="datemax">Enter a date before 1980-01-01:</label>
        <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
          <label for="datemin">Enter a date after 2000-01-01:</label>
        <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>
          <label for="quantity">Quantity (between 1 and 5):</label>
        <input type="number" id="quantity" name="quantity" min="1" max="5"><br><br>
          <input type="submit">
    </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_min.asp
    */
        min?: "number"
        /**
         * Specifies the minimum date allowed
         *
         */
         | "date";
        /**
    * `<input minlength>`
    *
    * Specifies the minimum number of characters required in an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **40.0**  | **51.0**  |   **10.1**   | **17.0** |
    *
    Example: `<form
        action="/action_page.php">
      <label for="password">Password:</label>  <input type="password"
        id="password" name="password" minlength="8"><br><br>  <input
        type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_minlength.asp
    */
        minlength?: string;
        /**
    * `<input multiple>`
    *
    * Specifies that a user can enter more than one value in an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **6.0**  | **3.6**  |   **5.0**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="files">Select files:</label>  <input type="file"
        id="files" name="files" multiple><br><br>  <input type="submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_multiple.asp
    */
        multiple?: string;
        /**
    * `<input name>`
    *
    * Specifies the name of an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form
        action="/action_page.php">
      <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>  <input
        type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_name.asp
    */
        name?: string;
        /**
    * `<input pattern>`
    *
    * Specifies a regular expression that an <input> element's value is checked against
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **5.0**  | **4.0**  |   **10.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="country_code">Country code:</label>  <input
        type="text" id="country_code" name="country_code"  pattern="[A-Za-z]{3}"
        title="Three letter country code"><br><br>  <input type="submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_pattern.asp
    */
        pattern?: string;
        /**
    * `<input placeholder>`
    *
    * Specifies a short hint that describes the expected value of an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **10.0**  | **4.0**  |   **5.0**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="phone">Enter a phone number:</label><br><br>
        <input type="tel" id="phone" name="phone" placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br><br>  <small>Format:
        123-45-678</small><br><br>  <input type="submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_placeholder.asp
    */
        placeholder?: string;
        /**
    * `<input readonly>`
    *
    * Specifies that an input field is read-only
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form
        action="/action_page.php">
          <label for="country">Country:</label>   <input type="text"
        id="country" name="country" value="Norway" readonly><br><br>
        <input type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_readonly.asp
    */
        readonly?: string;
        /**
    * `<input required>`
    *
    * Specifies that an input field must be filled out before submitting the form
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **5.0**  | **4.0**  |   **10.1**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="username">Username:</label>  <input type="text"
        id="username" name="username" required>  <input type="submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_required.asp
    */
        required?: string;
        /**
    * `<input size>`
    *
    * Specifies the width, in characters, of an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form
        action="/action_page.php">
      <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname" size="50"><br><br>  <label for="pin">PIN:</label>
        <input type="text" id="pin" name="pin" maxlength="4" size="4"><br><br>
        <input type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_size.asp
    */
        size?: string;
        /**
    * `<input src>`
    *
    * Specifies the URL of the image to use as a submit button (only for
        type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form action="/action_page.php">
      <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <input type="image" src="submit.gif"
        alt="Submit" width="48" height="48">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_src.asp
    */
        src?: string;
        /**
    * `<input step>`
    *
    * Specifies the interval between legal numbers in an input field
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **6.0**  | **16.0**  |   **5.0**   | **10.0** |
    *
    Example: `<form action="/action_page.php">
       <label for="points">Points:</label>  <input type="number"
        id="points" name="points" step="3">  <input type="submit"></form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_step.asp
    */
        step?: "number"
        /**
         */
         | "any";
        /**
    * `<input type>`
    *
    * Specifies the type <input> element to display
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form action="/action_page.php">
      
        <label for="username">Username: </label>  <input type="text"
        id="username" name="username"><br>
      
     <input type="submit" value="Submit">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_type.asp
    */
        type?: "button"
        /**
         * Defines a checkbox
         *
         */
         | "checkbox"
        /**
         * Defines a color picker
         *
         */
         | "color"
        /**
         * Defines a date control (year, month, day (no time))
         *
         */
         | "date"
        /**
         * Defines a date and time control (year,  month, day, time (no timezone)
         *
         */
         | "datetime-local"
        /**
         * Defines a field for an e-mail address
         *
         */
         | "email"
        /**
         * Defines a file-select field and a "Browse" button (for file uploads)
         *
         */
         | "file"
        /**
         * Defines a hidden input field
         *
         */
         | "hidden"
        /**
         * Defines an image as the submit button
         *
         */
         | "image"
        /**
         * Defines a month and year control (no timezone)
         *
         */
         | "month"
        /**
         * Defines a field for entering a number
         *
         */
         | "number"
        /**
         * Defines a password field
         *
         */
         | "password"
        /**
         * Defines a radio button
         *
         */
         | "radio"
        /**
         * Defines a range control (like a slider control)
         *
         */
         | "range"
        /**
         * Defines a reset button
         *
         */
         | "reset"
        /**
         * Defines a text field for entering a search string
         *
         */
         | "search"
        /**
         * Defines a submit button
         *
         */
         | "submit"
        /**
         * Defines a field for entering a telephone number
         *
         */
         | "tel"
        /**
         * Default. Defines a single-line text field
         *
         */
         | "text"
        /**
         * Defines a control for entering a time (no timezone)
         *
         */
         | "time"
        /**
         * Defines a field for entering a URL
         *
         */
         | "url"
        /**
         * Defines a week and year control (no timezone)
         *
         */
         | "week";
        /**
    * `<input value>`
    *
    * Specifies the value of an <input> element
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: `<form
        action="/action_page.php">
      <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname" value="John"><br><br>  <label for="lname">Last
        name:</label>  <input type="text" id="lname" name="lname"
        value="Doe"><br><br>  <input type="submit" value="Submit">
        </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_value.asp
    */
        value?: string;
        /**
    * `<input width>`
    *
    * Specifies the width of an <input> element (only for type="image")
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **16.0**  |   **Yes**   | **Yes** |
    *
    Example: `<form action="/action_page.php">
       <label for="fname">First name:</label>  <input type="text" id="fname"
        name="fname"><br><br>  <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
     <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
     </form>`
    *
    @see https://www.w3schools.com/TAGS/att_input_width.asp
    */
        width?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<input>`
*
* Defines an input control
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_input.asp
*/
export declare class Input extends GlobalDom<HTMLElement> {
    constructor(props?: InputProps);
}
