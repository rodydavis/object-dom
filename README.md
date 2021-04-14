# object-dom
Declarative dom with 1:1 mapping of objects and tags, typed css, reactive updates and no bundler needed.

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Tests](https://github.com/rodydavis/object_dom/actions/workflows/tests.yml/badge.svg)](https://github.com/rodydavis/object_dom/actions/workflows/tests.yml)
[![Published on npm](https://img.shields.io/npm/v/object-dom.svg)](https://www.npmjs.com/package/object-dom)

- ✅ No Dependencies
- ✅ ES Modules
- ✅ Full Browser Support
- ✅ 100% Typescript

## Supported Tags

- button
- form, input, label
- p, span, h1, h2, h3, h4, h5, h6
- div, br
- table, thead, tfoot, tbody, th, tr, td, col, colgroup, caption
- html, head, body, script, style, link, meta, title

## Available Classes

- Button, Break, Custom
- Span, Paragraph
- Bold, Strong, Italic, Emphasized
- Marked, Smaller, Deleted, Inserted
- Subscript, Superscript
- Heading1, Heading2, Heading3, Heading4, Heading5, Heading6
- Form, Label, InputGroup
- SubmitInput, TextInput, FileInput, NumberInput
- EmailInput, ColorInput, PhoneInput
- Table, TableRow, TableHeader, TableFooter, TableBody
- HeaderCell, Cell, Caption, TableColumn, TableColumnGroup
- Div, Grid, Block, Inline, InlineBlock
- Flex, Row, Column, Wrap
- Html, Head, Body, Script
- Style, Link, Meta, Title

## Available Methods

- jsonTable
- render
- create

## Getting Started

### Functional Approach

```html
<div id="root"></div>
<script type="module">
  import { Div, Text, Button, Row, Column, render } from 'object-dom';

  const label = new Text({ text: 'Hello World!' });
  const button = new Button({
    text: 'Update',
    style: { width: '100px' }
  });
  const app = new Div({
    children: [
      new Column({
        children: [
          label,
          button,
          new Row({
            style: { padding: '10px' },
            children: ['A', 'B', 'C']
          })
        ]
      })
    ]
  });
  button.onClick = () => {
    label.text = 'New Update!';
  };
  render(app, document.body.querySelector('#root'));
</script>
```

### Class Approach

```js
import { ObjectDom, Div, Heading1, Button, Row, render } from 'object-dom';

class MyApp extends ObjectDom {
    constructor() { super() }
    render = () => {
        return new Div({
            children: [
                new Heading1({ text: 'Counter Example' }),
                new Counter(),
            ]
        });
    }
}

class Counter extends ObjectDom {
    value = 0;
    render = () => {
        return new Div({
            style: { padding: '5px' },
            children: [
                `${this.value}`,
                new Row({
                    children: [
                        new Button({
                            text: '-',
                            style: { width: '50px' },
                            onClick: () => {
                                this.value -= 1;
                                this.update();
                            }
                        }),
                        new Button({
                            text: '+',
                            style: { width: '50px', marginLeft: '5px' },
                            onClick: () => {
                                this.value += 1;
                                this.update();
                            }
                        })
                    ]
                })
            ]
        });
    }
}

render(new MyApp(), document.body.querySelector('#root'));
```

### JSON Table

```js
jsonTable(
  [
    {
      first_name: 'John',
      last_name: 'Smith',
      company: 'N/A'
    },
    {
      first_name: 'Steve',
      last_name: 'Jobs',
      company: 'Apple'
    },
    {
      first_name: 'Bill',
      last_name: 'Gates',
      company: 'Microsoft'
    },
    {
      first_name: 'Elon',
      last_name: 'Musk',
      company: 'Tesla'
    }
  ],
  { style: { margin: '10px' } }
);
```

Which renders the following html:

```html
<table>
  <tr>
    <th>first_name</th>
    <th>last_name</th>
    <th>company</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Smith</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Steve</td>
    <td>Jobs</td>
    <td>Apple</td>
  </tr>
  <tr>
    <td>Bill</td>
    <td>Gates</td>
    <td>Microsoft</td>
  </tr>
  <tr>
    <td>Elon</td>
    <td>Musk</td>
    <td>Tesla</td>
  </tr>
</table>
```
