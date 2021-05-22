import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface AreaProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<area alt>`
* 
* Specifies an alternate text for the area. Required if the href attribute is present
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map 
      name="planetmap">
      <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
      <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
      <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
      </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_alt.asp
*/
    alt?: string;

    /**
* `<area coords>`
* 
* Specifies the coordinates of the area
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map 
      name="planetmap">
      <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
      <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
      <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
      </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_coords.asp
*/
    coords?: /**
     * Specifies the coordinates of the top-left and bottom-right corner of the rectangle (shape="rect")
     *
     */
      | "x1,y1,x2,y2"
      /**
       * Specifies the coordinates of the circle center and the radius (shape="circle")
       *
       */
      | "x,y,radius"
      /**
       * Specifies the coordinates of the edges of the polygon. If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon (shape="poly")
       *
       */
      | "x1,y1,x2,y2,..,xn,yn";

    /**
* `<area download>`
* 
* Specifies that the target will be downloaded when a user clicks on the hyperlink
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **14.0***  | **20.0***  |   **10.1**   | **18.0** |
* 
Example: `<map name="planetmap"><area shape="rect" coords="0,0,82,126" alt="Sun" href="info_about_the_sun.htm" download="sun"><area shape="circle" coords="90,58,3" alt="Mercury" href="merglobe.gif" download="mercury">
 <area shape="circle" coords="124,58,8" alt="Venus" href="information_about_the_planet_venus.txt" download="venus"></map>`
* 
@see https://www.w3schools.com/TAGS/att_area_download.asp
*/
    download?: string;

    /**
* `<area href>`
* 
* Specifies the hyperlink target for the area
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map 
      name="planetmap">
      <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
      <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
      <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
      </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_href.asp
*/
    href?: string;

    /**
* `<area hreflang>`
* 
* Specifies the language of the target URL
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map name="planetmap">
 <area shape="rect" coords="0,0,82,126" alt="Sun"
 href="sun.htm" hreflang="en">
  </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_hreflang.asp
*/
    hreflang?: string;

    /**
* `<area media>`
* 
* Specifies what media/device the target URL is optimized for
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map name="planetmap">
  
 <area shape="rect" coords="0,0,82,126" alt="Sun"
  
 href="sun.htm" media="screen and (min-color-index:256)">
  </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_media.asp
*/
    media?: /**
     * Specifies an AND operator
     *
     */
      | "and"
      /**
       * Specifies a NOT operator
       *
       */
      | "not"
      /**
       * Specifies an OR operator
       *
       */
      | ",";

    /**
* `<area referrerpolicy>`
* 
* Specifies which referrer information to send with the link
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_area_referrerpolicy.asp
*/
    referrerpolicy?: string;

    /**
* `<area rel>`
* 
* Specifies the relationship between the current document and the target URL
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map name="planetmap">
 <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm" rel="alternate">
  </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_rel.asp
*/
    rel?: /**
     * Links to an alternate version of the document (i.e. print page, translated or mirror)
     *
     */
      | "alternate"
      /**
       * Links to the author of the document
       *
       */
      | "author"
      /**
       * Permanent URL used for bookmarking
       *
       */
      | "bookmark"
      /**
       * Links to a help document
       *
       */
      | "help"
      /**
       * Links to copyright information for the document
       *
       */
      | "license"
      /**
       * The next document in a selection
       *
       */
      | "next"
      /**
* Links to an unendorsed document, like a paid link.
 ("nofollow" is used by Google, to specify that the Google search spider should not follow that link)
* 
*/
      | "nofollow"
      /**
       * Specifies that the browser should not send a HTTP referer header if the user follows the hyperlink
       *
       */
      | "noreferrer"
      /**
       * Specifies that the target document should be cached
       *
       */
      | "prefetch"
      /**
       * The previous document in a selection
       *
       */
      | "prev"
      /**
       * Links to a search tool for the document
       *
       */
      | "search"
      /**
       * A tag (keyword) for the current document
       *
       */
      | "tag";

    /**
* `<area shape>`
* 
* Specifies the shape of the area
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map 
      name="planetmap">
      <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
      <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
      <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
      </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_shape.asp
*/
    shape?: /**
     * Specifies the entire region
     *
     */
      | "default"
      /**
       * Defines a rectangular region
       *
       */
      | "rect"
      /**
       * Defines a circular region
       *
       */
      | "circle"
      /**
       * Defines a polygonal region
       *
       */
      | "poly";

    /**
* `<area target>`
* 
* Specifies where to open the target URL
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map 
      name="planetmap">
      <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun"
 target="_blank">
      <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
      <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
      </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_target.asp
*/
    target?: /**
     * Opens the linked document in a new window or tab
     *
     */
      | "_blank"
      /**
       * Opens the linked document in the same frame as it was clicked
       *
       */
      | "_self"
      /**
       * Opens the linked document in the parent frame
       *
       */
      | "_parent"
      /**
       * Opens the linked document in the full body of the window
       *
       */
      | "_top"
      /**
       * Opens the linked document in a named iframe
       *
       */
      | "framename";

    /**
* `<area type>`
* 
* Specifies the media type of the target URL
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<map name="planetmap">
  
 <area shape="rect" coords="0,0,82,126" alt="Sun" 
 href="/images/sun.gif" type="image/gif">
  </map>`
* 
@see https://www.w3schools.com/TAGS/att_area_type.asp
*/
    type?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<area>`
* 
* Defines an area inside an image map
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_area.asp
*/
export class Area extends GlobalDom<HTMLElement> {
  constructor(props: AreaProps = {}) {
    super({ node: document.createElement("area"), ...props });
  }
}
