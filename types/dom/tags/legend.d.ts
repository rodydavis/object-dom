import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface LegendProps extends NodeProps<HTMLLegendElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<legend>`
*
* Defines a caption for a `<fieldset>` element
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_legend.asp
*/
export declare class Legend extends GlobalDom<HTMLLegendElement> {
    constructor(props?: LegendProps);
}
