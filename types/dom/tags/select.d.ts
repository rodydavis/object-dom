import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface SelectProps extends NodeProps<HTMLSelectElement> {
    attributes?: {
        /**
    * `<select autofocus>`
    *
    * Specifies that the drop-down list should automatically get focus when the page loads
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Not supported**  |   **Yes**   | **10.0** |
    *
    Example: <label for="cars">Choose a car:<\/label><select      name="cars" id="cars" autofocus>     <option value="volvo">Volvo<\/option>     <option value="saab">Saab<\/option>     <option value="opel">Opel<\/option>     <option value="audi">Audi<\/option>  <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_select_autofocus.asp
    */
        autofocus?: string;
        /**
    * `<select disabled>`
    *
    * Specifies that a drop-down list should be disabled
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **9.0** |
    *
    Example: <label for="cars">Choose a car:<\/label><select      name="cars" id="cars" disabled>               <option value="volvo">Volvo<\/option>               <option value="saab">Saab<\/option>               <option value="mercedes">Mercedes<\/option>               <option value="audi">Audi<\/option>       <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_select_disabled.asp
    */
        disabled?: string;
        /**
    * `<select form>`
    *
    * Defines which form the drop-down list belongs to
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <form action="\/action_page.php" id="carform">   <label for="fname">Firstname:<\/label>  <input type="text" id="fname"      name="fname">   <input type="submit">  <\/form>       <label for="cars">Choose a car:<\/label><select      name="cars" id="cars" form="carform">     <option value="volvo">Volvo<\/option>     <option value="saab">Saab<\/option>     <option value="opel">Opel<\/option>     <option value="audi">Audi<\/option>  <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_select_form.asp
    */
        form?: string;
        /**
    * `<select multiple>`
    *
    * Specifies that multiple options can be selected at once
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <label for="cars">Choose a car:<\/label><select      name="cars" id="cars" multiple>               <option value="volvo">Volvo<\/option>               <option value="saab">Saab<\/option>               <option value="opel">Opel<\/option>               <option value="audi">Audi<\/option>       <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_select_multiple.asp
    */
        multiple?: string;
        /**
    * `<select name>`
    *
    * Defines a name for the drop-down list
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <label for="cars">Choose a car:<\/label><select      name="cars" id="cars">               <option value="volvo">Volvo<\/option>               <option value="saab">Saab<\/option>     <option value="opel">Opel<\/option>               <option value="audi">Audi<\/option>       <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_select_name.asp
    */
        name?: string;
        /**
    * `<select required>`
    *
    * Specifies that the user is required to select a value before submitting the form
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **4.0**  |   **Yes**   | **10.0** |
    *
    Example: <label for="cars">Choose a car:<\/label><select      name="cars" id="cars" required>  <option value="">None<\/option>               <option value="volvo">Volvo<\/option>               <option value="saab">Saab<\/option>               <option value="mercedes">Mercedes<\/option>               <option value="audi">Audi<\/option>       <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_select_required.asp
    */
        required?: string;
        /**
    * `<select size>`
    *
    * Defines the number of visible options in a drop-down list
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <label for="cars">Choose a car:<\/label><select      name="cars" id="cars" size="3">     <option value="volvo">Volvo<\/option>     <option value="saab">Saab<\/option>     <option value="opel">Opel<\/option>     <option value="audi">Audi<\/option>  <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_select_size.asp
    */
        size?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<select>`
*
* Defines a drop-down list
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_select.asp
*/
export declare class Select extends GlobalDom<HTMLSelectElement> {
    constructor(props?: SelectProps);
}
