import { ObjectDom, NodeArray, Style } from '../base'

interface TextProps {
  value?: string
  style?: Style
  children?: NodeArray
}

class Text extends ObjectDom<HTMLElement> {
  constructor(tag: string, props: TextProps) {
    super(document.createElement(tag), props?.style ?? {}, props?.children ?? [])
    this.value = props.value
  }

  private _value: string | undefined
  public get value(): string | undefined {
    return this._value
  }
  public set value(value: string | undefined) {
    this._value = value
    if (value) this.node.innerText = value
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
