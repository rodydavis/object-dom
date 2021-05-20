import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines embedded sound content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_audio.asp
 */
export declare class Audio extends GlobalDom<HTMLAudioElement> {
    constructor(props?: NodeProps<HTMLAudioElement>);
}
