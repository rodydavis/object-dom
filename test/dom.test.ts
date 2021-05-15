import {
  Body,
  Bold,
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
  ObjectDom,
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
  TBody,
  TFoot,
  THead,
  Tr,
  Caption,
  Col,
  ColGroup,
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
  testComponent("b", new Bold());
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
  testComponent("thead", new THead());
  testComponent("tfoot", new TFoot());
  testComponent("tbody", new TBody());
  testComponent("tr", new Tr());
  testComponent("th", new Th());
  testComponent("td", new Td());
  testComponent("caption", new Caption());
  testComponent("col", new Col());
  testComponent("colgroup", new ColGroup());
});

function testComponent(tag: string, target: ObjectDom<HTMLElement>) {
  group(`${tag} tests`, () => {
    test(`${tag} correct output`, () => {
      const htmlResult = target.toHtml();
      if (htmlResult.match("></")) {
        expect(htmlResult === `<${tag}></${tag}>`).toBe(true);
      } else {
        expect(htmlResult === `<${tag}>`).toBe(true);
      }
    });
  });
}

function group(_: string, action: () => void) {
  // console.log("testing group", name);
  action();
}
