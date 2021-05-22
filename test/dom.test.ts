import {
  Body,
  B,
  Br,
  Button,
  Del,
  Div,
  Em,
  Head,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Html,
  Ins,
  I,
  Link,
  Mark,
  Meta,
  P,
  Script,
  Small,
  Span,
  Strong,
  Style,
  Sub,
  Title,
  Form,
  Label,
  Input,
  Table,
  Td,
  Th,
  Tbody,
  Tfoot,
  Thead,
  Tr,
  Caption,
  Col,
  Colgroup,
  generateHtml,
  GlobalDom,
} from "../src/object-dom";

group("Component tests", () => {
  testComponent("html", new Html());
  testComponent("head", new Head());
  testComponent("body", new Body());
  testComponent("style", new Style());
  testComponent("script", new Script());
  testComponent("link", new Link());
  testComponent("meta", new Meta());
  testComponent("title", new Title());
  testComponent("div", new Div());
  testComponent("button", new Button());
  testComponent("br", new Br());
  testComponent("span", new Span());
  testComponent("p", new P());
  testComponent("b", new B());
  testComponent("strong", new Strong());
  testComponent("i", new I());
  testComponent("em", new Em());
  testComponent("mark", new Mark());
  testComponent("small", new Small());
  testComponent("del", new Del());
  testComponent("ins", new Ins());
  testComponent("sub", new Sub());
  testComponent("h1", new H1());
  testComponent("h2", new H2());
  testComponent("h3", new H3());
  testComponent("h4", new H4());
  testComponent("h5", new H5());
  testComponent("h6", new H6());
  testComponent("form", new Form());
  testComponent("label", new Label());
  testComponent("input", new Input());
  testComponent("table", new Table());
  testComponent("thead", new Thead());
  testComponent("tfoot", new Tfoot());
  testComponent("tbody", new Tbody());
  testComponent("tr", new Tr());
  testComponent("th", new Th());
  testComponent("td", new Td());
  testComponent("caption", new Caption());
  testComponent("col", new Col());
  testComponent("colgroup", new Colgroup());
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
