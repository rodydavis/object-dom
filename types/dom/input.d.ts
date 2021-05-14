import { GlobalDom, NodeProps } from '../base';
import { Div } from './div';
import { NodeAttr, InputType, Method, Target } from './attrs';
export interface FormProps extends NodeProps<HTMLFormElement> {
    method?: Method;
    action?: string;
    acceptCharset?: string;
    target?: Target;
    autocomplete?: 'on' | 'off';
    novalidate?: boolean;
}
export declare class Form extends GlobalDom<HTMLFormElement> {
    constructor(props?: FormProps);
    target: NodeAttr<Target>;
    acceptCharset: NodeAttr;
    method: NodeAttr<Method>;
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
export interface InputProps extends NodeProps<HTMLInputElement> {
    type?: InputType;
    value?: string;
    name?: string;
    required?: boolean;
}
export declare class Input extends GlobalDom<HTMLInputElement> {
    constructor(props?: InputProps);
    type: NodeAttr;
    name: NodeAttr;
    required: NodeAttr;
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
