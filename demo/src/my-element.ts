import { LitElement, html, customElement, css, query } from "lit-element";
import { generateCode } from "object-dom";

declare function js_beautify(value: string, options?: any): string;
declare function html_beautify(value: string, options?: any): string;

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    main {
      display: grid;
      width: 100%;
      height: 100vh;
      grid-template-areas:
        "input actions output"
        "input actions output"
        "input actions output";
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr auto 1fr;
    }
    #code-source {
      grid-area: output;
    }
    #html-source {
      grid-area: input;
    }
    #actions {
      width: 5px;
      grid-area: actions;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .code {
      margin: 5px;
    }
    .spacer-vertical {
      height: 10px;
    }
  `;

  @query("#code-source") codeSource!: HTMLTextAreaElement;
  @query("#html-source") htmlSource!: HTMLTextAreaElement;

  render() {
    const fixedSource = html_beautify(HTML_SOURCE);
    return html` <main>
      <textarea
        id="html-source"
        class="code"
        @input="${() => this.updateOutput()})"
        .value=${fixedSource}
      ></textarea>
      <div id="actions">
        <!-- <button>></button> -->
        <!-- <div class="spacer-vertical"></div>
        <button><</button> -->
      </div>
      <textarea id="code-source" class="code" readonly></textarea>
    </main>`;
  }

  async firstUpdated() {
    this.updateOutput();
  }

  updateOutput() {
    const htmlCode = this.htmlSource.value;
    if (htmlCode !== html_beautify(htmlCode)) {
      this.htmlSource.value = html_beautify(htmlCode);
    }
    const codeOutput = generateCode(htmlCode);
    console.log("codeOutput", codeOutput);
    if (codeOutput) {
      this.codeSource.value = js_beautify(codeOutput, {
        indent_size: 2,
        space_in_empty_paren: true,
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}

const HTML_SOURCE = `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Object Dom Example</title>
    <style>
      body {
        padding: 0;
        margin: 0;
      }
    </style>
    <script type="module" src="/src/my-element.ts"></script>
  </head>
  <body>
    <my-element> </my-element>
  </body>
</html>
`;
