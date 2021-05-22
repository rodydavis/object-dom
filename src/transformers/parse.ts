import { GlobalDom } from "../object-dom";
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
  let base: GlobalDom<HTMLElement>;
  switch (node.tagName.toLowerCase()) {
    case "a":
      base = new tags.A({});
      break;
    case "abbr":
      base = new tags.Abbr({});
      break;
    case "address":
      base = new tags.Address({});
      break;
    case "area":
      base = new tags.Area({});
      break;
    case "article":
      base = new tags.Article({});
      break;
    case "aside":
      base = new tags.Aside({});
      break;
    case "audio":
      base = new tags.Audio({});
      break;
    case "b":
      base = new tags.B({});
      break;
    case "base":
      base = new tags.Base({});
      break;
    case "bdi":
      base = new tags.Bdi({});
      break;
    case "bdo":
      base = new tags.Bdo({});
      break;
    case "blockquote":
      base = new tags.Blockquote({});
      break;
    case "body":
      base = new tags.Body({});
      break;
    case "br":
      base = new tags.Br({});
      break;
    case "button":
      base = new tags.Button({});
      break;
    case "canvas":
      base = new tags.Canvas({});
      break;
    case "caption":
      base = new tags.Caption({});
      break;
    case "cite":
      base = new tags.Cite({});
      break;
    case "code":
      base = new tags.Code({});
      break;
    case "col":
      base = new tags.Col({});
      break;
    case "colgroup":
      base = new tags.Colgroup({});
      break;
    case "data":
      base = new tags.Data({});
      break;
    case "datalist":
      base = new tags.Datalist({});
      break;
    case "dd":
      base = new tags.Dd({});
      break;
    case "del":
      base = new tags.Del({});
      break;
    case "details":
      base = new tags.Details({});
      break;
    case "dfn":
      base = new tags.Dfn({});
      break;
    case "dialog":
      base = new tags.Dialog({});
      break;
    case "div":
      base = new tags.Div({});
      break;
    case "dl":
      base = new tags.Dl({});
      break;
    case "dt":
      base = new tags.Dt({});
      break;
    case "em":
      base = new tags.Em({});
      break;
    case "embed":
      base = new tags.Embed({});
      break;
    case "fieldset":
      base = new tags.Fieldset({});
      break;
    case "figcaption":
      base = new tags.Figcaption({});
      break;
    case "figure":
      base = new tags.Figure({});
      break;
    case "footer":
      base = new tags.Footer({});
      break;
    case "form":
      base = new tags.Form({});
      break;
    case "h1":
      base = new tags.H1({});
      break;
    case "h2":
      base = new tags.H2({});
      break;
    case "h3":
      base = new tags.H3({});
      break;
    case "h4":
      base = new tags.H4({});
      break;
    case "h5":
      base = new tags.H5({});
      break;
    case "h6":
      base = new tags.H6({});
      break;
    case "head":
      base = new tags.Head({});
      break;
    case "header":
      base = new tags.Header({});
      break;
    case "hr":
      base = new tags.Hr({});
      break;
    case "html":
      base = new tags.Html({});
      break;
    case "i":
      base = new tags.I({});
      break;
    case "iframe":
      base = new tags.Iframe({});
      break;
    case "img":
      base = new tags.Img({});
      break;
    case "input":
      base = new tags.Input({});
      break;
    case "ins":
      base = new tags.Ins({});
      break;
    case "kbd":
      base = new tags.Kbd({});
      break;
    case "label":
      base = new tags.Label({});
      break;
    case "legend":
      base = new tags.Legend({});
      break;
    case "li":
      base = new tags.Li({});
      break;
    case "link":
      base = new tags.Link({});
      break;
    case "main":
      base = new tags.Main({});
      break;
    case "map":
      base = new tags.Map({});
      break;
    case "mark":
      base = new tags.Mark({});
      break;
    case "meta":
      base = new tags.Meta({});
      break;
    case "meter":
      base = new tags.Meter({});
      break;
    case "nav":
      base = new tags.Nav({});
      break;
    case "noscript":
      base = new tags.Noscript({});
      break;
    case "object":
      base = new tags.Obj({});
      break;
    case "ol":
      base = new tags.Ol({});
      break;
    case "optgroup":
      base = new tags.Optgroup({});
      break;
    case "option":
      base = new tags.Option({});
      break;
    case "output":
      base = new tags.Output({});
      break;
    case "p":
      base = new tags.P({});
      break;
    case "param":
      base = new tags.Param({});
      break;
    case "picture":
      base = new tags.Picture({});
      break;
    case "pre":
      base = new tags.Pre({});
      break;
    case "progress":
      base = new tags.Progress({});
      break;
    case "q":
      base = new tags.Q({});
      break;
    case "rp":
      base = new tags.Rp({});
      break;
    case "rt":
      base = new tags.Rt({});
      break;
    case "ruby":
      base = new tags.Ruby({});
      break;
    case "s":
      base = new tags.S({});
      break;
    case "samp":
      base = new tags.Samp({});
      break;
    case "script":
      base = new tags.Script({});
      break;
    case "section":
      base = new tags.Section({});
      break;
    case "select":
      base = new tags.Select({});
      break;
    case "small":
      base = new tags.Small({});
      break;
    case "source":
      base = new tags.Source({});
      break;
    case "span":
      base = new tags.Span({});
      break;
    case "strong":
      base = new tags.Strong({});
      break;
    case "style":
      base = new tags.Style({});
      break;
    case "sub":
      base = new tags.Sub({});
      break;
    case "summary":
      base = new tags.Summary({});
      break;
    case "sup":
      base = new tags.Sup({});
      break;
    case "svg":
      base = new tags.Svg({});
      break;
    case "table":
      base = new tags.Table({});
      break;
    case "tbody":
      base = new tags.Tbody({});
      break;
    case "td":
      base = new tags.Td({});
      break;
    case "template":
      base = new tags.Template({});
      break;
    case "textarea":
      base = new tags.Textarea({});
      break;
    case "tfoot":
      base = new tags.Tfoot({});
      break;
    case "th":
      base = new tags.Th({});
      break;
    case "thead":
      base = new tags.Thead({});
      break;
    case "time":
      base = new tags.Time({});
      break;
    case "title":
      base = new tags.Title({});
      break;
    case "tr":
      base = new tags.Tr({});
      break;
    case "track":
      base = new tags.Track({});
      break;
    case "u":
      base = new tags.U({});
      break;
    case "ul":
      base = new tags.Ul({});
      break;
    case "var":
      base = new tags.Var({});
      break;
    case "video":
      base = new tags.Video({});
      break;
    case "wbr":
      base = new tags.Wbr({});
      break;
    default:
      base = new tags.Custom(node.tagName, {});
      break;
  }
  for (let i = 0; i < node.attributes.length; i++) {
    const attr = node.attributes[i];
    base.setAttr(attr.name, attr.value);
  }
  if (node.children.length === 0) {
    base.text = node.innerHTML ?? "";
  } else if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      base.addChild(parseNode(child));
    }
  }
  return base;
}
