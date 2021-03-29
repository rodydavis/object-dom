import { CoreDom, NodeProps } from '../base';

export class Html extends CoreDom<HTMLHtmlElement> {
  constructor(props: NodeProps<HTMLHtmlElement> = {}) {
    super({ node: document.createElement('html'), ...props });
  }
}

export class Head extends CoreDom<HTMLHeadElement> {
  constructor(props: NodeProps<HTMLHeadElement> = {}) {
    super({ node: document.createElement('head'), ...props });
  }
}

export class Body extends CoreDom<HTMLBodyElement> {
  constructor(props: NodeProps<HTMLBodyElement> = {}) {
    super({ node: document.createElement('body'), ...props });
  }
}

export class Script extends CoreDom<HTMLScriptElement> {
  constructor(props: NodeProps<HTMLScriptElement> = {}) {
    super({ node: document.createElement('script'), ...props });
  }
}

export class Style extends CoreDom<HTMLStyleElement> {
  constructor(props: NodeProps<HTMLStyleElement> = {}) {
    super({ node: document.createElement('style'), ...props });
  }
}

export class Link extends CoreDom<HTMLLinkElement> {
  constructor(props: NodeProps<HTMLLinkElement> = {}) {
    super({ node: document.createElement('link'), ...props });
  }
}

export class Meta extends CoreDom<HTMLMetaElement> {
  constructor(props: NodeProps<HTMLMetaElement> = {}) {
    super({ node: document.createElement('meta'), ...props });
  }
}

export class Title extends CoreDom<HTMLTitleElement> {
  constructor(props: NodeProps<HTMLTitleElement> = {}) {
    super({ node: document.createElement('title'), ...props });
  }
}
