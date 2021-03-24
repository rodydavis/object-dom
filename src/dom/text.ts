import { ObjectDom, Styles } from '../base'

export class Text extends ObjectDom<HTMLElement> {
  constructor(value: string, props: { style?: Styles } = {}) {
    super(document.createElement('p'), props?.style ?? {}, [])
    this._value = this.node.innerText = value
  }

  private _value: string
  public get value(): string {
    return this._value
  }
  public set value(value: string) {
    this._value = value
    this.node.innerText = value
  }
}
