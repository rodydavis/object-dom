
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface SectionProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<section>`
     * 
     * Defines a section in a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **5.0**  | **4.0**  |   **5.0**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_section.asp
     */
    export class Section extends GlobalDom<HTMLElement> {
      constructor(props: SectionProps = {}) {
        super({ node: document.createElement("section"), ...props });
      }
    }    
    