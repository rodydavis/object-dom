import type { NodeArray } from "../object-dom";
import { Html, Style, Script, Link, Meta } from "../dom";
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
export declare function createDocument(props: CreateProps): Html;
/**
 * @deprecated use `createDocument` instead
 *
 * Creates a HTML document
 */
export declare function create(props: CreateProps): Html;
export {};
