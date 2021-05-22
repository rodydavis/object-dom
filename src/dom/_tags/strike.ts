
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface StrikeProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<strike>`
     * 
     * Not supported in HTML5. Use `<del>` or <s> instead.Defines strikethrough text
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_strike.asp
     */
    export class Strike extends GlobalDom<HTMLElement> {
      constructor(props: StrikeProps = {}) {
        super({ node: document.createElement("strike"), ...props });
      }
    }    
    