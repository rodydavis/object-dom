import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export declare class Heading extends GlobalDom<HTMLHeadingElement> {
    constructor(level: 1 | 2 | 3 | 4 | 5 | 6, props?: NodeProps<HTMLHeadingElement>);
}
/**
 * Defines HTML heading 1.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export declare class H1 extends Heading {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
/**
 * Defines HTML heading 2.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export declare class H2 extends Heading {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
/**
 * Defines HTML heading 3.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export declare class H3 extends Heading {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
/**
 * Defines HTML heading 4.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export declare class H4 extends Heading {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
/**
 * Defines HTML heading 5.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export declare class H5 extends Heading {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
/**
 * Defines HTML heading 6.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export declare class H6 extends Heading {
    constructor(props?: NodeProps<HTMLHeadingElement>);
}
