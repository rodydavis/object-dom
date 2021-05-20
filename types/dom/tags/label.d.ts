import { GlobalDom, NodeProps } from "../../object-dom";
export interface LabelProps extends NodeProps<HTMLLabelElement> {
    value?: string;
    htmlFor?: string;
}
/**
 * Defines a label for an `<input>` element.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_label.asp
 */
export declare class Label extends GlobalDom<HTMLLabelElement> {
    constructor(props?: LabelProps);
    get value(): string | undefined;
    set value(val: string | undefined);
}
