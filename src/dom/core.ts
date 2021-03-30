import { GlobalDom, NodeProps } from '../base';
import { NodeAttr } from './attrs';

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

export class Link extends GlobalDom<HTMLLinkElement> {
  constructor(props: NodeProps<HTMLLinkElement> = {}) {
    super({ node: document.createElement('link'), ...props });
  }
}

export class Meta extends GlobalDom<HTMLMetaElement> {
  constructor(props: NodeProps<HTMLMetaElement> = {}) {
    super({ node: document.createElement('meta'), ...props });
  }
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
