
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface WbrProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<wbr>`
     * 
     * Defines a possible line-break
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **1.0**  | **3.0**  |   **4.0**   | **12.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_wbr.asp
     */
    export class Wbr extends GlobalDom<HTMLElement> {
      constructor(props: WbrProps = {}) {
        super({ node: document.createElement("wbr"), ...props });
      }
    }    
    