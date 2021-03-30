import { GlobalDom, NodeProps } from '../base';
import { NodeAttr } from './attrs';
import { As, CrossOrigin } from './attrs';
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
interface LinkProps extends NodeProps<HTMLLinkElement> {
    as?: As;
    crossorigin?: CrossOrigin;
    disabled?: boolean;
    href?: string;
}
export declare class Link extends GlobalDom<HTMLLinkElement> {
    constructor(props?: LinkProps);
    as: NodeAttr<As>;
    crossorigin: NodeAttr<CrossOrigin>;
    disabled: NodeAttr<boolean>;
    href: NodeAttr;
}
interface BaseProps extends NodeProps<HTMLBaseElement> {
    href?: string;
}
export declare class Base extends GlobalDom<HTMLBaseElement> {
    constructor(props?: BaseProps);
    href: NodeAttr;
}
interface MetaProps extends NodeProps<HTMLMetaElement> {
    charset?: string;
    content?: string;
    httpEquiv?: string;
    name?: string;
}
export declare class Meta extends GlobalDom<HTMLMetaElement> {
    constructor(props?: MetaProps);
    charset: NodeAttr;
    content: NodeAttr;
    httpEquiv: NodeAttr;
    name: NodeAttr;
}
export declare class Title extends GlobalDom<HTMLTitleElement> {
    constructor(props?: NodeProps<HTMLTitleElement>);
}
export declare class Template extends GlobalDom<HTMLTemplateElement> {
    constructor(props?: NodeProps<HTMLTemplateElement>);
}
export {};
