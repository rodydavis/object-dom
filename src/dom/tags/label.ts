import { GlobalDom, NodeAttr, NodeProps } from "../../object-dom";

export interface LabelProps extends NodeProps<HTMLLabelElement> {
  value?: string;
  input?: string;
}

/**
 * Defines a label for an `<input>` element.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_label.asp
 */
export class Label extends GlobalDom<HTMLLabelElement> {
  constructor(props: LabelProps = {}) {
    super({ node: document.createElement("label"), ...props });
    this.value = props.value;
    this.input = new NodeAttr(this, "for", props?.input);
  }
  input: NodeAttr;

  public get value(): string | undefined {
    return this.node.innerText;
  }
  public set value(val: string | undefined) {
    this.node.innerText = val ?? "";
  }
}
