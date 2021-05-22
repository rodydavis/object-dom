import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface MeterProps extends NodeProps<HTMLMeterElement> {
    attributes?: {
        /**
    * `<meter form>`
    *
    * Specifies which form the <meter> element belongs to
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **Not supported**  | **Not supported**  |   **Not supported**   | **Not supported** |
    *
    Example: <form action="\/action_page.php" method="get" id="form1">     First name: <input type="text" name="fname"><br>     <input type="submit" value="Submit">  <\/form>     <p><label for="anna">Anna's score:<\/label><meter id="anna"      form="form1" name="anna" min="0" low="40" high="90" max="100"      value="95"><\/meter><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_meter_form.asp
    */
        form?: string;
        /**
    * `<meter high>`
    *
    * Specifies the range that is considered to be a high value
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
    *
    Example: <p><label for="anna">Anna's score:<\/label><meter id="anna" min="0"      low="40" high="90" max="100" value="95"><\/meter><\/p><p><label      for="peter">Peter's score:<\/label><meter id="peter" min="0" low="40"      high="90" max="100" value="65"><\/meter><\/p><p><label for="linda">Linda's      score:<\/label><meter id="linda" min="0" low="40" high="90" max="100"      value="35"><\/meter><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_meter_high.asp
    */
        high?: string;
        /**
    * `<meter low>`
    *
    * Specifies the range that is considered to be a low value
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
    *
    Example: <p><label for="anna">Anna's score:<\/label><meter id="anna" min="0"      low="40" high="90" max="100" value="95"><\/meter><\/p><p><label      for="peter">Peter's score:<\/label><meter id="peter" min="0" low="40"      high="90" max="100" value="65"><\/meter><\/p><p><label for="linda">Linda's      score:<\/label><meter id="linda" min="0" low="40" high="90" max="100"      value="35"><\/meter><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_meter_low.asp
    */
        low?: string;
        /**
    * `<meter max>`
    *
    * Specifies the maximum value of the range
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
    *
    Example: <p><label for="anna">Anna's score:<\/label><meter id="anna" min="0"      low="40" high="90" max="100" value="95"><\/meter><\/p><p><label      for="peter">Peter's score:<\/label><meter id="peter" min="0" low="40"      high="90" max="100" value="65"><\/meter><\/p><p><label for="linda">Linda's      score:<\/label><meter id="linda" min="0" low="40" high="90" max="100"      value="35"><\/meter><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_meter_max.asp
    */
        max?: string;
        /**
    * `<meter min>`
    *
    * Specifies the minimum value of the range. Default value is 0
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
    *
    Example: <p><label for="anna">Anna's score:<\/label><meter id="anna" min="0"      low="40" high="90" max="100" value="95"><\/meter><\/p><p><label      for="peter">Peter's score:<\/label><meter id="peter" min="0" low="40"      high="90" max="100" value="65"><\/meter><\/p><p><label for="linda">Linda's      score:<\/label><meter id="linda" min="0" low="40" high="90" max="100"      value="35"><\/meter><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_meter_min.asp
    */
        min?: string;
        /**
    * `<meter optimum>`
    *
    * Specifies what value is the optimal value for the gauge
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
    *
    Example: <p><label for="yinyang">Yin Yang:<\/label><meter id="yinyang" value="0.3"      high="0.9" low="0.1" optimum="0.5"><\/meter><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_meter_optimum.asp
    */
        optimum?: string;
        /**
    * `<meter value>`
    *
    * Required. Specifies the current value of the gauge
    *
    * |  Chrome  | Firefox |  Safari   |  Edge  |
    * | :------: | :-----: | :-------: | :----: |
    * |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
    *
    Example: <p><label for="anna">Anna's score:<\/label><meter id="anna" min="0"      low="40" high="90" max="100" value="95"><\/meter><\/p><p><label      for="peter">Peter's score:<\/label><meter id="peter" min="0" low="40"      high="90" max="100" value="65"><\/meter><\/p><p><label for="linda">Linda's      score:<\/label><meter id="linda" min="0" low="40" high="90" max="100"      value="35"><\/meter><\/p>
    *
    @see https://www.w3schools.com/TAGS/att_meter_value.asp
    */
        value?: string;
        [key: string]: PossibleAttr;
    };
}
/**
* `<meter>`
*
* Defines a scalar measurement within a known range (a gauge)
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **8.0**  | **16.0**  |   **6.0**   | **13.0** |
*
@see https://www.w3schools.com/TAGS/tag_meter.asp
*/
export declare class Meter extends GlobalDom<HTMLMeterElement> {
    constructor(props?: MeterProps);
}
