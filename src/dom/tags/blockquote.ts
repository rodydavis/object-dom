import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface BlockquoteProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<blockquote cite>`
* 
* Specifies the source of the quotation
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<blockquote cite="http://www.worldwildlife.org/who/index.html">
 For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally. WWF's unique way of working combines global reach with a foundation in science, involves action at every level from local to global, and ensures the delivery of innovative solutions that meet the needs of both people and nature.
 </blockquote>`
* 
@see https://www.w3schools.com/TAGS/att_blockquote_cite.asp
*/
    cite?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<blockquote>`
* 
* Defines a section that is quoted from another source
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_blockquote.asp
*/
export class Blockquote extends GlobalDom<HTMLElement> {
  constructor(props: BlockquoteProps = {}) {
    super({ node: document.createElement("blockquote"), ...props });
  }
}
