import { GlobalDom, ObjectDom } from "../object-dom";
import { parseNode } from "./parse";

function classNameFromTagName(tag: string): string {
  const name = tag.split("<").join("").split(">").join("").trim();
  switch (name) {
    // -- BEGIN_TAGS --

    case "a":
      return "A";
    case "abbr":
      return "Abbr";
    case "address":
      return "Address";
    case "area":
      return "Area";
    case "article":
      return "Article";
    case "aside":
      return "Aside";
    case "audio":
      return "Audio";
    case "b":
      return "B";
    case "base":
      return "Base";
    case "bdi":
      return "Bdi";
    case "bdo":
      return "Bdo";
    case "blockquote":
      return "Blockquote";
    case "body":
      return "Body";
    case "br":
      return "Br";
    case "button":
      return "Button";
    case "canvas":
      return "Canvas";
    case "caption":
      return "Caption";
    case "cite":
      return "Cite";
    case "code":
      return "Code";
    case "col":
      return "Col";
    case "colgroup":
      return "Colgroup";
    case "data":
      return "Data";
    case "datalist":
      return "Datalist";
    case "dd":
      return "Dd";
    case "del":
      return "Del";
    case "details":
      return "Details";
    case "dfn":
      return "Dfn";
    case "dialog":
      return "Dialog";
    case "div":
      return "Div";
    case "dl":
      return "Dl";
    case "dt":
      return "Dt";
    case "em":
      return "Em";
    case "embed":
      return "Embed";
    case "fieldset":
      return "Fieldset";
    case "figcaption":
      return "Figcaption";
    case "figure":
      return "Figure";
    case "footer":
      return "Footer";
    case "form":
      return "Form";
    case "h1":
      return "H1";
    case "h2":
      return "H2";
    case "h3":
      return "H3";
    case "h4":
      return "H4";
    case "h5":
      return "H5";
    case "h6":
      return "H6";
    case "head":
      return "Head";
    case "header":
      return "Header";
    case "hr":
      return "Hr";
    case "html":
      return "Html";
    case "i":
      return "I";
    case "iframe":
      return "Iframe";
    case "img":
      return "Img";
    case "input":
      return "Input";
    case "ins":
      return "Ins";
    case "kbd":
      return "Kbd";
    case "label":
      return "Label";
    case "legend":
      return "Legend";
    case "li":
      return "Li";
    case "link":
      return "Link";
    case "main":
      return "Main";
    case "map":
      return "Map";
    case "mark":
      return "Mark";
    case "meta":
      return "Meta";
    case "meter":
      return "Meter";
    case "nav":
      return "Nav";
    case "noscript":
      return "Noscript";
    case "object":
      return "Obj";
    case "ol":
      return "Ol";
    case "optgroup":
      return "Optgroup";
    case "option":
      return "Option";
    case "output":
      return "Output";
    case "p":
      return "P";
    case "param":
      return "Param";
    case "picture":
      return "Picture";
    case "pre":
      return "Pre";
    case "progress":
      return "Progress";
    case "q":
      return "Q";
    case "rp":
      return "Rp";
    case "rt":
      return "Rt";
    case "ruby":
      return "Ruby";
    case "s":
      return "S";
    case "samp":
      return "Samp";
    case "script":
      return "Script";
    case "section":
      return "Section";
    case "select":
      return "Select";
    case "small":
      return "Small";
    case "source":
      return "Source";
    case "span":
      return "Span";
    case "strong":
      return "Strong";
    case "style":
      return "Style";
    case "sub":
      return "Sub";
    case "summary":
      return "Summary";
    case "sup":
      return "Sup";
    case "svg":
      return "Svg";
    case "table":
      return "Table";
    case "tbody":
      return "Tbody";
    case "td":
      return "Td";
    case "template":
      return "Template";
    case "textarea":
      return "Textarea";
    case "tfoot":
      return "Tfoot";
    case "th":
      return "Th";
    case "thead":
      return "Thead";
    case "time":
      return "Time";
    case "title":
      return "Title";
    case "tr":
      return "Tr";
    case "track":
      return "Track";
    case "u":
      return "U";
    case "ul":
      return "Ul";
    case "var":
      return "Var";
    case "video":
      return "Video";
    case "wbr":
      return "Wbr";
    // -- END_TAGS --
    default:
      return "Custom";
  }
}

export function generateCode(source: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(source, "text/html");
  if (doc.firstChild) {
    const first = doc.querySelector("html");
    if (first) {
      const node = parseNode(first);
      return codeTemplate(objectTemplate(first, node));
    }
  }
  return codeTemplate("new HTML({})");
}

function objectTemplate(elem: Element, node: GlobalDom<HTMLElement>) {
  const tagName = elem.tagName.toLowerCase().split("<").join("").split(">").join("").trim();
  const name = classNameFromTagName(tagName);
  const sb: string[] = [];
  if (node.text) {
    sb.push(`    text: \`${node.text.trim()}\`,`);
  }
  const convertKey = (key: string): string => {
    if (key.includes(":")) {
     return `"${key}"`;
    }
    if (key.includes("-")) {
      const parts = key.split("-");
      return parts[0] + parts[1].slice(0, 1).toUpperCase() + parts[1].slice(1, parts[1].length);
    }
    return key;
  };
  if (node.attributes) {
    const items = Object.entries(node.attributes);
    if (items.length > 0) {
      sb.push(` attributes: {`);
      for (const [key, value] of items) {
        sb.push(`    ${convertKey(key)}: "${value?.value ?? ""}",`);
      }
      sb.push(` },`);
    }
  }
  if (node.styles) {
    const items = Object.entries(node.styles);
    if (items.length > 0) {
      sb.push(` styles: {`);
      for (const [key, value] of items) {
        sb.push(`    ${convertKey(key)}: "${value?.value ?? ""}",`);
      }
      sb.push(` },`);
    }
  }
  if (node.children && node.children.length > 0) {
    sb.push(` children: [`);
    for (const child of node.children) {
      if (child instanceof ObjectDom) {
        const childDom = child.renderDom();
        sb.push(`    ${objectTemplate(childDom.node, childDom)},`);
      } else if (typeof child === "string") {
        sb.push(`    ${child},`);
      } else {
        sb.push(`    ${getComments(child).join("\n")},`);
      }
    }
    sb.push(` ],`);
  }
  return `new tags.${name === "Custom" ? `Custom("${tagName}",` : `${name}(`}{
    ${sb.join("\n")}
  })`;
}

function getComments(elem: Comment) {
  var children = elem.childNodes;
  var comments = [];

  for (var i = 0, len = children.length; i < len; i++) {
    if (children[i].nodeType == Node.COMMENT_NODE) {
      comments.push(children[i]);
    }
  }
  return comments;
}

function codeTemplate(content: string) {
  return `
  import * as tags from 'object-dom';

  export class MyClass extends tags.ObjectDom {
    render() {
      return ${content};
    }
  }
  
  `;
}
