import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface TextareaProps extends NodeProps<HTMLTextAreaElement> {
    attributes?: {
        /**
    * `<textarea autofocus>`
    *
    * Specifies that a text area should automatically get focus when the page loads
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **4.0**  |   **Yes**   | **10.0** |
    *
    Example: <textarea autofocus>  At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.   <\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_autofocus.asp
    */
        autofocus?: string;
        /**
    * `<textarea cols>`
    *
    * Specifies the visible width of a text area
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <textarea rows="4" cols="50">  At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.   <\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_cols.asp
    */
        cols?: string;
        /**
    * `<textarea dirname>`
    *
    * Specifies that the text direction of the textarea will be submitted
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **No**  |   **Yes**   | **79.0** |
    *
    Example: <form action="\/action_page.php">     Text:  <textarea name="explanation" dirname="explanation.dir"><\/textarea>    <input type="submit" value="Submit">  <\/form>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_dirname.asp
    */
        dirname?: string;
        /**
    * `<textarea disabled>`
    *
    * Specifies that a text area should be disabled
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <textarea disabled>  At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.   <\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_disabled.asp
    */
        disabled?: string;
        /**
    * `<textarea form>`
    *
    * Specifies which form the text area belongs to
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **11.0** |
    *
    Example: <form action="\/action_page.php" id="usrform">     Name: <input type="text" name="usrname">     <input type="submit">  <\/form>    <textarea name="comment" form="usrform">Enter text here...<\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_form.asp
    */
        form?: string;
        /**
    * `<textarea maxlength>`
    *
    * Specifies the maximum number of characters allowed in the text area
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **4.0**  |   **Yes**   | **10.0** |
    *
    Example: <textarea maxlength="50">  Enter text here...  <\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_maxlength.asp
    */
        maxlength?: string;
        /**
    * `<textarea name>`
    *
    * Specifies a name for a text area
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <form action="\/action_page.php">     <textarea name="comment">Enter text here...<\/textarea>     <input type="submit">  <\/form>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_name.asp
    */
        name?: string;
        /**
    * `<textarea placeholder>`
    *
    * Specifies a short hint that describes the expected value of a text area
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **4.0**  |   **5.0**   | **10.0** |
    *
    Example: <textarea placeholder="Describe yourself here..."><\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_placeholder.asp
    */
        placeholder?: string;
        /**
    * `<textarea readonly>`
    *
    * Specifies that a text area should be read-only
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <textarea readonly>  At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.   <\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_readonly.asp
    */
        readonly?: string;
        /**
    * `<textarea required>`
    *
    * Specifies that a text area is required/must be filled out
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **4.0**  |   **Yes**   | **10.0** |
    *
    Example: <form action="\/action_page.php">     <textarea name="comment" required><\/textarea>     <input type="submit">  <\/form>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_required.asp
    */
        required?: string;
        /**
    * `<textarea rows>`
    *
    * Specifies the visible number of lines in a text area
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <textarea rows="4" cols="50">  At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.   <\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_rows.asp
    */
        rows?: string;
        /**
    * `<textarea wrap>`
    *
    * Specifies how the text in a text area is to be wrapped when submitted in a form
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <textarea rows="2" cols="20" wrap="hard">  At W3Schools you will find free Web-building tutorials.   <\/textarea>
    *
    @see https://www.w3schools.com/TAGS/att_textarea_wrap.asp
    */
        wrap?: "soft"
        /**
  * The text in the textarea is wrapped (contains newlines) when submitted in a form.
    When "hard" is used, the cols attribute must be specified
  *
  */
         | "hard";
        [key: string]: PossibleAttr;
    };
}
/**
* `<textarea>`
*
* Defines a multiline input control (text area)
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_textarea.asp
*/
export declare class Textarea extends GlobalDom<HTMLTextAreaElement> {
    constructor(props?: TextareaProps);
}
