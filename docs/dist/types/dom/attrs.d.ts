import type { ObjectDom } from "../base";
import type { CSSStyles } from "../styles";
export declare class NodeAttr<T extends string | boolean | number = string> {
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
export declare type StringBool = 'true' | 'false';
export declare type StringYesNo = 'yes' | 'no';
export declare type Direction = 'ltr' | 'rtl' | 'auto';
export declare type AutoCapitalize = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
export declare type InputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
export interface GlobalAttrs {
    id?: string;
    className?: string | string[];
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
    style?: CSSStyles | string;
    tabindex?: number;
    title?: string;
    translate?: StringYesNo;
}
