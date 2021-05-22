import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ProgressProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<progress max>`
* 
* Specifies how much work the task requires in total. Default value is 1
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **8.0**  | **16.0**  |   **6.0**   | **10.0** |
* 
Example: `<label for="file">Downloading progress:</label><progress id="file" 
    value="32" max="100"> 32% </progress>`
* 
@see https://www.w3schools.com/TAGS/att_progress_max.asp
*/
    max?: string;

    /**
* `<progress value>`
* 
* Specifies how much of the task has been completed
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **8.0**  | **16.0**  |   **6.0**   | **10.0** |
* 
Example: `<label for="file">Downloading progress:</label><progress id="file" 
    value="32" max="100"> 32% </progress>`
* 
@see https://www.w3schools.com/TAGS/att_progress_value.asp
*/
    value?: string;
    [key: string]: PossibleAttr;
  };
}

/**
* `<progress>`
* 
* Represents the progress of a task
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **8.0**  | **16.0**  |   **6.0**   | **10.0** |
* 
@see https://www.w3schools.com/TAGS/tag_progress.asp
*/
export class Progress extends GlobalDom<HTMLElement> {
  constructor(props: ProgressProps = {}) {
    super({ node: document.createElement("progress"), ...props });
  }
}
