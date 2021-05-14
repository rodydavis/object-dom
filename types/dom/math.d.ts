import { GlobalDom, NodeProps } from '../base';
import { NodeAttr } from './attrs';
interface MathProps extends NodeProps<HTMLElement> {
    href?: string;
    mathbackground?: string;
    mathcolor?: string;
    display?: 'block' | 'inline';
}
export declare class Math extends GlobalDom<HTMLElement> {
    constructor(props?: MathProps);
    href: NodeAttr;
    mathbackground: NodeAttr;
    mathcolor: NodeAttr;
    display: NodeAttr;
}
export {};
