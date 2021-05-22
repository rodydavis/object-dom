import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface StyleProps extends NodeProps<HTMLStyleElement> {
    attributes?: {
        /**
    * `<style media>`
    *
    * Specifies what media/device the media resource is optimized for
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <style media="print">  h1 \{color:#000000;\}  p \{color:#000000;\}  body \{background-color:#FFFFFF;\}    <\/style>
    *
    @see https://www.w3schools.com/TAGS/att_style_media.asp
    */
        media?: "and"
        /**
         * Specifies a NOT operator
         *
         */
         | "not"
        /**
         * Specifies an OR operator
         *
         */
         | ",";
        /**
    * `<style type>`
    *
    * Specifies the media type of the <style> tag
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
    *
    Example: <style type="text\/css">  h1 \{color:red;\}  p \{color:blue;\}  <\/style>
    *
    @see https://www.w3schools.com/TAGS/att_style_type.asp
    */
        type?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<style>`
*
* Defines style information for a document
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
*
@see https://www.w3schools.com/TAGS/tag_style.asp
*/
export declare class Style extends GlobalDom<HTMLStyleElement> {
    constructor(props?: StyleProps);
}
