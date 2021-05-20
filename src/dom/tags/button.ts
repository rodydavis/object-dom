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
export class Button extends GlobalDom<HTMLButtonElement> {
  constructor(props: ButtonProps = {}) {
    super({ node: document.createElement("button"), ...props });
    if (props?.onClick) this.onClick = props.onClick;
    this.node.addEventListener("click", () => this.onClick());
    this.text = props.text;
  }

  onClick: Function = () => {};
}
