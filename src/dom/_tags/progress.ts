
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ProgressProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<progress>`
     * 
     * Represents the progress of a task
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **8.0**  | **16.0**  |   **6.0**   | **10.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_progress.asp
     */
    export class Progress extends GlobalDom<HTMLElement> {
      constructor(props: ProgressProps = {}) {
        super({ node: document.createElement("progress"), ...props });
      }
    }    
    