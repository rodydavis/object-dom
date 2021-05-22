import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ParamProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies the name of a parameter
     */
    name?: string;

    /**
     * Specifies the value of the parameter
     */
    value?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<param>`
 *
 * Defines a parameter for an object
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_param.asp
 */
export class Param extends GlobalDom<HTMLElement> {
  constructor(props: ParamProps = {}) {
    super({ node: document.createElement("param"), ...props });
  }
}
