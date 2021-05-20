import { GlobalDom, InputType, NodeProps } from "../../object-dom";

export interface InputProps extends NodeProps<HTMLInputElement> {
  type?: InputType;
  value?: string;
  name?: string;
  required?: boolean;
}

/**
 * Defines an input control.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_input.asp
 */
export class Input extends GlobalDom<HTMLInputElement> {
  constructor(props: InputProps = {}) {
    super({ node: document.createElement("input"), ...props });
    this.addEventListener("change", (val) => this.onChange(val));
    this.addAttr("type", props?.type);
    this.addAttr("name", props?.name);
    this.addAttr("required", props?.required);
  }

  public get value(): string | undefined {
    return this.node.value ?? "";
  }
  public set value(val: string | undefined) {
    this.node.value = val ?? "";
  }

  onChange: Function = (val: string) => {
    console.log("input value", val);
  };
}
