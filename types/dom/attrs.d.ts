import type { ObjectDom } from "../base";
export declare type AttrType = string | number | boolean;
export declare type PossibleAttr = AttrType | undefined;
export declare class NodeAttr<T extends string | boolean | number> {
    constructor(root: ObjectDom<HTMLElement>, key: string, value: T | undefined);
    _value: T | null;
    _root: ObjectDom<HTMLElement>;
    _key: string;
    get value(): T | null;
    set value(value: T | null);
    update(): void;
    clear(): void;
    get node(): HTMLElement;
}
export interface GlobalAttrs {
    id?: string;
    className?: string;
    contenteditable?: StringBool;
    accesskey?: string;
    autocapitalize?: AutoCapitalize;
    dir?: Direction;
    draggable?: StringBool;
    enterkeyhint?: string;
    hidden?: boolean;
    inputmode?: InputMode;
    is?: string;
    lang?: string;
    nonce?: string;
    part?: string;
    slot?: string;
    spellcheck?: StringBool;
    style?: string;
    tabindex?: number;
    title?: string;
    translate?: StringYesNo;
}
export declare type Target = "_self" | "_blank" | "_parent" | "_top";
export declare type As = "audio" | "document" | "embed" | "fetch" | "font" | "image" | "object" | "script" | "style" | "track" | "video" | "worker";
export declare type CrossOrigin = "anonymous" | "use-credentials";
export declare type Method = "post" | "get" | "dialog";
export declare type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
export declare type StringBool = "true" | "false";
export declare type StringYesNo = "yes" | "no";
export declare type Direction = "ltr" | "rtl" | "auto";
export declare type AutoCapitalize = "off" | "none" | "on" | "sentences" | "words" | "characters";
export declare type InputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
