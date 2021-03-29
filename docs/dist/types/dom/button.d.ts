import { CoreDom, NodeProps } from '../base';
interface ButtonProps extends NodeProps<HTMLButtonElement> {
    text?: string;
    onClick?: () => void;
}
export declare class Button extends CoreDom<HTMLButtonElement> {
    constructor(props?: ButtonProps);
    onClick: Function;
    private _text;
    get text(): string | undefined;
    set text(text: string | undefined);
}
export {};
