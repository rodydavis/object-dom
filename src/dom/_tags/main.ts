
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface MainProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<main>`
     * 
     * Specifies the main content of a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **26.0**  | **21.0**  |   **7.0**   | **12.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_main.asp
     */
    export class Main extends GlobalDom<HTMLElement> {
      constructor(props: MainProps = {}) {
        super({ node: document.createElement("main"), ...props });
      }
    }    
    