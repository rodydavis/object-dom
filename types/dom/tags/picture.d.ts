import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface PictureProps extends NodeProps<HTMLPictureElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<picture>`
*
* Defines a container for multiple image resources
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **38.0**  | **38.0**  |   **9.1**   | **13.0** |
*
@see https://www.w3schools.com/TAGS/tag_picture.asp
*/
export declare class Picture extends GlobalDom<HTMLPictureElement> {
    constructor(props?: PictureProps);
}
