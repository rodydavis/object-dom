// @ts-ignore
import { ObjectDom, Div, H1, Button, Row } from "object-dom";

export class MyApp extends ObjectDom {
  constructor() {
    super();
  }
  render = () => {
    return new Div({
      children: [new H1({ text: "Counter Example" }), new Counter()],
    });
  };
}

class Counter extends ObjectDom {
  value = 0;
  render = () => {
    return new Div({
      style: { padding: "5px" },
      children: [
        `${this.value}`,
        new Row({
          children: [
            new Button({
              text: "-",
              style: { width: "50px" },
              onClick: () => {
                this.value -= 1;
                this.update();
              },
            }),
            new Button({
              text: "+",
              style: { width: "50px", marginLeft: "5px" },
              onClick: () => {
                this.value += 1;
                this.update();
              },
            }),
          ],
        }),
      ],
    });
  };
}
