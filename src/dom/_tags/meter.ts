
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface MeterProps extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: `<meter>`
     * 
     * Defines a scalar measurement within a known range (a gauge)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_meter.asp
     */
    export class Meter extends GlobalDom<HTMLElement> {
      constructor(props: MeterProps = {}) {
        super({ node: document.createElement("meter"), ...props });
      }
    }    
    