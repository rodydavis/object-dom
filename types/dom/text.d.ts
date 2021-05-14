import { GlobalDom, NodeProps } from '../base';
export declare class Text extends GlobalDom<HTMLElement> {
    constructor(tag: string, props: NodeProps<HTMLElement>);
    private _text;
    get text(): string | undefined;
    set text(text: string | undefined);
}
export declare class Span extends Text {
    constructor(props?: NodeProps<HTMLSpanElement>);
}
export declare class Paragraph extends Text {
    constructor(props?: NodeProps<HTMLParagraphElement>);
}
export declare class Bold extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Strong extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Italic extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Emphasized extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Marked extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Smaller extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Deleted extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Inserted extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Subscript extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Superscript extends Text {
    constructor(props?: NodeProps<HTMLElement>);
}
export declare class Heading1 extends Text {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
export declare class Heading2 extends Text {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
export declare class Heading3 extends Text {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
export declare class Heading4 extends Text {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
export declare class Heading5 extends Text {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
export declare class Heading6 extends Text {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
export declare class Break extends GlobalDom<HTMLBRElement> {
    constructor(props?: NodeProps<HTMLBRElement>);
}
