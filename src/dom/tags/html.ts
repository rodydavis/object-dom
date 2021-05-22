import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface HtmlProps extends NodeProps<HTMLElement> {
  attributes?: {
    /**
* `<html xmlns>`
* 
* Specifies the XML namespace attribute (If you need your content to conform to XHTML)
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
Example: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Title of the document</title>
</head>
<body>
The content of the document......
</body>
</html>`
* 
@see https://www.w3schools.com/TAGS/att_html_xmlns.asp
*/
    xmlns?: string;

    [key: string]: PossibleAttr;
  };
}

/**
* `<html>`
* 
* Defines the root of an HTML document
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
* 
@see https://www.w3schools.com/TAGS/tag_html.asp
*/
export class Html extends GlobalDom<HTMLElement> {
  constructor(props: HtmlProps = {}) {
    super({ node: document.createElement("html"), ...props });
  }
}
