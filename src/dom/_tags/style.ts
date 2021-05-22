import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface StyleProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies what media/device the media resource is optimized for
     */
    media?: string;

    /**
     * Specifies the media type of the <style> tag
     */
    type?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<style>`
 *
 * Defines style information for a document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_style.asp
 */
export class Style extends GlobalDom<HTMLElement> {
  constructor(props: StyleProps = {}) {
    super({ node: document.createElement("style"), ...props });
  }
}
