import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface ArticleProps extends NodeProps<HTMLElement> {
    attributes?: {
        [key: string]: PossibleAttr;
    };
}
/**
* `<article>`
*
* Defines an article
*
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **6.0**  | **4.0**  |   **5.0**   | **9.0** |
*
@see https://www.w3schools.com/TAGS/tag_article.asp
*/
export declare class Article extends GlobalDom<HTMLElement> {
    constructor(props?: ArticleProps);
}
