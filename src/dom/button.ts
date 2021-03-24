import { ObjectDom, NodeArray, Style } from '../base'

interface ButtonProps {
  value?: string
  style?: Style
  children?: NodeArray
}

export class Button extends ObjectDom<HTMLButtonElement> {
  constructor(props: ButtonProps = {}) {
    super(document.createElement('button'), props?.style ?? {}, props?.children ?? [])
    this.node.addEventListener('click', () => this.onClick())
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

  onClick: Function = () => {}
}
