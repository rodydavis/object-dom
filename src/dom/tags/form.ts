import { GlobalDom, Method, NodeProps, Target } from "../../object-dom";

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
    this.addEventListener("change", () => this.onChange());
    this.addAttr("target", props?.target);
    this.addAttr("accept-charset", props?.acceptCharset);
    this.addAttr("method", props?.method);
    this.addAttr("action", props?.action);
    this.addAttr("autocomplete", props?.autocomplete);
    this.addAttr("novalidate", props?.novalidate);
  }
  onChange: Function = () => {};
}
