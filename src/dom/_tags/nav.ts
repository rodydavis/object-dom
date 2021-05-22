
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface NavProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<nav>`
     * 
     * Defines navigation links
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **5.0**  | **4.0**  |   **5.0**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_nav.asp
     */
    export class Nav extends GlobalDom<HTMLElement> {
      constructor(props: NavProps = {}) {
        super({ node: document.createElement("nav"), ...props });
      }
    }    
    