import { CoreDom, NodeProps } from '../base';

export declare class Div extends CoreDom<HTMLDivElement> {
    constructor(props?: NodeProps);
}
declare class Display extends Div {
    constructor(display: string, props?: NodeProps);
}
export declare class Grid extends Display {
    constructor(props?: NodeProps);
}
export declare class Block extends Display {
    constructor(props?: NodeProps);
}
export declare class Inline extends Display {
    constructor(props?: NodeProps);
}
export declare class InlineBlock extends Display {
    constructor(props?: NodeProps);
}
export declare class Flex extends Display {
    constructor(props?: NodeProps);
}
export interface RowProps extends NodeProps {
    direction?: 'row-reversed' | 'row';
}
export declare class Row extends Flex {
    constructor(props?: RowProps);
}
export interface ColumnProps extends NodeProps {
    direction?: 'column-reversed' | 'column';
}
export declare class Column extends Flex {
    constructor(props?: ColumnProps);
}
export interface WrapProps extends NodeProps {
    direction?: 'wrap-reversed' | 'wrap' | 'nowrap';
}
export declare class Wrap extends Flex {
    constructor(props?: WrapProps);
}
export {};
