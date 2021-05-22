import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface VideoProps extends NodeProps<HTMLVideoElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<video>`
*
* Defines embedded video content
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **3.1**   | **9.0** |
*
@see https://www.w3schools.com/TAGS/tag_video.asp
*/
export declare class Video extends GlobalDom<HTMLVideoElement> {
    constructor(props?: VideoProps);
}
