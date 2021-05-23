import { GlobalAttrs } from "./dom/attrs";
import { NodeEvents } from "./events";
import { AttrType, CSSStyles, NodeAttr, NodeStyle, PossibleAttr, PossibleStyle } from "./object-dom";
export interface NodeAttrs extends GlobalAttrs {
    [key: string]: PossibleAttr;
}
export interface NodeStyles extends CSSStyles {
    [key: string]: PossibleStyle;
}
export declare type NodeArray = Array<ObjectDom | string | Comment>;
export interface NodeProps<T extends HTMLElement = HTMLElement> {
    node?: T;
    text?: string;
    children?: NodeArray;
    attributes?: NodeAttrs;
    events?: NodeEvents;
    onCreate?: ((node: HTMLElement) => void) | undefined;
}
export declare abstract class ObjectDom<T extends HTMLElement = HTMLElement> {
    abstract render(): ObjectDom<T> | GlobalDom<T>;
    renderDom(): GlobalDom<HTMLElement>;
    update: () => void;
    onCreate: (node: HTMLElement) => void;
}
interface NodeEvent {
    callback: EventListenerOrEventListenerObject;
    options: boolean | AddEventListenerOptions | undefined;
}
export declare class GlobalDom<T extends HTMLElement> extends ObjectDom<T> {
    props: NodeProps<T>;
    attributes: {
        [key: string]: NodeAttr<string | boolean | number>;
    };
    styles: {
        [key: string]: NodeStyle<string>;
    };
    _children: NodeArray;
    _node: HTMLElement;
    _events: {
        [key: string]: NodeEvent[];
    };
    constructor(props: NodeProps<T>);
    addAttr(key: string, value: PossibleAttr): void;
    setAttr(key: string, value: AttrType): void;
    addStyle(key: string, value: PossibleStyle): void;
    setStyle(key: string, value: string): void;
    render(): this;
    get node(): HTMLElement;
    get children(): NodeArray;
    set children(value: NodeArray);
    addChild(value: ObjectDom<HTMLElement> | string, index?: number | undefined): void;
    removeChild(index: number): void;
    private _text;
    get text(): string | undefined;
    set text(text: string | undefined);
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | undefined, options?: boolean | AddEventListenerOptions | undefined): void;
    toString: () => string;
}
export declare function generateCode(source: GlobalDom<HTMLElement>): string;
export declare function generateNode(source: GlobalDom<HTMLElement>): HTMLElement;
export {};
