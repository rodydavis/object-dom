import { ObjectDom, NodeArray, Style } from '../base'

interface ButtonProps {
  text?: string
  style?: Style
  children?: NodeArray
}

export class Button extends ObjectDom<HTMLButtonElement> {
  constructor(props: ButtonProps = {}) {
    super(document.createElement('button'), props?.style ?? {}, props?.children ?? [])
    this.node.addEventListener('click', () => this.onClick())
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

  onClick: Function = () => {}
}
