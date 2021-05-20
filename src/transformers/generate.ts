import type { GlobalDom } from "../object-dom";

/**
 * @returns string
 *
 * Return all text content for a
 * given `ObjectDom` object
 */
export function generateHtml(source: GlobalDom<HTMLElement>): string {
  return source.node.outerHTML;
}
