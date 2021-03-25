import {
  Body,
  Bold,
  Break,
  Button,
  Deleted,
  Div,
  Emphasized,
  Head,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Html,
  Inserted,
  Italic,
  Link,
  Marked,
  Meta,
  ObjectDom,
  Paragraph,
  Script,
  Smaller,
  Span,
  Strong,
  Style,
  Subscript,
  Superscript,
  Title,
  Form,
  Label,
  Input,
  Table,
  Cell,
  HeaderCell,
  TableBody,
  TableFooter,
  TableHeader,
  TableRow,
  Caption,
  TableColumn,
  TableColumnGroup
} from '../src/object-dom';

describe('Component tests', () => {
  testComponent('html', new Html());
  testComponent('head', new Head());
  testComponent('body', new Body());
  testComponent('style', new Style());
  testComponent('script', new Script());
  testComponent('link', new Link());
  testComponent('meta', new Meta());
  testComponent('title', new Title());
  testComponent('div', new Div());
  testComponent('button', new Button());
  testComponent('br', new Break());
  testComponent('span', new Span());
  testComponent('p', new Paragraph());
  testComponent('b', new Bold());
  testComponent('strong', new Strong());
  testComponent('i', new Italic());
  testComponent('em', new Emphasized());
  testComponent('mark', new Marked());
  testComponent('small', new Smaller());
  testComponent('del', new Deleted());
  testComponent('ins', new Inserted());
  testComponent('sub', new Subscript());
  testComponent('sup', new Superscript());
  testComponent('h1', new Heading1());
  testComponent('h2', new Heading2());
  testComponent('h3', new Heading3());
  testComponent('h4', new Heading4());
  testComponent('h5', new Heading5());
  testComponent('h6', new Heading6());
  testComponent('form', new Form());
  testComponent('label', new Label());
  testComponent('input', new Input());
  testComponent('table', new Table());
  testComponent('thead', new TableHeader());
  testComponent('tfoot', new TableFooter());
  testComponent('tbody', new TableBody());
  testComponent('tr', new TableRow());
  testComponent('th', new HeaderCell());
  testComponent('td', new Cell());
  testComponent('caption', new Caption());
  testComponent('col', new TableColumn());
  testComponent('colgroup', new TableColumnGroup());
});

function testComponent(tag: string, target: ObjectDom) {
  describe(`${tag} tests`, () => {
    it(`${tag} correct output`, () => {
      const htmlResult = target.toHtml();
      if (htmlResult.match('></')) {
        expect(htmlResult).toEqual(`<${tag}></${tag}>`);
      } else {
        expect(htmlResult).toEqual(`<${tag}>`);
      }
    });
  });
}
