
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ScriptProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<script>`
     * 
     * Defines a client-side script
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_script.asp
     */
    export class Script extends GlobalDom<HTMLElement> {
      constructor(props: ScriptProps = {}) {
        super({ node: document.createElement("script"), ...props });
      }
    }    
    