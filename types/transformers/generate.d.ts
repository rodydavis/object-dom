import type { GlobalDom, ObjectDocument } from "../object-dom";
/**
 * @returns string
 *
 * Return all text content for a
 * given `ObjectDom` object
 */
export declare function generateHtml(source: GlobalDom<HTMLElement> | ObjectDocument): string;
