import { ObjectDom, NodeProps } from '../base';
declare class Text extends ObjectDom<HTMLElement> {
    constructor(tag: string, props: NodeProps);
    private _text;
    get text(): string | undefined;
    set text(text: string | undefined);
}
export declare class Span extends Text {
    constructor(props?: NodeProps);
}
export declare class Paragraph extends Text {
    constructor(props?: NodeProps);
}
export declare class Bold extends Text {
    constructor(props?: NodeProps);
}
export declare class Strong extends Text {
    constructor(props?: NodeProps);
}
export declare class Italic extends Text {
    constructor(props?: NodeProps);
}
export declare class Emphasized extends Text {
    constructor(props?: NodeProps);
}
export declare class Marked extends Text {
    constructor(props?: NodeProps);
}
export declare class Smaller extends Text {
    constructor(props?: NodeProps);
}
export declare class Deleted extends Text {
    constructor(props?: NodeProps);
}
export declare class Inserted extends Text {
    constructor(props?: NodeProps);
}
export declare class Subscript extends Text {
    constructor(props?: NodeProps);
}
export declare class Superscript extends Text {
    constructor(props?: NodeProps);
}
export declare class Heading1 extends Text {
    constructor(props?: NodeProps);
}
export declare class Heading2 extends Text {
    constructor(props?: NodeProps);
}
export declare class Heading3 extends Text {
    constructor(props?: NodeProps);
}
export declare class Heading4 extends Text {
    constructor(props?: NodeProps);
}
export declare class Heading5 extends Text {
    constructor(props?: NodeProps);
}
export declare class Heading6 extends Text {
    constructor(props?: NodeProps);
}
export {};
