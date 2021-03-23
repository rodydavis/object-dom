import { ObjectDom, Styles } from '../base';

export class Div extends ObjectDom<HTMLDivElement> {
    constructor(props: { style?: Styles, children?: Array<ObjectDom<HTMLElement>> } = {}) {
        super(document.createElement('div'), props?.style ?? {}, props?.children ?? []);
    }
}