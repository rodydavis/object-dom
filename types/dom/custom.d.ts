import type { NodeProps } from "../object-dom";
import { GlobalDom } from "../object-dom";
export declare class Custom extends GlobalDom<HTMLElement> {
    constructor(tag: string, props?: NodeProps<HTMLElement>);
}
