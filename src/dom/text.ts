import { ObjectDom, NodeProps } from '../base';

export class Text extends ObjectDom<HTMLElement> {
  constructor(tag: string, props: NodeProps) {
    super({ node: document.createElement(tag), ...props });
    this.text = props.text;
  }

  private _text: string | undefined;
  public get text(): string | undefined {
    return this._text;
  }
  public set text(text: string | undefined) {
    this._text = text;
    if (text) this.node.innerText = text;
  }
}

export class Span extends Text {
  constructor(props: NodeProps = {}) {
    super('span', props);
  }
}
export class Paragraph extends Text {
  constructor(props: NodeProps = {}) {
    super('p', props);
  }
}
export class Bold extends Text {
  constructor(props: NodeProps = {}) {
    super('b', props);
  }
}
export class Strong extends Text {
  constructor(props: NodeProps = {}) {
    super('strong', props);
  }
}
export class Italic extends Text {
  constructor(props: NodeProps = {}) {
    super('i', props);
  }
}
export class Emphasized extends Text {
  constructor(props: NodeProps = {}) {
    super('em', props);
  }
}
export class Marked extends Text {
  constructor(props: NodeProps = {}) {
    super('mark', props);
  }
}
export class Smaller extends Text {
  constructor(props: NodeProps = {}) {
    super('small', props);
  }
}
export class Deleted extends Text {
  constructor(props: NodeProps = {}) {
    super('del', props);
  }
}
export class Inserted extends Text {
  constructor(props: NodeProps = {}) {
    super('ins', props);
  }
}
export class Subscript extends Text {
  constructor(props: NodeProps = {}) {
    super('sub', props);
  }
}
export class Superscript extends Text {
  constructor(props: NodeProps = {}) {
    super('sup', props);
  }
}
export class Heading1 extends Text {
  constructor(props: NodeProps = {}) {
    super('h1', props);
  }
}
export class Heading2 extends Text {
  constructor(props: NodeProps = {}) {
    super('h2', props);
  }
}
export class Heading3 extends Text {
  constructor(props: NodeProps = {}) {
    super('h3', props);
  }
}
export class Heading4 extends Text {
  constructor(props: NodeProps = {}) {
    super('h4', props);
  }
}
export class Heading5 extends Text {
  constructor(props: NodeProps = {}) {
    super('h5', props);
  }
}
export class Heading6 extends Text {
  constructor(props: NodeProps = {}) {
    super('h6', props);
  }
}
