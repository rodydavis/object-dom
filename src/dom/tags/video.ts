import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines embedded video content.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_video.asp
 */
export class Video extends GlobalDom<HTMLVideoElement> {
  constructor(props: NodeProps<HTMLVideoElement> = {}) {
    super({ node: document.createElement("video"), ...props });
  }
}
