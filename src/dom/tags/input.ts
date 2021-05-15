import { GlobalDom, InputType, NodeAttr, NodeProps } from "../../object-dom";

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
    this.node.addEventListener("change", (val) => this.onChange(val));
    this.type = new NodeAttr(this, "type", props?.type);
    this.name = new NodeAttr(this, "name", props?.type);
    this.required = new NodeAttr(this, "required", props?.type);
  }
  type: NodeAttr;
  name: NodeAttr;
  required: NodeAttr;

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
