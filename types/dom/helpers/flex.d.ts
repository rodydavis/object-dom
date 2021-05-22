import { Div, DivProps } from "../tags/div";
declare class Display extends Div {
    constructor(display: string, props?: DivProps);
}
export declare class Grid extends Display {
    constructor(props?: DivProps);
}
export declare class Block extends Display {
    constructor(props?: DivProps);
}
export declare class Inline extends Display {
    constructor(props?: DivProps);
}
export declare class InlineBlock extends Display {
    constructor(props?: DivProps);
}
export declare class Flex extends Display {
    constructor(props?: DivProps);
}
interface RowProps extends DivProps {
    direction?: "row-reversed" | "row";
}
export declare class Row extends Flex {
    constructor(props?: RowProps);
}
interface ColumnProps extends DivProps {
    direction?: "column-reversed" | "column";
}
export declare class Column extends Flex {
    constructor(props?: ColumnProps);
}
interface WrapProps extends DivProps {
    direction?: "wrap-reversed" | "wrap" | "nowrap";
}
export declare class Wrap extends Flex {
    constructor(props?: WrapProps);
}
export {};
