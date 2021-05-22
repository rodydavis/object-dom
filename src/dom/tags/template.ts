import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface TemplateProps extends NodeProps<HTMLTemplateElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
* `<template>`
* 
* Defines a container for content that should be hidden when the page loads
* 
* |  Chrome  | Firefox |  Safari   |  Edge  |
* | :------: | :-----: | :-------: | :----: |
* |  **26.0**  | **22.0**  |   **8.0**   | **13.0** |
* 
@see https://www.w3schools.com/TAGS/tag_template.asp
*/
export class Template extends GlobalDom<HTMLTemplateElement> {
  constructor(props: TemplateProps = {}) {
    super({ node: document.createElement("template"), ...props });
  }
}
