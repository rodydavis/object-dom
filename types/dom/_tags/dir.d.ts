import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface DirProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<dir>`
 *
 * Not supported in HTML5. Use `<ul>` instead.Defines a directory list
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_dir.asp
 */
export declare class Dir extends GlobalDom<HTMLElement> {
    constructor(props?: DirProps);
}
