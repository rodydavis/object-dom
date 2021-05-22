
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface OptgroupProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<optgroup>`
     * 
     * Defines a group of related options in a drop-down list
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_optgroup.asp
     */
    export class Optgroup extends GlobalDom<HTMLElement> {
      constructor(props: OptgroupProps = {}) {
        super({ node: document.createElement("optgroup"), ...props });
      }
    }    
    