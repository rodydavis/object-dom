import { AutoCapitalize, Direction, GlobalAttrs, InputMode, NodeAttr, StringBool, StringYesNo } from './dom/attrs';
export declare type NodeArray = Array<ObjectDom | string>;
export interface NodeProps<T extends HTMLElement = HTMLElement> extends GlobalAttrs {
    node?: T;
    text?: string;
    children?: NodeArray;
}
export interface ObjectDomProps<T extends HTMLElement = HTMLElement> extends NodeProps<T> {
    node: T;
}
export declare class ObjectDom<T extends HTMLElement = HTMLElement> {
    build: () => T;
    render: () => ObjectDom<T>;
    update: () => void;
    toHtml: (root?: HTMLElement | undefined) => string;
}
export declare class GlobalDom<T extends HTMLElement = HTMLElement> extends ObjectDom<T> {
    props: ObjectDomProps<T>;
    constructor(props: ObjectDomProps<T>);
    id: NodeAttr;
    className: NodeAttr;
    contentEditable: NodeAttr<StringBool>;
    accesskey: NodeAttr;
    autocapitalize: NodeAttr<AutoCapitalize>;
    dir: NodeAttr<Direction>;
    draggable: NodeAttr<StringBool>;
    enterkeyhint: NodeAttr<string>;
    hidden: NodeAttr<boolean>;
    inputmode: NodeAttr<InputMode>;
    is: NodeAttr<string>;
    lang: NodeAttr<string>;
    nonce: NodeAttr<string>;
    part: NodeAttr<string>;
    slot: NodeAttr<string>;
    spellcheck: NodeAttr<StringBool>;
    style: NodeAttr<string | number | boolean>;
    tabindex: NodeAttr<number>;
    title: NodeAttr<string>;
    translate: NodeAttr<StringYesNo>;
    render: () => this;
    build: () => T;
    get node(): T;
    get children(): NodeArray;
    set children(value: NodeArray);
    get rootNode(): T;
    set rootNode(value: T);
    addChild(value: ObjectDom<HTMLElement>, index?: number | undefined): void;
    removeChild(index: number): void;
}