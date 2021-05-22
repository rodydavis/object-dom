import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface OptgroupProps extends NodeProps<HTMLOptGroupElement> {
    attributes?: {
        /**
    * `<optgroup disabled>`
    *
    * Specifies that an option-group should be disabled
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **8.0** |
    *
    Example: <label for="cars">Choose a car:<\/label><select       name="cars" id="cars">               <optgroup label="German Cars" disabled>                 <option value="mercedes">Mercedes<\/option>                 <option value="audi">Audi<\/option>               <\/optgroup>       <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_optgroup_disabled.asp
    */
        disabled?: string;
        /**
    * `<optgroup label>`
    *
    * Specifies a label for an option-group
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <label for="cars">Choose a car:<\/label><select       name="cars" id="cars">               <optgroup label="Swedish Cars">                 <option value="volvo">Volvo<\/option>                 <option value="saab">Saab<\/option>               <\/optgroup>               <optgroup label="German Cars">                 <option value="mercedes">Mercedes<\/option>                 <option value="audi">Audi<\/option>               <\/optgroup>       <\/select>
    *
    @see https://www.w3schools.com/TAGS/att_optgroup_label.asp
    */
        label?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<optgroup>`
*
* Defines a group of related options in a drop-down list
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_optgroup.asp
*/
export declare class Optgroup extends GlobalDom<HTMLOptGroupElement> {
    constructor(props?: OptgroupProps);
}
