import { CoreDom, NodeProps } from '../base';
import { Div } from './div';
export interface FormProps extends NodeProps {
    method: 'post' | 'get' | 'dialog';
    action: string;
    acceptCharset: string;
    target: '_self' | '_blank' | '_parent' | '_top';
    autocomplete: boolean;
    novalidate: boolean;
}
export declare class Form extends CoreDom<HTMLFormElement> {
    constructor(type: string, props: FormProps);
    onChange: Function;
}
export interface LabelProps extends NodeProps {
    value?: string;
    input?: string;
}
export declare class Label extends CoreDom<HTMLLabelElement> {
    constructor(props: LabelProps);
    set value(val: string | undefined);
}
export interface InputProps extends NodeProps {
    value?: string;
    name?: string;
    required?: boolean;
}
export declare class Input extends CoreDom<HTMLInputElement> {
    constructor(type: string, props: InputProps);
    get value(): string | undefined;
    set value(val: string | undefined);
    onChange: Function;
}
export declare class SubmitInput extends Input {
    constructor(props: InputProps);
}
export declare class TextInput extends Input {
    constructor(props: InputProps);
}
export declare class FileInput extends Input {
    constructor(props: InputProps);
}
export declare class NumberInput extends Input {
    constructor(props: InputProps);
}
export declare class PhoneInput extends Input {
    constructor(props: InputProps);
}
export declare class EmailInput extends Input {
    constructor(props: InputProps);
}
export declare class ColorInput extends Input {
    constructor(props: InputProps);
}
export interface InputGroupProps extends NodeProps {
    input?: InputProps;
    label?: LabelProps;
}
export declare class InputGroup extends Div {
    constructor(id: string, type: string, props?: InputGroupProps);
}
