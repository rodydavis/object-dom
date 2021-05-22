
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface MarkProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<mark>`
     * 
     * Defines marked/highlighted text
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **6.0**  | **4.0**  |   **5.0**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_mark.asp
     */
    export class Mark extends GlobalDom<HTMLElement> {
      constructor(props: MarkProps = {}) {
        super({ node: document.createElement("mark"), ...props });
      }
    }    
    