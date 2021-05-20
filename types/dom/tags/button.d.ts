import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
interface ButtonProps extends NodeProps<HTMLButtonElement> {
    text?: string;
    onClick?: () => void;
}
/**
 * Defines a clickable button.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_button.asp
 */
export declare class Button extends GlobalDom<HTMLButtonElement> {
    constructor(props?: ButtonProps);
    onClick: Function;
}
export {};
