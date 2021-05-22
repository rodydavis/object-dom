
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface StyleProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<style>`
     * 
     * Defines style information for a document
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_style.asp
     */
    export class Style extends GlobalDom<HTMLElement> {
      constructor(props: StyleProps = {}) {
        super({ node: document.createElement("style"), ...props });
      }
    }    
    