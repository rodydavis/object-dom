import { NodeArray } from '../base';
import { Html, Style, Script, Link, Meta } from '../dom';
interface CreateProps {
    title: string;
    styles?: Style[];
    link?: Link[];
    meta?: Meta[];
    scripts?: Script[];
    children?: NodeArray;
}
export declare function create(props: CreateProps): Html;
export {};
