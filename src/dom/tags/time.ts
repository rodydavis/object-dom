import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TimeProps extends NodeProps<HTMLTimeElement> {
  attributes?: {
    /**
* `<time datetime>`
* 
* Represent a machine-readable format of the <time> element
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **62.0**  | **22.0**  |   **7.0**   | **18.0** |
* 
Example: <p>I have a date on <time datetime="2017-02-14">Valentines day<\/time>.<\/p>
* 
@see https://www.w3schools.com/TAGS/att_time_datetime.asp
*/
    datetime?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<time>`
* 
* Defines a specific time (or datetime)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **62.0**  | **22.0**  |   **7.0**   | **18.0** |
* 
@see https://www.w3schools.com/TAGS/tag_time.asp
*/
export class Time extends GlobalDom<HTMLTimeElement> {
  constructor(props: TimeProps = {}) {
    super({ node: document.createElement("time"), ...props });
  }
}
