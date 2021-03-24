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

class Span extends Text {
  constructor(props: TextProps = {}) {
    super('span', props)
  }
}
class Paragraph extends Text {
  constructor(props: TextProps = {}) {
    super('p', props)
  }
}
class Bold extends Text {
  constructor(props: TextProps = {}) {
    super('b', props)
  }
}
class Strong extends Text {
  constructor(props: TextProps = {}) {
    super('strong', props)
  }
}
class Italic extends Text {
  constructor(props: TextProps = {}) {
    super('i', props)
  }
}
class Emphasized extends Text {
  constructor(props: TextProps = {}) {
    super('em', props)
  }
}
class Marked extends Text {
  constructor(props: TextProps = {}) {
    super('mark', props)
  }
}
class Smaller extends Text {
  constructor(props: TextProps = {}) {
    super('small', props)
  }
}
class Deleted extends Text {
  constructor(props: TextProps = {}) {
    super('del', props)
  }
}
class Inserted extends Text {
  constructor(props: TextProps = {}) {
    super('ins', props)
  }
}
class Subscript extends Text {
  constructor(props: TextProps = {}) {
    super('sub', props)
  }
}
class Superscript extends Text {
  constructor(props: TextProps = {}) {
    super('sup', props)
  }
}
class Heading1 extends Text {
  constructor(props: TextProps = {}) {
    super('h1', props)
  }
}
class Heading2 extends Text {
  constructor(props: TextProps = {}) {
    super('h2', props)
  }
}
class Heading3 extends Text {
  constructor(props: TextProps = {}) {
    super('h3', props)
  }
}
class Heading4 extends Text {
  constructor(props: TextProps = {}) {
    super('h4', props)
  }
}
class Heading5 extends Text {
  constructor(props: TextProps = {}) {
    super('h5', props)
  }
}
class Heading6 extends Text {
  constructor(props: TextProps = {}) {
    super('h6', props)
  }
}

export {
  Span,
  Paragraph,
  Bold,
  Strong,
  Italic,
  Emphasized,
  Marked,
  Smaller,
  Deleted,
  Inserted,
  Subscript,
  Superscript,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
}
