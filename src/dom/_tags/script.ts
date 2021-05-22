import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface ScriptProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
     * Specifies that the script is executed asynchronously (only for external scripts)
     */
    async?: string;

    /**
     * Sets the mode of the request to an HTTP CORS Request
     */
    crossorigin?: string;

    /**
     * Specifies that the script is executed when the page has finished parsing (only for external scripts)
     */
    defer?: string;

    /**
            * Allows a browser to check the fetched script to ensure that the code is 
    never loaded if the source has been manipulated
            */
    integrity?: string;

    /**
            * Specifies that the script should not be executed in browsers supporting
    ES2015 modules
            */
    nomodule?: string;

    /**
     * Specifies which referrer information to send when fetching a script
     */
    referrerpolicy?: string;

    /**
     * Specifies the URL of an external script file
     */
    src?: string;

    /**
     * Specifies the media type of the script
     */
    type?: string;
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<script>`
 *
 * Defines a client-side script
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_script.asp
 */
export class Script extends GlobalDom<HTMLElement> {
  constructor(props: ScriptProps = {}) {
    super({ node: document.createElement("script"), ...props });
  }
}
