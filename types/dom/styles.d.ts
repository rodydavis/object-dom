import { ObjectDom } from "../object-dom";
export declare type PossibleStyle = NodeStyle<string> | "unset" | string | undefined;
export declare function convertClassList(value: string | string[] | undefined): string | undefined;
export declare class NodeStyle<T extends string> {
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
