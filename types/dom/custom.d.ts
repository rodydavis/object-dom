import { GlobalDom, NodeProps } from "../base";
export declare class Custom<T extends HTMLElement = HTMLElement> extends GlobalDom<T> {
    constructor(tag: string, props?: NodeProps<T>);
}
