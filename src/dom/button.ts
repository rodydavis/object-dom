import { ObjectDom, Styles } from '../base'

export class Button extends ObjectDom<HTMLButtonElement> {
  constructor(props: { style?: Styles }) {
    super(document.createElement('button'), props?.style ?? {}, [])
  }
}
