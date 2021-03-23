import { ObjectDom, Styles } from '../base'

export class Text extends ObjectDom<HTMLElement> {
  constructor(
    public value: string,
    props: { style?: Styles; children?: Array<ObjectDom<HTMLElement>> } = {}
  ) {
    super(document.createElement('p'), props?.style ?? {}, props?.children ?? [])
  }
}
