import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Represents the progress of a task.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_progress.asp
 */
export class Progress extends GlobalDom<HTMLProgressElement> {
  constructor(props: NodeProps<HTMLProgressElement> = {}) {
    super({ node: document.createElement("progress"), ...props });
  }
}
