import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines embedded sound content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_audio.asp
 */
export class Audio extends GlobalDom<HTMLAudioElement> {
  constructor(props: NodeProps<HTMLAudioElement> = {}) {
    super({ node: document.createElement("audio"), ...props });
  }
}
