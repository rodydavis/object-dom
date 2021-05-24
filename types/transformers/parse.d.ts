import { GlobalDom } from "../object-dom";
declare type DocType = "text/html" | "text/xml" | "application/xml" | "application/xhtml+xml" | "image/svg+xml";
/**
 * Parses html string and returns
 * a object dom object
 */
export declare function parseHtml(source: string, type?: DocType): GlobalDom<HTMLElement>;
export declare function parseNode(node: Element): GlobalDom<HTMLElement>;
export {};
