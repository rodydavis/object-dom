import { parseHtml, generateHtml } from "../src/object-dom";

test("Parse HTML Check", () => {
  const target = `<html><head name="doc head"><title>Title</title></head><body></body></html>`;
  const result = parseHtml(target);
  const source = generateHtml(result);
  expect(source).toBe(target);
});
