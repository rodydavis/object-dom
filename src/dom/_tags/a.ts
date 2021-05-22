
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface AProps extends NodeProps<HTMLElement> {
        attributes?: {
            
           /**
            * Specifies that the target will be downloaded when a user clicks on the hyperlink
            */
            download?: string;

           /**
            * Specifies the URL of the page the link goes to
            */
            href?: string;

           /**
            * Specifies the language of the linked document
            */
            hreflang?: string;

           /**
            * Specifies what media/device the linked document is optimized for
            */
            media?: string;

           /**
            * Specifies a space-separated list of URLs to which, when the link is 
    followed, post requests with the body ping will be sent by the browser (in 
    the background). Typically used for tracking.
            */
            ping?: string;

           /**
            * Specifies which referrer information to send with the link
            */
            referrerpolicy?: string;

           /**
            * Specifies the relationship between the current document and the linked document
            */
            rel?: string;

           /**
            * Specifies where to open the linked document
            */
            target?: string;

           /**
            * Specifies the media type of the linked document
            */
            type?: string;
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<a>`
     * 
     * Defines a hyperlink
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_a.asp
     */
    export class A extends GlobalDom<HTMLElement> {
      constructor(props: AProps = {}) {
        super({ node: document.createElement("a"), ...props });
      }
    }    
    