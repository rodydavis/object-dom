
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface BasefontProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<basefont>`
     * 
     * Not supported in HTML5. Use CSS instead.Specifies a default color, size, and font for all text in a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_basefont.asp
     */
    export class Basefont extends GlobalDom<HTMLElement> {
      constructor(props: BasefontProps = {}) {
        super({ node: document.createElement("basefont"), ...props });
      }
    }    
    