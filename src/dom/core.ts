import { ObjectDom, NodeProps } from '../base';

export class Html extends ObjectDom<HTMLHtmlElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('html'), ...props });
  }
}

export class Head extends ObjectDom<HTMLHeadElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('head'), ...props });
  }
}

export class Body extends ObjectDom<HTMLBodyElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('body'), ...props });
  }
}

export class Script extends ObjectDom<HTMLScriptElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('script'), ...props });
  }
}

export class Style extends ObjectDom<HTMLStyleElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('style'), ...props });
  }
}

export class Link extends ObjectDom<HTMLLinkElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('link'), ...props });
  }
}

export class Meta extends ObjectDom<HTMLMetaElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('meta'), ...props });
  }
}

export class Title extends ObjectDom<HTMLTitleElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('title'), ...props });
  }
}
