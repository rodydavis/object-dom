
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface UProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<u>`
     * 
     * Defines some text that is unarticulated and styled differently from normal 
text
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_u.asp
     */
    export class U extends GlobalDom<HTMLElement> {
      constructor(props: UProps = {}) {
        super({ node: document.createElement("u"), ...props });
      }
    }    
    