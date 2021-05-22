
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface InputProps extends NodeProps<HTMLElement> {
        attributes?: {
            
           /**
            * Specifies a filter for what file types the user can pick from the file 
    input dialog box (only for type="file")
            */
            accept?: string;

           /**
            * Specifies an alternate text for images (only for type="image")
            */
            alt?: string;

           /**
            * Specifies whether an <input> element should have autocomplete enabled
            */
            autocomplete?: string;

           /**
            * Specifies that an <input> element should automatically get focus when the page loads
            */
            autofocus?: string;

           /**
            * Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")
            */
            checked?: string;

           /**
            * Specifies that the text direction will be submitted
            */
            dirname?: string;

           /**
            * Specifies that an <input> element should be disabled
            */
            disabled?: string;

           /**
            * Specifies the form the <input> element belongs to
            */
            form?: string;

           /**
            * Specifies the URL of the file that will process the input control when the form is submitted (for type="submit" and type="image")
            */
            formaction?: string;

           /**
            * Specifies how the form-data should be encoded when submitting it to the server (for type="submit" and type="image")
            */
            formenctype?: string;

           /**
            * Defines the HTTP method for sending data to the action URL (for type="submit" and type="image")
            */
            formmethod?: string;

           /**
            * Defines that form elements should not be validated when submitted
            */
            formnovalidate?: string;

           /**
            * Specifies where to display the response that is received after submitting the form (for type="submit" and type="image")
            */
            formtarget?: string;

           /**
            * Specifies the height of an <input> element (only for type="image")
            */
            height?: string;

           /**
            * Refers to a <datalist> element that contains pre-defined options for an <input> element
            */
            list?: string;

           /**
            * Specifies the maximum value for an <input> element
            */
            max?: string;

           /**
            * Specifies the maximum number of characters allowed in an <input> element
            */
            maxlength?: string;

           /**
            * Specifies a minimum value for an <input> element
            */
            min?: string;

           /**
            * Specifies the minimum number of characters required in an <input> element
            */
            minlength?: string;

           /**
            * Specifies that a user can enter more than one value in an <input> element
            */
            multiple?: string;

           /**
            * Specifies the name of an <input> element
            */
            name?: string;

           /**
            * Specifies a regular expression that an <input> element's value is checked against
            */
            pattern?: string;

           /**
            * Specifies a short hint that describes the expected value of an <input> element
            */
            placeholder?: string;

           /**
            * Specifies that an input field is read-only
            */
            readonly?: string;

           /**
            * Specifies that an input field must be filled out before submitting the form
            */
            required?: string;

           /**
            * Specifies the width, in characters, of an <input> element
            */
            size?: string;

           /**
            * Specifies the URL of the image to use as a submit button (only for 
    type="image")
            */
            src?: string;

           /**
            * Specifies the interval between legal numbers in an input field
            */
            step?: string;

           /**
            * Specifies the type <input> element to display
            */
            type?: string;

           /**
            * Specifies the value of an <input> element
            */
            value?: string;

           /**
            * Specifies the width of an <input> element (only for type="image")
            */
            width?: string;
            [key: string]: PossibleAttr;
        }
    }
    
    /**
     * HTML tag: `<input>`
     * 
     * Defines an input control
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
     * 
     * @see https://www.w3schools.com/TAGS/tag_input.asp
     */
    export class Input extends GlobalDom<HTMLElement> {
      constructor(props: InputProps = {}) {
        super({ node: document.createElement("input"), ...props });
      }
    }    
    