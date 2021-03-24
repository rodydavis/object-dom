import { ObjectDom, NodeArray, Style } from '../base'

interface TextProps {
  text?: string
  style?: Style
  children?: NodeArray
}

class Text extends ObjectDom<HTMLElement> {
  constructor(tag: string, props: TextProps) {
    super(document.createElement(tag), props?.style ?? {}, props?.children ?? [])
    this.text = props.text
  }

  private _text: string | undefined
  public get text(): string | undefined {
    return this._text
  }
  public set text(text: string | undefined) {
    this._text = text
    if (text) this.node.innerText = text
  }
}

export class Span extends Text {
  constructor(props: TextProps = {}) {
    super('span', props)
  }
}
export class Paragraph extends Text {
  constructor(props: TextProps = {}) {
    super('p', props)
  }
}
export class Bold extends Text {
  constructor(props: TextProps = {}) {
    super('b', props)
  }
}
export class Strong extends Text {
  constructor(props: TextProps = {}) {
    super('strong', props)
  }
}
export class Italic extends Text {
  constructor(props: TextProps = {}) {
    super('i', props)
  }
}
export class Emphasized extends Text {
  constructor(props: TextProps = {}) {
    super('em', props)
  }
}
export class Marked extends Text {
  constructor(props: TextProps = {}) {
    super('mark', props)
  }
}
export class Smaller extends Text {
  constructor(props: TextProps = {}) {
    super('small', props)
  }
}
export class Deleted extends Text {
  constructor(props: TextProps = {}) {
    super('del', props)
  }
}
export class Inserted extends Text {
  constructor(props: TextProps = {}) {
    super('ins', props)
  }
}
export class Subscript extends Text {
  constructor(props: TextProps = {}) {
    super('sub', props)
  }
}
export class Superscript extends Text {
  constructor(props: TextProps = {}) {
    super('sup', props)
  }
}
export class Heading1 extends Text {
  constructor(props: TextProps = {}) {
    super('h1', props)
  }
}
export class Heading2 extends Text {
  constructor(props: TextProps = {}) {
    super('h2', props)
  }
}
export class Heading3 extends Text {
  constructor(props: TextProps = {}) {
    super('h3', props)
  }
}
export class Heading4 extends Text {
  constructor(props: TextProps = {}) {
    super('h4', props)
  }
}
export class Heading5 extends Text {
  constructor(props: TextProps = {}) {
    super('h5', props)
  }
}
export class Heading6 extends Text {
  constructor(props: TextProps = {}) {
    super('h6', props)
  }
}
