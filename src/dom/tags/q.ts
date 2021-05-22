import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface QProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<q cite>`
* 
* Specifies the source URL of the quote
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<p>WWF's goal is to:
 <q cite="http://www.wwf.org">
 Build a future where people live in harmony with nature.</q>
 We hope they succeed.</p>`
* 
@see https://www.w3schools.com/TAGS/att_q_cite.asp
*/
    cite?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<q>`
* 
* Defines a short quotation
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_q.asp
*/
export class Q extends GlobalDom<HTMLElement> {
  constructor(props: QProps = {}) {
    super({ node: document.createElement("q"), ...props });
  }
}
