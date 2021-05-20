import { GlobalDom, InputType, NodeProps } from "../../object-dom";
export interface InputProps extends NodeProps<HTMLInputElement> {
    type?: InputType;
    value?: string;
    name?: string;
    required?: boolean;
}
/**
 * Defines an input control.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_input.asp
 */
export declare class Input extends GlobalDom<HTMLInputElement> {
    constructor(props?: InputProps);
    get value(): string | undefined;
    set value(val: string | undefined);
    onChange: Function;
}
