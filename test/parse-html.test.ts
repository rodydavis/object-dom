import { Body, Head, Html, parseHtml, Title, generateHtml } from "../src/object-dom";

test("Parse HTML Check", () => {
  const source = generateHtml(
    parseHtml(`<html><head name="doc head"><title>Title</title></head><body></body></html>`)
  );
  const target = generateHtml(
    new Html({
      children: [new Head({ children: [new Title()] }), new Body()],
    })
  );
  console.debug("generateHtml", source);
  expect(source).toBe(target);
});
