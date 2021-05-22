
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface EmbedProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<embed>`
     * 
     * Defines a container for an external application
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_embed.asp
     */
    export class Embed extends GlobalDom<HTMLElement> {
      constructor(props: EmbedProps = {}) {
        super({ node: document.createElement("embed"), ...props });
      }
    }    
    