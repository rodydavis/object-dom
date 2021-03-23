import { ObjectDom, Styles } from '../base';

export class Text extends ObjectDom<string> {
    constructor(public value: string, props: { style?: Styles, children?: Array<ObjectDom<HTMLElement>> } = { }) {
      super(value, props?.style ?? {}, props?.children ?? []);
    }
}