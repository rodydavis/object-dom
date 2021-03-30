import { GlobalDom, NodeProps } from '../base';
import { Div } from './div';
import { NodeAttr } from './attrs';
export interface FormProps extends NodeProps<HTMLFormElement> {
    method?: 'post' | 'get' | 'dialog';
    action?: string;
    acceptCharset?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    autocomplete?: 'on' | 'off';
    novalidate?: boolean;
}
export declare class Form extends GlobalDom<HTMLFormElement> {
    constructor(props?: FormProps);
    target: NodeAttr;
    acceptCharset: NodeAttr;
    method: NodeAttr;
    action: NodeAttr;
    autocomplete: NodeAttr;
    novalidate: NodeAttr<boolean>;
    onChange: Function;
}
export interface LabelProps extends NodeProps<HTMLLabelElement> {
    value?: string;
    input?: string;
}
export declare class Label extends GlobalDom<HTMLLabelElement> {
    constructor(props?: LabelProps);
    input: NodeAttr;
    get value(): string | undefined;
    set value(val: string | undefined);
}
declare type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export interface InputProps extends NodeProps<HTMLInputElement> {
    type?: InputType;
    value?: string;
    name?: string;
    required?: boolean;
}
export declare class Input extends GlobalDom<HTMLInputElement> {
    constructor(props?: InputProps);
    get value(): string | undefined;
    set value(val: string | undefined);
    onChange: Function;
}
export interface InputGroupProps extends NodeProps<HTMLDivElement> {
    input?: InputProps;
    label?: LabelProps;
}
export declare class InputGroup extends Div {
    constructor(id: string, type: InputType, props?: InputGroupProps);
}
export {};
