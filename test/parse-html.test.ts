import { Body, Head, Html, parseHtml, Title, generateHtml } from "../src/object-dom";

test("Parse HTML Check", () => {
  const raw = `<html><head name="doc head"><title>Title</title></head><body></body></html>`;
  const source = generateHtml(parseHtml(raw));
  expect(source).toBe(raw);
  const target = generateHtml(
    new Html({
      children: [new Head({ children: [new Title()] }), new Body()],
    })
  );
  expect(source).toBe(target);
});
