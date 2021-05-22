import { Div, DivProps } from "../tags/div";
interface DisplayProps extends DivProps {
    styles?: {
        display?: string;
    };
}
declare class Display extends Div {
    constructor(props?: DisplayProps);
}
export declare class Grid extends Display {
    constructor(props?: DisplayProps);
}
export declare class Block extends Display {
    constructor(props?: DisplayProps);
}
export declare class Inline extends Display {
    constructor(props?: DisplayProps);
}
export declare class InlineBlock extends Display {
    constructor(props?: DisplayProps);
}
export declare class Flex extends Display {
    constructor(props?: DisplayProps);
}
interface RowProps extends DisplayProps {
    styles?: {
        display?: string;
        flexDirection?: "row-reversed" | "row";
    };
}
export declare class Row extends Flex {
    constructor(props?: RowProps);
}
interface ColumnProps extends DisplayProps {
    styles?: {
        display?: string;
        flexDirection?: "column-reversed" | "column";
    };
}
export declare class Column extends Flex {
    constructor(props?: ColumnProps);
}
interface WrapProps extends DisplayProps {
    styles?: {
        display?: string;
        flexWrap?: "wrap-reversed" | "wrap" | "nowrap";
    };
}
export declare class Wrap extends Flex {
    constructor(props?: WrapProps);
}
export {};
