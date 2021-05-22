import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ObjectProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<object data>`
* 
* Specifies the URL of the resource to be used by the object
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<object data="pic_trulli.jpg" width="300" height="200"</object>`
* 
@see https://www.w3schools.com/TAGS/att_object_data.asp
*/
    data?: string;

    /**
* `<object form>`
* 
* Specifies which form the object belongs to
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Not supported**  | **Not supported**  |   **Not supported**   | **Not supported** |
* 
Example: `<form action="/action_page.php" id="form1">
  
 First name: <input type="text" name="fname"><br>
  
 <input type="submit" value="Submit">
 </form>
 
    <object data="pic_trulli.jpg" width="300" height="200"></object>`
* 
@see https://www.w3schools.com/TAGS/att_object_form.asp
*/
    form?: string;

    /**
* `<object height>`
* 
* Specifies the height of the object
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<object data="pic_trulli.jpg" height="300" width="200"></object>`
* 
@see https://www.w3schools.com/TAGS/att_object_height.asp
*/
    height?: string;

    /**
* `<object name>`
* 
* Specifies a name for the object
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<object data="pic_trulli.jpg" width="300" height="200"
name="obj1"></object>`
* 
@see https://www.w3schools.com/TAGS/att_object_name.asp
*/
    name?: string;

    /**
* `<object type>`
* 
* Specifies the media type of data specified in the data attribute
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<object data="pic_trulli.jpg" type="image/jpg" width="400" height="400"></object>`
* 
@see https://www.w3schools.com/TAGS/att_object_type.asp
*/
    type?: string;

    /**
* `<object typemustmatch>`
* 
* Specifies whether the type attribute and the actual content of the 
    resource must match to be displayed
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/att_object_typemustmatch.asp
*/
    typemustmatch?: string;

    /**
* `<object usemap>`
* 
* Specifies the name of a client-side image map to be used with the object
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Not supported**  | **Yes**  |   **Not supported**   | **Not supported** |
* 
Example: `<object data="planets.gif" width="145" height="126" usemap="#planetmap"></object>`
* 
@see https://www.w3schools.com/TAGS/att_object_usemap.asp
*/
    usemap?: string;

    /**
* `<object width>`
* 
* Specifies the width of the object
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<object data="pic_trulli.jpg" width="200" height="300"></object>`
* 
@see https://www.w3schools.com/TAGS/att_object_width.asp
*/
    width?: string;
    [key: string]: PossibleAttr;
  };
}

/**
* `<object>`
* 
* Defines a container for an external application
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_object.asp
*/
export class Object extends GlobalDom<HTMLElement> {
  constructor(props: ObjectProps = {}) {
    super({ node: document.createElement("object"), ...props });
  }
}
