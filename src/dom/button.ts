import { ObjectDom, Style } from '../base'

export class Button extends ObjectDom<HTMLButtonElement> {
  constructor(value: string, props: { style?: Style; children?: Array<ObjectDom<HTMLElement>> }) {
    super(document.createElement('button'), props?.style ?? {}, props?.children ?? [])
    this._value = this.node.innerText = value
    this.node.addEventListener('click', () => this.onClick())
  }

  private _value: string
  public get value(): string {
    return this._value
  }
  public set value(value: string) {
    this._value = value
    this.node.innerText = value
  }

  onClick: Function = () => {}
}
