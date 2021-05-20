import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a section in a document.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_div.asp
 */
export declare class Div extends GlobalDom<HTMLDivElement> {
    constructor(props?: NodeProps<HTMLDivElement>);
}
declare class Display extends Div {
    constructor(display: string, props?: NodeProps<HTMLDivElement>);
}
export declare class Grid extends Display {
    constructor(props?: NodeProps<HTMLDivElement>);
}
export declare class Block extends Display {
    constructor(props?: NodeProps<HTMLDivElement>);
}
export declare class Inline extends Display {
    constructor(props?: NodeProps<HTMLDivElement>);
}
export declare class InlineBlock extends Display {
    constructor(props?: NodeProps<HTMLDivElement>);
}
export declare class Flex extends Display {
    constructor(props?: NodeProps<HTMLDivElement>);
}
interface RowProps extends NodeProps<HTMLDivElement> {
    direction?: "row-reversed" | "row";
}
export declare class Row extends Flex {
    constructor(props?: RowProps);
}
interface ColumnProps extends NodeProps<HTMLDivElement> {
    direction?: "column-reversed" | "column";
}
export declare class Column extends Flex {
    constructor(props?: ColumnProps);
}
interface WrapProps extends NodeProps<HTMLDivElement> {
    direction?: "wrap-reversed" | "wrap" | "nowrap";
}
export declare class Wrap extends Flex {
    constructor(props?: WrapProps);
}
export {};
