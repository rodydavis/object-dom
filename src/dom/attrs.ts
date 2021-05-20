import type { ObjectDom } from "../base";
import type { CSSStyles } from "./styles";

export type AttrType = string | number | boolean;
export type PossibleAttr = AttrType | NodeAttr<AttrType> | undefined;

export class NodeAttr<T extends string | boolean | number> {
  constructor(root: ObjectDom<HTMLElement>, key: string, value: T | undefined) {
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
    if (typeof this.value === "string") {
      this.node.setAttribute(this._key, this.value);
      this._root.update();
      return;
    }
    if (typeof this.value === "boolean" && this.value) {
      this.node.setAttribute(this._key, this._key);
      this._root.update();
      return;
    }
    if (typeof this.value === "number" && this.value) {
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
    return this._root.render().node;
  }
}

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

export type Target = "_self" | "_blank" | "_parent" | "_top";
export type As =
  | "audio"
  | "document"
  | "embed"
  | "fetch"
  | "font"
  | "image"
  | "object"
  | "script"
  | "style"
  | "track"
  | "video"
  | "worker";

export type CrossOrigin = "anonymous" | "use-credentials";

export type Method = "post" | "get" | "dialog";

export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type StringBool = "true" | "false";

export type StringYesNo = "yes" | "no";

export type Direction = "ltr" | "rtl" | "auto";

export type AutoCapitalize = "off" | "none" | "on" | "sentences" | "words" | "characters";
export type InputMode =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";
