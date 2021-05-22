import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface AudioProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<audio>`
* 
* Defines embedded sound content
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **4.0**   | **9.0** |
* 
@see https://www.w3schools.com/TAGS/tag_audio.asp
*/
export class Audio extends GlobalDom<HTMLElement> {
  constructor(props: AudioProps = {}) {
    super({ node: document.createElement("audio"), ...props });
  }
}
