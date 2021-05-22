import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface FigureProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<figure>`
*
* Specifies self-contained content
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **8.0**  | **4.0**  |   **5.1**   | **9.0** |
*
@see https://www.w3schools.com/TAGS/tag_figure.asp
*/
export declare class Figure extends GlobalDom<HTMLElement> {
    constructor(props?: FigureProps);
}
