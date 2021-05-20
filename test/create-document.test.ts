import { createDocument, generateHtml } from "../src/object-dom";

test("Base HTML Create", () => {
  const source = generateHtml(createDocument({ title: "Example" }));
  const target = "<html><head><title></title></head><body></body></html>";
  expect(source).toBe(target);
});
