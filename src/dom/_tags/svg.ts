
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface SvgProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<svg>`
     * 
     * Defines a container for SVG graphics
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **4.0**  | **3.0**  |   **3.2**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_svg.asp
     */
    export class Svg extends GlobalDom<HTMLElement> {
      constructor(props: SvgProps = {}) {
        super({ node: document.createElement("svg"), ...props });
      }
    }    
    