import { create } from "../src/object-dom";

test("Base HTML Create", () => {
  const target = create({ title: "Example" });
  expect(target.toHtml() === "<html><head><title></title></head><body></body></html>").toBe(true);
});
