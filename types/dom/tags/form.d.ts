import { GlobalDom, Method, NodeAttr, NodeProps, Target } from "../../object-dom";
export interface FormProps extends NodeProps<HTMLFormElement> {
    method?: Method;
    action?: string;
    acceptCharset?: string;
    target?: Target;
    autocomplete?: "on" | "off";
    novalidate?: boolean;
}
/**
 * Defines an HTML form for user input.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_form.asp
 */
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
