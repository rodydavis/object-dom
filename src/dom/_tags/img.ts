import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ImgProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies an alternate text for an image
     */
    alt?: string;

    /**
     * Allow images from third-party sites that allow cross-origin access to be used with canvas
     */
    crossorigin?: string;

    /**
     * Specifies the height of an image
     */
    height?: string;

    /**
     * Specifies an image as a server-side image map
     */
    ismap?: string;

    /**
            * Specifies whether a browser should load an image immediately or to defer 
    loading of images until some conditions are met
            */
    loading?: string;

    /**
     * Specifies a URL to a detailed description of an image
     */
    longdesc?: string;

    /**
     * Specifies which referrer information to use when fetching an image
     */
    referrerpolicy?: string;

    /**
     * Specifies image sizes for different page layouts
     */
    sizes?: string;

    /**
     * Specifies the path to the image
     */
    src?: string;

    /**
     * Specifies a list of image files to use in different situations
     */
    srcset?: string;

    /**
     * Specifies an image as a client-side image map
     */
    usemap?: string;

    /**
     * Specifies the width of an image
     */
    width?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<img>`
 *
 * Defines an image
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_img.asp
 */
export class Img extends GlobalDom<HTMLElement> {
  constructor(props: ImgProps = {}) {
    super({ node: document.createElement("img"), ...props });
  }
}
