import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface AppletProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<applet>`
 *
 * Not supported in HTML5. Use `<embed>` or <object> instead.Defines an embedded applet
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_applet.asp
 */
export declare class Applet extends GlobalDom<HTMLElement> {
    constructor(props?: AppletProps);
}
