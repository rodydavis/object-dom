import { GlobalDom, NodeProps } from '../base';
import { As, CrossOrigin, NodeAttr } from './attrs';

interface HtmlProps extends NodeProps<HTMLHtmlElement> {
  lang?: string;
  xmlns?: string;
}

export class Html extends GlobalDom<HTMLHtmlElement> {
  constructor(props: HtmlProps = {}) {
    super({ node: document.createElement('html'), ...props });
    this.lang = new NodeAttr(this, 'lang', props.lang);
    this.xmlns = new NodeAttr(this, 'xmlns', props.xmlns);
  }
  lang: NodeAttr;
  xmlns: NodeAttr;
}

export class Head extends GlobalDom<HTMLHeadElement> {
  constructor(props: NodeProps<HTMLHeadElement> = {}) {
    super({ node: document.createElement('head'), ...props });
  }
}

export class Body extends GlobalDom<HTMLBodyElement> {
  constructor(props: NodeProps<HTMLBodyElement> = {}) {
    super({ node: document.createElement('body'), ...props });
  }
}

export class Script extends GlobalDom<HTMLScriptElement> {
  constructor(props: NodeProps<HTMLScriptElement> = {}) {
    super({ node: document.createElement('script'), ...props });
  }
}

export class Style extends GlobalDom<HTMLStyleElement> {
  constructor(props: NodeProps<HTMLStyleElement> = {}) {
    super({ node: document.createElement('style'), ...props });
  }
}

interface LinkProps extends NodeProps<HTMLLinkElement> {
  as?: As;
  crossorigin?: CrossOrigin;
  disabled?: boolean;
  href?: string;
}
export class Link extends GlobalDom<HTMLLinkElement> {
  constructor(props: LinkProps = {}) {
    super({ node: document.createElement('link'), ...props });
    this.as = new NodeAttr(this, 'as', props.as);
    this.crossorigin = new NodeAttr(this, 'crossorigin', props.crossorigin);
    this.disabled = new NodeAttr(this, 'disabled', props.disabled);
    this.href = new NodeAttr(this, 'href', props.href);
  }
  as: NodeAttr<As>;
  crossorigin: NodeAttr<CrossOrigin>;
  disabled: NodeAttr<boolean>;
  href: NodeAttr;
}

interface BaseProps extends NodeProps<HTMLBaseElement> {
  href?: string;
}
export class Base extends GlobalDom<HTMLBaseElement> {
  constructor(props: BaseProps = {}) {
    super({ node: document.createElement('base'), ...props });
    this.href = new NodeAttr(this, 'href', props.href);
  }
  href: NodeAttr;
}

interface MetaProps extends NodeProps<HTMLMetaElement> {
  charset?: string;
  content?: string;
  httpEquiv?: string;
  name?: string;
}
export class Meta extends GlobalDom<HTMLMetaElement> {
  constructor(props: MetaProps = {}) {
    super({ node: document.createElement('meta'), ...props });
    this.charset = new NodeAttr(this, 'charset', props.charset);
    this.content = new NodeAttr(this, 'content', props.content);
    this.httpEquiv = new NodeAttr(this, 'http-equiv', props.httpEquiv);
    this.name = new NodeAttr(this, 'name', props.name);
  }
  charset: NodeAttr;
  content: NodeAttr;
  httpEquiv: NodeAttr;
  name: NodeAttr;
}

export class Title extends GlobalDom<HTMLTitleElement> {
  constructor(props: NodeProps<HTMLTitleElement> = {}) {
    super({ node: document.createElement('title'), ...props });
  }
}

export class Template extends GlobalDom<HTMLTemplateElement> {
  constructor(props: NodeProps<HTMLTemplateElement> = {}) {
    super({ node: document.createElement('template'), ...props });
  }
}
