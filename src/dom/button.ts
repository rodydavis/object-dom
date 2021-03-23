import { ObjectDom, Styles } from '../base'

export class Button extends ObjectDom<HTMLButtonElement> {
  constructor(
    public value: string,
    props: { style?: Styles; children?: Array<ObjectDom<HTMLElement>> }
  ) {
    super(document.createElement('button'), props?.style ?? {}, props?.children ?? [])
    this.children.push(value)
  }
}
