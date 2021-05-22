import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface SourceProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<source media>`
* 
* Accepts any valid media query that would normally be defined in a CSS
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **38.0**  | **15.0**  |   **9.1**   | **9.0** |
* 
Example: `<picture>  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">  
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">  <img 
  src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;"></picture>`
* 
@see https://www.w3schools.com/TAGS/att_source_media.asp
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
* `<source sizes>`
* 
* Specifies image sizes for different page layouts
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_source_sizes.asp
*/
    sizes?: string;

    /**
* `<source src>`
* 
* Required when <source> is used in <audio> and <video>. Specifies the URL of the media file
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **4.0**   | **9.0** |
* 
Example: `<audio controls>
   <source src="horse.ogg" type="audio/ogg">
   <source src="horse.mp3" type="audio/mpeg">
 Your browser does not support the audio element.
 </audio>`
* 
@see https://www.w3schools.com/TAGS/att_source_src.asp
*/
    src?: string;

    /**
* `<source srcset>`
* 
* Required when <source> is used in <picture>. Specifies the URL of the 
    image to use in different situations
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **38.0**  | **38.0**  |   **9.1**   | **13.0** |
* 
Example: `<picture>  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">  
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">  <img 
  src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;"></picture>`
* 
@see https://www.w3schools.com/TAGS/att_source_srcset.asp
*/
    srcset?: string;

    /**
* `<source type>`
* 
* Specifies the MIME-type of the resource
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **4.0**   | **9.0** |
* 
Example: `<audio controls>
   <source src="horse.ogg" type="audio/ogg">
   <source src="horse.mp3" type="audio/mpeg">
 Your browser does not support the audio element.
 </audio>`
* 
@see https://www.w3schools.com/TAGS/att_source_type.asp
*/
    type?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<source>`
* 
* Defines multiple media resources for media elements (`<video>` and <audio>)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **4.0**  | **3.5**  |   **4.0**   | **9.0** |
* 
@see https://www.w3schools.com/TAGS/tag_source.asp
*/
export class Source extends GlobalDom<HTMLElement> {
  constructor(props: SourceProps = {}) {
    super({ node: document.createElement("source"), ...props });
  }
}
