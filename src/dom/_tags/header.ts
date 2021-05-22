
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface HeaderProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<header>`
     * 
     * Defines a header for a document or section
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **5.0**  | **4.0**  |   **5.0**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_header.asp
     */
    export class Header extends GlobalDom<HTMLElement> {
      constructor(props: HeaderProps = {}) {
        super({ node: document.createElement("header"), ...props });
      }
    }    
    