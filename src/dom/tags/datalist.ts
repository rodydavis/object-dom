import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Specifies a list of pre-defined 
 * options for input controls.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_datalist.asp
 */
export class DataList extends GlobalDom<HTMLDataListElement> {
  constructor(props: NodeProps<HTMLDataListElement> = {}) {
    super({ node: document.createElement("datalist"), ...props });
  }
}
