import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines a scalar measurement
 * within a known range (a gauge).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_meter.asp
 */
export class Meter extends GlobalDom<HTMLMeterElement> {
  constructor(props: NodeProps<HTMLMeterElement> = {}) {
    super({ node: document.createElement("meter"), ...props });
  }
}
