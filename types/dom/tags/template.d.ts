import { GlobalDom, NodeProps } from "../../object-dom";
/**
 * Defines a container for content that should
 * be hidden when the page loads.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_template.asp
 */
export declare class Template extends GlobalDom<HTMLTemplateElement> {
    constructor(props?: NodeProps<HTMLTemplateElement>);
}
