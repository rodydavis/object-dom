import { Style } from './styles';
export * from './styles';
export declare type NodeArray = Array<ObjectDom<HTMLElement> | string>;
export interface Props {
    style: Style;
    children: NodeArray;
}
export interface NodeProps {
    id?: string;
    text?: string;
    className?: string | string[];
    style?: Style;
    children?: NodeArray;
}
interface ObjectDomProps<T extends HTMLElement> extends NodeProps {
    node: T;
}
export declare abstract class ObjectDomBase {
    abstract build: () => ObjectDom<HTMLElement>;
}
export declare class ObjectDom<T extends HTMLElement> extends ObjectDomBase {
    constructor(props: ObjectDomProps<T>);
    build: () => this;
    private _classList;
    get classList(): string[];
    addClassName(val: string): void;
    private _id;
    get id(): string | undefined;
    set id(value: string | undefined);
    private _node;
    get node(): T;
    set node(value: T);
    private _parent;
    get parent(): ObjectDom<T> | undefined;
    set parent(value: ObjectDom<T> | undefined);
    private _style;
    get style(): Style | undefined;
    set style(value: Style | undefined);
    private _children;
    get children(): NodeArray;
    addChild(value: ObjectDom<HTMLElement> | string): void;
}
export declare function render(source: ObjectDomBase, target?: HTMLElement): void;