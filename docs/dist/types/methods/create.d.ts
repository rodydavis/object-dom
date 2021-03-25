import { ObjectDom } from '../base';
import { Html, Style, Script, Link, Meta } from '../dom';
interface CreateProps {
    title: string;
    styles?: Style[];
    link?: Link[];
    meta?: Meta[];
    scripts?: Script[];
    children?: ObjectDom[];
}
export declare function create(props: CreateProps): Html;
export {};
