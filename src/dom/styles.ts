import { ObjectDom } from "../object-dom";
import { convertToPathCase } from "./utils";

export type PossibleStyle = string | NodeStyle<string> | undefined;

export function convertClassList(value: string | string[] | undefined): string | undefined {
  if (value) {
    if (typeof value === "string") return value;
    return value.join(" ");
  }
  return undefined;
}

export class NodeStyle<T extends string> {
  constructor(root: ObjectDom<HTMLElement>, key: string, value: T | undefined) {
    this._root = root;
    this._key = convertToPathCase(key);
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
      this.node.style.setProperty(this._key, this.value);
      this._root.update();
      return;
    }
  }

  clear() {
    this.node.style.setProperty(this._key, null);
    this._root.update();
  }

  public get node(): HTMLElement {
    return this._root.render().node;
  }
}
