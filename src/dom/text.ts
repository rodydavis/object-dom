import { ObjectDom, Styles } from '../base'

export class Text extends ObjectDom<HTMLElement> {
  constructor(
    value: string,
    props: { style?: Styles; children?: Array<ObjectDom<HTMLElement>> } = {}
  ) {
    super(document.createElement('p'), props?.style ?? {}, props?.children ?? [])
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
