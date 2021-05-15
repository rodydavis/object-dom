import { GlobalDom, Method, NodeAttr, NodeProps, Target } from "../../object-dom";

export interface FormProps extends NodeProps<HTMLFormElement> {
  method?: Method;
  action?: string;
  acceptCharset?: string;
  target?: Target;
  autocomplete?: "on" | "off";
  novalidate?: boolean;
}

/**
 * Defines an HTML form for user input.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_form.asp
 */
export class Form extends GlobalDom<HTMLFormElement> {
  constructor(props: FormProps = {}) {
    super({ node: document.createElement("form"), ...props });
    this.node.addEventListener("change", () => this.onChange());
    this.target = new NodeAttr(this, "target", props?.target);
    this.acceptCharset = new NodeAttr(this, "accept-charset", props?.acceptCharset);
    this.method = new NodeAttr(this, "method", props?.method);
    this.action = new NodeAttr(this, "action", props?.action);
    this.autocomplete = new NodeAttr(this, "autocomplete", props?.autocomplete);
    this.novalidate = new NodeAttr(this, "novalidate", props?.novalidate);
  }
  target: NodeAttr<Target>;
  acceptCharset: NodeAttr;
  method: NodeAttr<Method>;
  action: NodeAttr;
  autocomplete: NodeAttr;
  novalidate: NodeAttr<boolean>;

  onChange: Function = () => {};
}
