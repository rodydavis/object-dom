import { ObjectDom, Styles } from '../base'

export class Button extends ObjectDom<HTMLButtonElement> {
  constructor(value: string, props: { style?: Styles; children?: Array<ObjectDom<HTMLElement>> }) {
    super(document.createElement('button'), props?.style ?? {}, props?.children ?? [])
    this._value = value
    this.children = [value]
  }

  private _value: string
  public get value(): string {
    return this._value
  }
  public set value(value: string) {
    this._value = value
    this.update()
  }
}
