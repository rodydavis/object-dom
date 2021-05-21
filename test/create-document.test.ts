import { ObjectDocument, generateHtml } from "../src/object-dom";

test("Base HTML Create", () => {
  const base = new ObjectDocument({ title: "Example" });
  const source = generateHtml(base);
  const target = "<html><head><title>Example</title></head><body></body></html>";
  expect(source).toBe(target);

  const source2 = base.document().documentElement.outerHTML;
  const target2 = "<html><head><title>Example</title></head><body></body></html>";
  expect(source2).toBe(target2);
});
