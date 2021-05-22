
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface FigcaptionProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<figcaption>`
     * 
     * Defines a caption for a `<figure>` element
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **8.0**  | **4.0**  |   **5.1**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_figcaption.asp
     */
    export class Figcaption extends GlobalDom<HTMLElement> {
      constructor(props: FigcaptionProps = {}) {
        super({ node: document.createElement("figcaption"), ...props });
      }
    }    
    