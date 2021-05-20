import type { GlobalDom, NodeArray } from "../object-dom";
import { Style, Script, Link, Meta } from "../dom";
interface CreateProps {
    title: string;
    styles?: Style[];
    link?: Link[];
    meta?: Meta[];
    scripts?: Script[];
    children?: NodeArray;
}
/**
 * Creates a HTML document
 */
export declare function createDocument(props: CreateProps): GlobalDom<HTMLElement>;
export {};
