
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface SampProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<samp>`
     * 
     * Defines sample output from a computer program
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_samp.asp
     */
    export class Samp extends GlobalDom<HTMLElement> {
      constructor(props: SampProps = {}) {
        super({ node: document.createElement("samp"), ...props });
      }
    }    
    