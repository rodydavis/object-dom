import { GlobalDom, NodeProps } from '../base';
import { NodeAttr } from './attrs';
interface HtmlProps extends NodeProps<HTMLHtmlElement> {
    lang?: string;
    xmlns?: string;
}
export declare class Html extends GlobalDom<HTMLHtmlElement> {
    constructor(props?: HtmlProps);
    lang: NodeAttr;
    xmlns: NodeAttr;
}
export declare class Head extends GlobalDom<HTMLHeadElement> {
    constructor(props?: NodeProps<HTMLHeadElement>);
}
export declare class Body extends GlobalDom<HTMLBodyElement> {
    constructor(props?: NodeProps<HTMLBodyElement>);
}
export declare class Script extends GlobalDom<HTMLScriptElement> {
    constructor(props?: NodeProps<HTMLScriptElement>);
}
export declare class Style extends GlobalDom<HTMLStyleElement> {
    constructor(props?: NodeProps<HTMLStyleElement>);
}
export declare class Link extends GlobalDom<HTMLLinkElement> {
    constructor(props?: NodeProps<HTMLLinkElement>);
}
export declare class Meta extends GlobalDom<HTMLMetaElement> {
    constructor(props?: NodeProps<HTMLMetaElement>);
}
export declare class Title extends GlobalDom<HTMLTitleElement> {
    constructor(props?: NodeProps<HTMLTitleElement>);
}
export declare class Template extends GlobalDom<HTMLTemplateElement> {
    constructor(props?: NodeProps<HTMLTemplateElement>);
}
export {};
