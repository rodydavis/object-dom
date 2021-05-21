import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

/**
 * Defines text tracks for media 
 * elements (`<video>` and `<audio>`).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_track.asp
 */
export class Track extends GlobalDom<HTMLTrackElement> {
  constructor(props: NodeProps<HTMLTrackElement> = {}) {
    super({ node: document.createElement("track"), ...props });
  }
}