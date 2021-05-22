
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface MeterProps extends NodeProps<HTMLElement> {
        attributes?: {
            
           /**
            * Specifies which form the <meter> element belongs to
            */
            form?: string;

           /**
            * Specifies the range that is considered to be a high value
            */
            high?: string;

           /**
            * Specifies the range that is considered to be a low value
            */
            low?: string;

           /**
            * Specifies the maximum value of the range
            */
            max?: string;

           /**
            * Specifies the minimum value of the range. Default value is 0
            */
            min?: string;

           /**
            * Specifies what value is the optimal value for the gauge
            */
            optimum?: string;

           /**
            * Required. Specifies the current value of the gauge
            */
            value?: string;
            [key: string]: PossibleAttr;
        }
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
    