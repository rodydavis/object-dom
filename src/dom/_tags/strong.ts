
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface StrongProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<strong>`
     * 
     * Defines important text
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_strong.asp
     */
    export class Strong extends GlobalDom<HTMLElement> {
      constructor(props: StrongProps = {}) {
        super({ node: document.createElement("strong"), ...props });
      }
    }    
    