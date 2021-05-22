
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface TbodyProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<tbody>`
     * 
     * Groups the body content in a table
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_tbody.asp
     */
    export class Tbody extends GlobalDom<HTMLElement> {
      constructor(props: TbodyProps = {}) {
        super({ node: document.createElement("tbody"), ...props });
      }
    }    
    