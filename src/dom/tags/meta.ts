import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface MetaProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<meta charset>`
* 
* Specifies the character encoding for the HTML document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<head>
   
  <meta charset="UTF-8">
  </head>`
* 
@see https://www.w3schools.com/TAGS/att_meta_charset.asp
*/
    charset?: string;

    /**
* `<meta content>`
* 
* Specifies the value associated with the http-equiv or name attribute
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<head>
  
 <meta name="description" content="Free Web tutorials">
  
 <meta name="keywords" content="HTML,CSS,XML,JavaScript">
 </head>`
* 
@see https://www.w3schools.com/TAGS/att_meta_content.asp
*/
    content?: string;

    /**
* `<meta http-equiv>`
* 
* Provides an HTTP header for the information/value of the content attribute
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_meta_http-equiv.asp
*/
    httpEquiv?: string;

    /**
* `<meta name>`
* 
* Specifies a name for the metadata
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<head>
  
 <meta name="description" content="Free Web tutorials">
  
 <meta name="keywords" content="HTML,CSS,JavaScript">
   <meta name="author" content="John Doe">  <meta 
    name="viewport" content="width=device-width, initial-scale=1.0">
 </head>`
* 
@see https://www.w3schools.com/TAGS/att_meta_name.asp
*/
    name?: /**
     * Specifies the name of the Web application that the page represents
     *
     */
    | "application-name"

      /**
* Specifies the name of the author of the document. Example:
  
  <meta name="author" content="John Doe">
* 
*/
      | "author"

      /**
* Specifies a description of the page. Search engines can pick up this description to show with the results of searches. Example:
  
  <meta name="description" content="Free web tutorials">
* 
*/
      | "description"

      /**
* Specifies one of the software packages used to generate the document  (not used on hand-authored pages). Example:
  
  <meta name="generator" content="FrontPage 4.0">
* 
*/
      | "generator"

      /**
* Specifies a comma-separated list of keywords - relevant to the page  (Informs search engines what the page is about).
  Tip: Always specify keywords (needed by search engines to catalogize the page). Example:
  
  <meta name="keywords" content="HTML, meta tag, tag  reference">
* 
*/
      | "keywords"

      /**
* Controls the viewport (the user's visible area of a web page).
  
The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.
You should include the following <meta> viewport element in all your web pages:

<meta name="viewport" content="width=device-width, initial-scale=1.0">

A <meta> viewport element gives the browser instructions on how 
to control the page's dimensions and scaling.
The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.
Here is an example of a web page without the viewport meta tag, and the same web page with the viewport meta tag:

Tip: If you are browsing this page with a phone or a tablet, you can click on the two links below to see the difference.



  
    Without the 
viewport meta tag
   
    
  
  
    With the 
viewport meta tag
    
    
    

You can read more about the viewport in our Responsive Web Design - The Viewport Tutorial.
* 
*/
      | "viewport";

    [key: string]: PossibleAttr;
  };
}

/**
* `<meta>`
* 
* Defines metadata about an HTML document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_meta.asp
*/
export class Meta extends GlobalDom<HTMLElement> {
  constructor(props: MetaProps = {}) {
    super({ node: document.createElement("meta"), ...props });
  }
}
