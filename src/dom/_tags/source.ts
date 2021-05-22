
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface SourceProps extends NodeProps<HTMLElement> {
        attributes?: {
            
           /**
            * Accepts any valid media query that would normally be defined in a CSS
            */
            media?: string;

           /**
            * Specifies image sizes for different page layouts
            */
            sizes?: string;

           /**
            * Required when <source> is used in <audio> and <video>. Specifies the URL of the media file
            */
            src?: string;

           /**
            * Required when <source> is used in <picture>. Specifies the URL of the 
    image to use in different situations
            */
            srcset?: string;

           /**
            * Specifies the MIME-type of the resource
            */
            type?: string;
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<source>`
     * 
     * Defines multiple media resources for media elements (`<video>` and <audio>)
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **4.0**  | **3.5**  |   **4.0**   | **9.0** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_source.asp
     */
    export class Source extends GlobalDom<HTMLElement> {
      constructor(props: SourceProps = {}) {
        super({ node: document.createElement("source"), ...props });
      }
    }    
    