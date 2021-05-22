
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface KbdProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<kbd>`
     * 
     * Defines keyboard input
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_kbd.asp
     */
    export class Kbd extends GlobalDom<HTMLElement> {
      constructor(props: KbdProps = {}) {
        super({ node: document.createElement("kbd"), ...props });
      }
    }    
    