
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface IframeProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<iframe>`
     * 
     * Defines an inline frame
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_iframe.asp
     */
    export class Iframe extends GlobalDom<HTMLElement> {
      constructor(props: IframeProps = {}) {
        super({ node: document.createElement("iframe"), ...props });
      }
    }    
    