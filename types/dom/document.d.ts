import { Style, Link, Meta, Script, Html } from "../dom";
import { NodeArray, ObjectDom } from "../base";
interface DocumentProps {
    title?: string;
    styles?: Style[];
    link?: Link[];
    meta?: Meta[];
    scripts?: Script[];
    children?: NodeArray;
}
/**
 * The HTML DOM document object is the owner
 * of all other objects in your web page.
 *
 * Reference: https://www.w3schools.com/js/js_htmldom_document.asp
 */
export declare class ObjectDocument extends ObjectDom {
    props: DocumentProps;
    constructor(props?: DocumentProps);
    render: () => Html;
    document(): Document;
}
export {};
