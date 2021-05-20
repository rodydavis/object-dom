import { GlobalDom, NodeProps } from "../../object-dom";
interface MetaProps extends NodeProps<HTMLMetaElement> {
    charset?: string;
    content?: string;
    httpEquiv?: string;
    name?: string;
}
/**
 * Defines metadata about an HTML document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_meta.asp
 */
export declare class Meta extends GlobalDom<HTMLMetaElement> {
    constructor(props?: MetaProps);
}
export {};
