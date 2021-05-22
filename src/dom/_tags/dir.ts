
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface DirProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<dir>`
     * 
     * Not supported in HTML5. Use `<ul>` instead.Defines a directory list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_dir.asp
     */
    export class Dir extends GlobalDom<HTMLElement> {
      constructor(props: DirProps = {}) {
        super({ node: document.createElement("dir"), ...props });
      }
    }    
    