import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ImgProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<img alt>`
* 
* Specifies an alternate text for an image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`
* 
@see https://www.w3schools.com/TAGS/att_img_alt.asp
*/
    alt?: string;

    /**
* `<img crossorigin>`
* 
* Allow images from third-party sites that allow cross-origin access to be used with canvas
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_img_crossorigin.asp
*/
    crossorigin?: string;

    /**
* `<img height>`
* 
* Specifies the height of an image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`
* 
@see https://www.w3schools.com/TAGS/att_img_height.asp
*/
    height?: string;

    /**
* `<img ismap>`
* 
* Specifies an image as a server-side image map
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<a href="/action_page.php">
  
 <img src="w3html.gif" alt="W3Schools.com" ismap>
 </a>`
* 
@see https://www.w3schools.com/TAGS/att_img_ismap.asp
*/
    ismap?: string;

    /**
* `<img loading>`
* 
* Specifies whether a browser should load an image immediately or to defer 
    loading of images until some conditions are met
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **77.0**  | **75.0**  |   **Not Supported**   | **79.0** |
* 
Example: `<img src="/w3images/wedding.jpg" alt="Wedding" style="width:100%"><img 
    src="/w3images/rocks.jpg" alt="Rocks" style="width:100%"><!-- 
    off-screen images --><img src="/w3images/paris.jpg" alt="Paris" 
    style="width:100%" loading="lazy"><img src="/w3images/nature.jpg" 
    alt="Nature" style="width:100%" loading="lazy"><img src="/w3images/underwater.jpg" 
    alt="Underwater" style="width:100%" loading="lazy"><img src="/w3images/ocean.jpg" 
    alt="Ocean" style="width:100%" loading="lazy"><img src="/w3images/mountainskies.jpg" 
    alt="Mountains" style="width:100%" loading="lazy">`
* 
@see https://www.w3schools.com/TAGS/att_img_loading.asp
*/
    loading?: /**
     * Default. Loads an image immediately
     *
     */
      | "eager"
      /**
       * Defer loading of images until some conditions are met
       *
       */
      | "lazy";

    /**
* `<img longdesc>`
* 
* Specifies a URL to a detailed description of an image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Not supported**  | **Not supported**  |   **Not supported**   | **Not supported** |
* 
Example: `<!-- The description is on the same page as the image --><img src="w3html.gif" alt="W3Schools.com" width="100" height="132" longdesc="#w3htmlExplained">
 <!-- The description is in an external page --><img src="w3html.gif" alt="W3Schools.com" width="100" height="132" longdesc="w3html.txt">
 <!-- The description is one of several within an external page --><img src="w3html.gif" alt="W3Schools.com" width="100" height="132" longdesc="http://example.com/desc#item3">
 <!-- The description is included in a data:URI --><img src="w3html.gif" alt="W3Schools.com" width="100" height="132" longdesc="data:text/html;charset=utf-8;,%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3Ctitle%3EDescription%20of%20the%20Logo%3C/title%3E%3C/head%3E%3Cbody%3E%3Cp%3ESome%20description%20goes%20here%3C/body%3E%3C/html%3E">`
* 
@see https://www.w3schools.com/TAGS/att_img_longdesc.asp
*/
    longdesc?: string;

    /**
* `<img referrerpolicy>`
* 
* Specifies which referrer information to use when fetching an image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_img_referrerpolicy.asp
*/
    referrerpolicy?: string;

    /**
* `<img sizes>`
* 
* Specifies image sizes for different page layouts
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_img_sizes.asp
*/
    sizes?: string;

    /**
* `<img src>`
* 
* Specifies the path to the image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`
* 
@see https://www.w3schools.com/TAGS/att_img_src.asp
*/
    src?: string;

    /**
* `<img srcset>`
* 
* Specifies a list of image files to use in different situations
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_img_srcset.asp
*/
    srcset?: string;

    /**
* `<img usemap>`
* 
* Specifies an image as a client-side image map
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" 
    height="379"><map name="workmap">  <area shape="rect" 
    coords="34,44,270,350" alt="Computer" href="computer.htm">  <area 
    shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">  
    <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
    </map>`
* 
@see https://www.w3schools.com/TAGS/att_img_usemap.asp
*/
    usemap?: string;

    /**
* `<img width>`
* 
* Specifies the width of an image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`
* 
@see https://www.w3schools.com/TAGS/att_img_width.asp
*/
    width?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<img>`
* 
* Defines an image
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_img.asp
*/
export class Img extends GlobalDom<HTMLElement> {
  constructor(props: ImgProps = {}) {
    super({ node: document.createElement("img"), ...props });
  }
}
