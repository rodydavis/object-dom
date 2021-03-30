import type { ObjectDom } from "../base";
import type { CSSStyles } from "../styles";

export class NodeAttr<T extends string | boolean | number = string> {
    constructor(
        root: ObjectDom<HTMLElement>,
        key: string,
        value: T | undefined,
    ) {
        this._root = root;
        this._key = key;
        this._value = value ?? null;
        this.update();
    }

    _value: T | null;
    _root: ObjectDom<HTMLElement>;
    _key: string;

    public get value(): T | null {
        return this._value;
    }

    public set value(value: T | null) {
        this._value = value;
        this.update();
    }

    update() {
        if (this.value === null) {
            this.clear();
            return;
        }
        if (typeof this.value === 'string') {
            this.node.setAttribute(this._key, this.value);
            this._root.update();
            return;
        }
        if (typeof this.value === 'boolean' && this.value) {
            this.node.setAttribute(this._key, this._key);
            this._root.update();
            return;
        }
        if (typeof this.value === 'number' && this.value) {
            this.node.setAttribute(this._key, this._key);
            this._root.update();
            return;
        }
    }

    clear() {
        this.node.removeAttribute(this._key);
        this._root.update();
    }

    public get node(): HTMLElement {
        return this._root.build();
    }
}

export type StringBool = 'true' | 'false';
export type StringYesNo = 'yes' | 'no';
export type Direction = 'ltr' | 'rtl' | 'auto';
export type AutoCapitalize = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
export type InputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

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