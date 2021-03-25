import { Div } from "../src/object-dom"

/**
 * Div test
 */
describe("Div test", () => {
  it("Div is instantiable", () => {
    expect(new Div()).toBeInstanceOf(Div)
  });

  it("Div correct output", () => {
    const source = new Div();
    const htmlResult = source.toHtml();
    expect(htmlResult).toEqual('<div></div>')
  });
})
