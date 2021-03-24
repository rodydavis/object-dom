# object_dom

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)
[![Dev Dependencies](https://david-dm.org/alexjoverm/typescript-library-starter/dev-status.svg)](https://david-dm.org/alexjoverm/typescript-library-starter?type=dev)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/AJoverMorales)

## Supported Tags

- button
- form, input, label
- p, span, h1, h2, h3, h4, h5, h6
- div, br
- table, thead, tfoot, tbody, th, tr, td, col, colgroup, caption

## Available Classes

- Button, Break
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

## Available Methods

- tableFromJsonList
- render

## Getting Started

Use functional style:

```html
<div id="root"></div>
<script type="module">
  import { Div, Text, Button, Row, Column, render } from './object-dom.es5.js';

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

Or take a class approach:

```js
import {
  ObjectDomBase,
  Div,
  Heading1,
  Paragraph,
  Button,
  Row,
  render
} from './dist/object-dom.es5.js';

class MyApp extends ObjectDomBase {
  counter = new Paragraph({ text: '0', style: { margin: '5px' } });

  build() {
    return new Div({
      children: [
        new Heading1({ text: 'Counter Example' }),
        this.counter,
        new Row({
          children: [
            new Button({
              text: '-',
              style: { width: '50px', margin: '5px' },
              onClick: () => {
                this.counter.text = (Number(this.counter.text) - 1).toString();
              }
            }),
            new Button({
              text: '+',
              style: { width: '50px', margin: '5px' },
              onClick: () => {
                this.counter.text = (Number(this.counter.text) + 1).toString();
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

or if you want to use `update` to rebuild the tree:

```js
import {
  ObjectDomBase,
  Div,
  Heading1,
  Paragraph,
  Button,
  Row,
  render
} from './dist/object-dom.es5.js';

class MyApp extends ObjectDomBase {
  value = 0;

  render() {
    return new Div({
      children: [
        new Heading1({ text: 'Counter Example' }),
        new Paragraph({ text: `${this.value}`, style: { margin: '5px' } }),
        new Row({
          children: [
            new Button({
              text: '-',
              style: { width: '50px', margin: '5px' },
              onClick: () => {
                this.value -= 1;
                this.update();
              }
            }),
            new Button({
              text: '+',
              style: { width: '50px', margin: '5px' },
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

Create a table from JSON:

```js
tableFromJsonList(
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
