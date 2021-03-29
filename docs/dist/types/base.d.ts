import { CSS } from './styles';
export * from './styles';
export declare type NodeArray = Array<ObjectDom<HTMLElement> | string>;
export interface Props {
    style: CSS;
    children: NodeArray;
}
export interface NodeProps<T extends HTMLElement> {
    id?: string;
    node?: T;
    text?: string;
    className?: string | string[];
    style?: CSS;
    children?: NodeArray;
}
interface ObjectDomProps<T extends HTMLElement> extends NodeProps<T> {
    node: T;
}
export declare abstract class ObjectDom<T extends HTMLElement> {
    abstract node: HTMLElement;
    abstract render: () => ObjectDom<T>;
    update: () => void;
    toHtml: (root?: HTMLElement | undefined) => string;
}
export declare class CoreDom<T extends HTMLElement> extends ObjectDom<T> {
    private props;
    constructor(props: ObjectDomProps<T>);
    render: () => this;
    get classList(): string[];
    get id(): string | undefined;
    set id(value: string | undefined);
    private get rootNode();
    private set rootNode(value);
    get node(): T;
    get style(): CSS | undefined;
    set style(value: CSS | undefined);
    get children(): NodeArray;
    set children(value: NodeArray);
    addChild(value: ObjectDom<HTMLElement>, index?: number | undefined): void;
    removeChild(index: number): void;
}
