import { LitElement, html, customElement } from "lit-element";
import { MyApp } from "./my-app";

@customElement("my-element")
export class MyElement extends LitElement {
  app = new MyApp();

  render() {
    const elem = this.app.render().node;
    return html`${elem}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
