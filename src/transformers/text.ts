import { generateHtml } from "../object-dom";
import type { GlobalDom } from "../object-dom";

/**
 * @returns string
 *
 * Return all text content for a
 * given `ObjectDom` object
 */
export function parseTextContent(source: GlobalDom<HTMLElement>): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(generateHtml(source), "text/html");
  return doc.documentElement.textContent ?? "";
}
