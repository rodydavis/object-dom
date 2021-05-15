import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines an article.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_article.asp
 */
export class Article extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("article"), ...props });
  }
}
