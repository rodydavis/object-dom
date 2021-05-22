import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ScriptProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<script async>`
* 
* Specifies that the script is executed asynchronously (only for external scripts)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **8.0**  | **3.6**  |   **5.1**   | **10.0** |
* 
Example: `<script src="demo_async.js" async></script>`
* 
@see https://www.w3schools.com/TAGS/att_script_async.asp
*/
    async?: string;

    /**
* `<script crossorigin>`
* 
* Sets the mode of the request to an HTTP CORS Request
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **30.0**  | **13.0**  |   **13.0**   | **18.0** |
* 
Example: `<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>`
* 
@see https://www.w3schools.com/TAGS/att_script_crossorigin.asp
*/
    crossorigin?: string;

    /**
* `<script defer>`
* 
* Specifies that the script is executed when the page has finished parsing (only for external scripts)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **8.0**  | **3.5**  |   **5.0**   | **10.0** |
* 
Example: `<script src="demo_defer.js" defer></script>`
* 
@see https://www.w3schools.com/TAGS/att_script_defer.asp
*/
    defer?: string;

    /**
* `<script integrity>`
* 
* Allows a browser to check the fetched script to ensure that the code is 
    never loaded if the source has been manipulated
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **45.0**  | **43.0**  |   **13.0**   | **17.0** |
* 
Example: `<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>`
* 
@see https://www.w3schools.com/TAGS/att_script_integrity.asp
*/
    integrity?: string;

    /**
* `<script nomodule>`
* 
* Specifies that the script should not be executed in browsers supporting
    ES2015 modules
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_script_nomodule.asp
*/
    nomodule?: string;

    /**
* `<script referrerpolicy>`
* 
* Specifies which referrer information to send when fetching a script
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_script_referrerpolicy.asp
*/
    referrerpolicy?: string;

    /**
* `<script src>`
* 
* Specifies the URL of an external script file
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<script src="myscripts.js"></script>`
* 
@see https://www.w3schools.com/TAGS/att_script_src.asp
*/
    src?: string;

    /**
* `<script type>`
* 
* Specifies the media type of the script
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<script type="application/javascript">
      document.getElementById("demo").innerHTML = "Hello JavaScript!";</script>`
* 
@see https://www.w3schools.com/TAGS/att_script_type.asp
*/
    type?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<script>`
* 
* Defines a client-side script
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_script.asp
*/
export class Script extends GlobalDom<HTMLElement> {
  constructor(props: ScriptProps = {}) {
    super({ node: document.createElement("script"), ...props });
  }
}
