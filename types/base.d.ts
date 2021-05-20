import { GlobalAttrs } from "./dom/attrs";
import { AttrType, NodeAttr, NodeStyle, PossibleAttr, PossibleStyle } from "./object-dom";
export declare type NodeAttrs = {
    [key: string]: PossibleAttr;
};
export declare type NodeStyles = {
    [key: string]: PossibleStyle;
};
export declare type NodeArray = Array<ObjectDom | string>;
export interface NodeProps<T extends HTMLElement = HTMLElement> extends GlobalAttrs {
    node?: T;
    text?: string;
    children?: NodeArray;
    attributes?: NodeAttrs;
    styles?: NodeStyles;
}
export interface ObjectDomProps<T extends HTMLElement = HTMLElement> extends NodeProps<T> {
    node: T;
}
export declare abstract class ObjectDom<T extends HTMLElement = HTMLElement> {
    abstract render: () => GlobalDom<T>;
    update: () => void;
}
export declare class GlobalDom<T extends HTMLElement = HTMLElement> extends ObjectDom<T> {
    private props;
    attributes: {
        [key: string]: NodeAttr<string | boolean | number>;
    };
    styles: {
        [key: string]: NodeStyle<string>;
    };
    _children: NodeArray;
    constructor(props: ObjectDomProps<T>);
    addAttr(key: string, value: PossibleAttr): void;
    setAttr(key: string, value: AttrType): void;
    addStyle(key: string, value: PossibleStyle): void;
    setStyle(key: string, value: string): void;
    render: () => this;
    get node(): T;
    get children(): NodeArray;
    set children(value: NodeArray);
    get rootNode(): T;
    set rootNode(value: T);
    addChild(value: ObjectDom<HTMLElement> | string, index?: number | undefined): void;
    removeChild(index: number): void;
    private _text;
    get text(): string | undefined;
    set text(text: string | undefined);
    addEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    toString: () => string;
}
