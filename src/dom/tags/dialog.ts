import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a dialog box or window.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_dialog.asp
 */
export class Dialog extends GlobalDom<HTMLDialogElement> {
  constructor(props: NodeProps<HTMLDialogElement> = {}) {
    super({ node: document.createElement("dialog"), ...props });
  }
}
