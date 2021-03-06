import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DetailsProps extends NodeProps<HTMLDetailsElement> {
    attributes?: {
        /**
    * `<details open>`
    *
    * Specifies that the details should be visible (open) to the user
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **12.0**  | **49.0**  |   **6.0**   | **79.0** |
    *
    Example: <details open>  <summary>Epcot Center<\/summary>  <p>Epcot is a      theme park at Walt Disney World Resort featuring exciting attractions,      international pavilions, award-winning fireworks and seasonal special      events.<\/p><\/details>
    *
    @see https://www.w3schools.com/TAGS/att_details_open.asp
    */
        open?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<details>`
*
* Defines additional details that the user can view or hide
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **12.0**  | **49.0**  |   **6.0**   | **79.0** |
*
@see https://www.w3schools.com/TAGS/tag_details.asp
*/
export declare class Details extends GlobalDom<HTMLDetailsElement> {
    constructor(props?: DetailsProps);
}
