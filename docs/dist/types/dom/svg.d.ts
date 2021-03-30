import { GlobalDom, NodeProps } from '../base';
import { NodeAttr } from './attrs';
interface SvgProps extends NodeProps<HTMLElement> {
    preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax';
    viewbox?: string;
    weight?: string;
    height?: string;
    x?: string;
    y?: string;
}
export declare class Svg extends GlobalDom<HTMLElement> {
    constructor(props?: SvgProps);
    viewbox: NodeAttr;
    preserveAspectRatio: NodeAttr;
    weight: NodeAttr;
    height: NodeAttr;
    x: NodeAttr;
    y: NodeAttr;
}
export {};
