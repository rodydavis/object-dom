import { CSS } from './styles';

export * from './styles';
export declare type NodeArray = Array<ObjectDom | string>;
export interface Props {
    style: CSS;
    children: NodeArray;
}
export interface NodeProps {
    id?: string;
    text?: string;
    className?: string | string[];
    style?: CSS;
    children?: NodeArray;
}
interface ObjectDomProps<T extends HTMLElement> extends NodeProps {
    node: T;
}
export declare abstract class ObjectDom {
    abstract node: HTMLElement;
    update: () => void;
    abstract build: () => CoreDom<HTMLElement>;
    toHtml: () => string;
}
export declare class CoreDom<T extends HTMLElement> extends ObjectDom {
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
    private _style;
    get style(): CSS | undefined;
    set style(value: CSS | undefined);
    private _children;
    get children(): NodeArray;
    addChild(value: ObjectDom | string): void;
}
