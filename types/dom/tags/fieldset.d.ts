import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Groups related elements in a form.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_fieldset.asp
 */
export declare class FieldSet extends GlobalDom<HTMLFieldSetElement> {
    constructor(props?: NodeProps<HTMLFieldSetElement>);
}