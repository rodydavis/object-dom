
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ObjectProps extends NodeProps<HTMLElement> {
        attributes?: {
            
           /**
            * Specifies the URL of the resource to be used by the object
            */
            data?: string;

           /**
            * Specifies which form the object belongs to
            */
            form?: string;

           /**
            * Specifies the height of the object
            */
            height?: string;

           /**
            * Specifies a name for the object
            */
            name?: string;

           /**
            * Specifies the media type of data specified in the data attribute
            */
            type?: string;

           /**
            * Specifies whether the type attribute and the actual content of the 
    resource must match to be displayed
            */
            typemustmatch?: string;

           /**
            * Specifies the name of a client-side image map to be used with the object
            */
            usemap?: string;

           /**
            * Specifies the width of the object
            */
            width?: string;
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<object>`
     * 
     * Defines a container for an external application
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_object.asp
     */
    export class Object extends GlobalDom<HTMLElement> {
      constructor(props: ObjectProps = {}) {
        super({ node: document.createElement("object"), ...props });
      }
    }    
    