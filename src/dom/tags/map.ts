import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface MapProps extends NodeProps<HTMLMapElement> {
  attributes?: {
    /**
* `<map name>`
* 
* Required. Specifies the name of the image map
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: <img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400"      height="379"><map name="workmap">  <area shape="rect"      coords="34,44,270,350" alt="Computer" href="computer.htm">  <area      shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">       <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">     <\/map>
* 
@see https://www.w3schools.com/TAGS/att_map_name.asp
*/
    name?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<map>`
* 
* Defines an image map
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_map.asp
*/
export class Map extends GlobalDom<HTMLMapElement> {
  constructor(props: MapProps = {}) {
    super({ node: document.createElement("map"), ...props });
  }
}
