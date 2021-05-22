import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DialogProps extends NodeProps<HTMLDialogElement> {
    attributes?: {
        /**
    * `<dialog open>`
    *
    * Specifies that the dialog element is active and that the user can interact with it
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **37.0**  | **53.0***  |   **Not supported**   | **79.0** |
    *
    Example: <dialog open>This is an open dialog window<\/dialog>
    *
    @see https://www.w3schools.com/TAGS/att_dialog_open.asp
    */
        open?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<dialog>`
*
* Defines a dialog box or window
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **37.0**  | **53.0***  |   **Not supported**   | **79.0** |
*
@see https://www.w3schools.com/TAGS/tag_dialog.asp
*/
export declare class Dialog extends GlobalDom<HTMLDialogElement> {
    constructor(props?: DialogProps);
}
