
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface RubyProps extends NodeProps<HTMLElement> {
        attributes?: {
            
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<ruby>`
     * 
     * Defines a ruby annotation (for East Asian typography)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **5.0**  | **38.0**  |   **5.0**   | **5.5** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_ruby.asp
     */
    export class Ruby extends GlobalDom<HTMLElement> {
      constructor(props: RubyProps = {}) {
        super({ node: document.createElement("ruby"), ...props });
      }
    }    
    