import { generateHtml, GlobalDom } from "../src/object-dom";
import * as tags from "../src/dom";

group("Component tests", () => {
  // -- BEGIN_TAGS --
  testComponent("a", new tags.A());
  testComponent("abbr", new tags.Abbr());
  testComponent("address", new tags.Address());
  testComponent("area", new tags.Area());
  testComponent("article", new tags.Article());
  testComponent("aside", new tags.Aside());
  testComponent("audio", new tags.Audio());
  testComponent("b", new tags.B());
  testComponent("base", new tags.Base());
  testComponent("bdi", new tags.Bdi());
  testComponent("bdo", new tags.Bdo());
  testComponent("blockquote", new tags.Blockquote());
  testComponent("body", new tags.Body());
  testComponent("br", new tags.Br());
  testComponent("button", new tags.Button());
  testComponent("canvas", new tags.Canvas());
  testComponent("caption", new tags.Caption());
  testComponent("cite", new tags.Cite());
  testComponent("code", new tags.Code());
  testComponent("col", new tags.Col());
  testComponent("colgroup", new tags.Colgroup());
  testComponent("data", new tags.Data());
  testComponent("datalist", new tags.Datalist());
  testComponent("dd", new tags.Dd());
  testComponent("del", new tags.Del());
  testComponent("details", new tags.Details());
  testComponent("dfn", new tags.Dfn());
  testComponent("dialog", new tags.Dialog());
  testComponent("div", new tags.Div());
  testComponent("dl", new tags.Dl());
  testComponent("dt", new tags.Dt());
  testComponent("em", new tags.Em());
  testComponent("embed", new tags.Embed());
  testComponent("fieldset", new tags.Fieldset());
  testComponent("figcaption", new tags.Figcaption());
  testComponent("figure", new tags.Figure());
  testComponent("footer", new tags.Footer());
  testComponent("form", new tags.Form());
  testComponent("h1", new tags.H1());
  testComponent("h2", new tags.H2());
  testComponent("h3", new tags.H3());
  testComponent("h4", new tags.H4());
  testComponent("h5", new tags.H5());
  testComponent("h6", new tags.H6());
  testComponent("head", new tags.Head());
  testComponent("header", new tags.Header());
  testComponent("hr", new tags.Hr());
  testComponent("html", new tags.Html());
  testComponent("i", new tags.I());
  testComponent("iframe", new tags.Iframe());
  testComponent("img", new tags.Img());
  testComponent("input", new tags.Input());
  testComponent("ins", new tags.Ins());
  testComponent("kbd", new tags.Kbd());
  testComponent("label", new tags.Label());
  testComponent("legend", new tags.Legend());
  testComponent("li", new tags.Li());
  testComponent("link", new tags.Link());
  testComponent("main", new tags.Main());
  testComponent("map", new tags.Map());
  testComponent("mark", new tags.Mark());
  testComponent("meta", new tags.Meta());
  testComponent("meter", new tags.Meter());
  testComponent("nav", new tags.Nav());
  testComponent("noscript", new tags.Noscript());
  testComponent("object", new tags.Obj());
  testComponent("ol", new tags.Ol());
  testComponent("optgroup", new tags.Optgroup());
  testComponent("option", new tags.Option());
  testComponent("output", new tags.Output());
  testComponent("p", new tags.P());
  testComponent("param", new tags.Param());
  testComponent("picture", new tags.Picture());
  testComponent("pre", new tags.Pre());
  testComponent("progress", new tags.Progress());
  testComponent("q", new tags.Q());
  testComponent("rp", new tags.Rp());
  testComponent("rt", new tags.Rt());
  testComponent("ruby", new tags.Ruby());
  testComponent("s", new tags.S());
  testComponent("samp", new tags.Samp());
  testComponent("script", new tags.Script());
  testComponent("section", new tags.Section());
  testComponent("select", new tags.Select());
  testComponent("small", new tags.Small());
  testComponent("source", new tags.Source());
  testComponent("span", new tags.Span());
  testComponent("strong", new tags.Strong());
  testComponent("style", new tags.Style());
  testComponent("sub", new tags.Sub());
  testComponent("summary", new tags.Summary());
  testComponent("sup", new tags.Sup());
  testComponent("svg", new tags.Svg());
  testComponent("table", new tags.Table());
  testComponent("tbody", new tags.Tbody());
  testComponent("td", new tags.Td());
  testComponent("template", new tags.Template());
  testComponent("textarea", new tags.Textarea());
  testComponent("tfoot", new tags.Tfoot());
  testComponent("th", new tags.Th());
  testComponent("thead", new tags.Thead());
  testComponent("time", new tags.Time());
  testComponent("title", new tags.Title());
  testComponent("tr", new tags.Tr());
  testComponent("track", new tags.Track());
  testComponent("u", new tags.U());
  testComponent("ul", new tags.Ul());
  testComponent("var", new tags.Var());
  testComponent("video", new tags.Video());
  testComponent("wbr", new tags.Wbr());
  // -- END_TAGS --
});

function testComponent(tag: string, target: GlobalDom<HTMLElement>) {
  group(`${tag} tests`, () => {
    test(`${tag} correct output`, () => {
      const htmlResult = generateHtml(target);
      if (htmlResult.match("></")) {
        expect(htmlResult).toBe(`<${tag}></${tag}>`);
      } else {
        expect(htmlResult).toBe(`<${tag}>`);
      }
    });
  });
}

function group(_: string, action: () => void) {
  // console.log("testing group", name);
  action();
}
