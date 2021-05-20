import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Represents the progress of a task.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_progress.asp
 */
export declare class Progress extends GlobalDom<HTMLProgressElement> {
    constructor(props?: NodeProps<HTMLProgressElement>);
}
