import type { GlobalDom, NodeProps } from "../object-dom";
import * as tags from "../dom";

const parser = new DOMParser();

type DocType =
  | "text/html"
  | "text/xml"
  | "application/xml"
  | "application/xhtml+xml"
  | "image/svg+xml";

/**
 * Parses html string and returns
 * a object dom object
 */
export function parseHtml(source: string, type: DocType = "text/html"): GlobalDom<HTMLElement> {
  const doc = parser.parseFromString(source, type);
  if (doc.firstChild) {
    return parseNode(doc.firstChild as Element);
  }
  return new tags.Html({});
}

function parseNode(node: Element): GlobalDom<HTMLElement> {
  const props = { children: [] } as NodeProps<HTMLElement>;
  for (let i = 0; i < node.attributes.length; i++) {
    const attr = node.attributes[i];
    (props as any)[attr.name] = attr.value;
  }
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child === "string") {
        props.children!.push(child);
      } else {
        props.children!.push(parseNode(child));
      }
    }
  }
  const _props: any = props;
  switch (node.tagName) {
    case "html":
      return new tags.Html(_props);
    default:
      // return new tags.Custom(node.tagName, _props);
      return new tags.Div(_props);
  }
}
