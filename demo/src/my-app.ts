import { ObjectDom, Div, H1, Button, Row, Canvas } from "object-dom";

export class MyApp extends ObjectDom {
  render = () => {
    return new Div({
      children: [new H1({ text: "Counter Example" }), new Counter(), new CanvasExample()],
    });
  };
}

class Counter extends ObjectDom {
  value = 0;
  render() {
    return new Div({
      styles: { margin: "5px" },
      children: [
        `${this.value}`,
        new Row({
          children: [
            new Button({
              text: "-",
              styles: { width: "50px" },
              events: {
                click: () => {
                  this.value -= 1;
                  this.update();
                },
              },
            }),
            new Button({
              text: "+",
              styles: { width: "50px", marginLeft: "5px" },
              events: {
                click: () => {
                  this.value += 1;
                  this.update();
                },
              },
            }),
          ],
        }),
      ],
    });
  }
}

class CanvasExample extends ObjectDom {
  render() {
    return new Canvas({
      styles: { width: "200px", height: "200px" },
      onCreate: (node) => {
        const canvas = node as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;

        // Create gradient
        const grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10, 10, 150, 80);
      },
    });
  }
}
