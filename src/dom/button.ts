import { CoreDom, NodeProps } from '../base';

interface ButtonProps extends NodeProps {
  text?: string;
  onClick?: () => void;
}

export class Button extends CoreDom<HTMLButtonElement> {
  constructor(props: ButtonProps = {}) {
    super({ node: document.createElement('button'), ...props });
    if (props?.onClick) this.onClick = props.onClick;
    this.node.addEventListener('click', () => this.onClick());
    this.text = props.text;
  }

  onClick: Function = () => {};

  private _text: string | undefined;
  public get text(): string | undefined {
    return this._text;
  }
  public set text(text: string | undefined) {
    this._text = text;
    if (text) this.node.innerText = text;
  }
}
