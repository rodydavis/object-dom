import { ObjectDom, Styles } from '../base'

export class Text extends ObjectDom<string> {
  constructor(public value: string, props: { style?: Styles } = {}) {
    super(value, props?.style ?? {}, [])
  }
}
