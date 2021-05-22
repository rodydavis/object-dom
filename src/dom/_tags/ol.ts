
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface OlProps extends NodeProps<HTMLElement> {
        attributes?: {
            
           /**
            * Specifies that the list order should be reversed (9,8,7...)
            */
            reversed?: string;

           /**
            * Specifies the start value of an ordered list
            */
            start?: string;

           /**
            * Specifies the kind of marker to use in the list
            */
            type?: string;
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<ol>`
     * 
     * Defines an ordered list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_ol.asp
     */
    export class Ol extends GlobalDom<HTMLElement> {
      constructor(props: OlProps = {}) {
        super({ node: document.createElement("ol"), ...props });
      }
    }    
    