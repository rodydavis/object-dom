import type { GlobalDom, ObjectDocument } from "../object-dom";

/**
 * @returns string
 *
 * Return all text content for a
 * given `ObjectDom` object
 */
export function generateHtml(source: GlobalDom<HTMLElement> | ObjectDocument): string {
  return source.render().node.outerHTML;
}
