import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a multiline input control (text area).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_textarea.asp
 */
export class TextArea extends GlobalDom<HTMLTextAreaElement> {
  constructor(props: NodeProps<HTMLTextAreaElement> = {}) {
    super({ node: document.createElement("textarea"), ...props });
  }
}
