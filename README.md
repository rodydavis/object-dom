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

https://www.w3schools.com/TAGS/default.ASP

|Tag|Class|Description|
| --- | --- | --- |
|`<a>`| Anchor | Defines a hyperlink|
|`<abbr>`| Abbr | Defines an abbreviation or an acronym|
|`<address>`| Address | Defines contact information for the author/owner of a document|
|`<area>`| Area | Defines an area inside an image map|
|`<article>`| Article | Defines an article|
|`<aside>`| Aside | Defines content aside from the page content|
|`<audio>`| Audio | Defines embedded sound content|
|`<b>`| Bold | Defines bold text|
|`<base>`| Base | Specifies the base URL/target for all relative URLs in a document|
|`<bdi>`| Bdi | Isolates a part of text that might be formatted in a different direction from other text outside it|
|`<bdo>`| Bdo | Overrides the current text direction|
|`<blockquote>`| BlockQuote | Defines a section that is quoted from another source|
|`<body>`| Body | Defines the document's body|
|`<br>`| Br | Defines a single line break|
|`<button>`| Button | Defines a clickable button|
|`<canvas>`| Canvas | Used to draw graphics, on the fly, via scripting (usually JavaScript)|
|`<caption>`| Caption | Defines a table caption|
|`<cite>`| Cite | Defines the title of a work|
|`<code>`| Code | Defines a piece of computer code|
|`<col>`| Col | Specifies column properties for each column within a `<colgroup>` element|
|`<colgroup>`| ColGroup | Specifies a group of one or more columns in a table for formatting|
|`<data>`| Data | Adds a machine-readable translation of a given content|
|`<datalist>`| DataList | Specifies a list of pre-defined options for input controls|
|`<dd>`| Dd | Defines a description/value of a term in a description list|
|`<del>`| Del | Defines text that has been deleted from a document|
|`<details>`| Details | Defines additional details that the user can view or hide|
|`<dfn>`| Dfn | Specifies a term that is going to be defined within the content|
|`<dialog>`| Dialog | Defines a dialog box or window|
|`<div>`| Div | Defines a section in a document|
|`<dl>`| Dl | Defines a description list|
|`<dt>`| Dt | Defines a term/name in a description list|
|`<em>`| Em | Defines emphasized text|
|`<embed>`| Embed | Defines a container for an external application|
|`<fieldset>`| FieldSet | Groups related elements in a form|
|`<figcaption>`| FigCaption | Defines a caption for a `<figure>` element|
|`<figure>`| Figure | Specifies self-contained content|
|`<footer>`| Footer | Defines a footer for a document or section|
|`<form>`| Form | Defines an HTML form for user input|
|`<h1> to <h6>`| H1 to H6 | Defines HTML headings|
|`<head>`| Head | Contains metadata/information for the document|
|`<header>`| Header | Defines a header for a document or section|
|`<hr>`| Hr | Defines a thematic change in the content|
|`<html>`| Html | Defines the root of an HTML document|
|`<i>`| I | Defines a part of text in an alternate voice or mood|
|`<iframe>`| Iframe | Defines an inline frame|
|`<img>`| Img | Defines an image|
|`<input>`| Input | Defines an input control|
|`<ins>`| Ins | Defines a text that has been inserted into a document|
|`<kbd>`| Kbd | Defines keyboard input|
|`<label>`| Label | Defines a label for an `<input>` element|
|`<legend>`| Legend | Defines a caption for a `<fieldset>` element|
|`<li>`| Li | Defines a list item|
|`<link>`| Link | Defines the relationship between a document and an external resource (most used to link to style sheets)|
|`<main>`| Main | Specifies the main content of a document|
|`<map>`| Map | Defines an image map|
|`<mark>`| Mark | Defines marked/highlighted text|
|`<meta>`| Meta | Defines metadata about an HTML document|
|`<meter>`| Meter | Defines a scalar measurement within a known range (a gauge)|
|`<nav>`| Nav | Defines navigation links|
|`<noscript>`| NoScript | Defines an alternate content for users that do not support client-side scripts|
|`<object>`| Obj | Defines a container for an external application|
|`<ol>`| Ol | Defines an ordered list|
|`<optgroup>`| OptGroup | Defines a group of related options in a drop-down list|
|`<option>`| Option | Defines an option in a drop-down list|
|`<output>`| Output | Defines the result of a calculation|
|`<p>`| P | Defines a paragraph|
|`<param>`| Param | Defines a parameter for an object|
|`<picture>`| Picture | Defines a container for multiple image resources|
|`<pre>`| Pre | Defines preformatted text|
|`<progress>`| Progress | Represents the progress of a task|
|`<q>`| Quote | Defines a short quotation|
|`<rp>`| Rp | Defines what to show in browsers that do not support ruby annotations|
|`<rt>`| Rt | Defines an explanation/pronunciation of characters (for East Asian typography)|
|`<ruby>`| Ruby | Defines a ruby annotation (for East Asian typography)|
|`<s>`| S | Defines text that is no longer correct|
|`<samp>`| Samp | Defines sample output from a computer program|
|`<script>`| Script | Defines a client-side script|
|`<section>`| Section | Defines a section in a document|
|`<select>`| Select | Defines a drop-down list|
|`<small>`| Small | Defines smaller text|
|`<source>`| Source | Defines multiple media resources for media elements (`<video>` and `<audio>`)|
|`<span>`| Span | Defines a section in a document|
|`<strong>`| Strong | Defines important text|
|`<style>`| Style | Defines style information for a document|
|`<sub>`| Sub | Defines subscripted text|
|`<summary>`| Summary | Defines a visible heading for a `<details>` element|
|`<sup>`| Sup | Defines superscripted text|
|`<svg>`| Svg | Defines a container for SVG graphics|
|`<table>`| Table | Defines a table|
|`<tbody>`| TBody | Groups the body content in a table|
|`<td>`| Td | Defines a cell in a table|
|`<template>`| Template | Defines a container for content that should be hidden when the page loads|
|`<textarea>`| TextArea | Defines a multiline input control (text area)|
|`<tfoot>`| TFoot | Groups the footer content in a table|
|`<th>`| Th | Defines a header cell in a table|
|`<thead>`| THead | Groups the header content in a table|
|`<time>`| Time | Defines a specific time (or datetime)|
|`<title>`| Title | Defines a title for the document|
|`<tr>`| Tr | Defines a row in a table|
|`<track>`| Track | Defines text tracks for media elements (`<video>` and `<audio>`)|
|`<u>`| U | Defines some text that is unarticulated and styled differently from normal text|
|`<ul>`| Ul | Defines an unordered list|
|`<var>`| Var | Defines a variable|
|`<video>`| Video | Defines embedded video content|
|`<wbr>`| Wbr | Defines a possible line-break|

## Available Methods

- jsonTable
- render
- generateHtml
- parseHtml
- textContent

## Getting Started

### Functional Approach

```html
<div id="root"></div>
<script type="module">
  import { Div, P, Button, Row, Column, render } from 'object-dom';

  const label = new P({ text: 'Hello World!' });
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
import { ObjectDom, Div, H1, Button, Row, render } from 'object-dom';

class MyApp extends ObjectDom {
    constructor() { super() }
    render = () => {
        return new Div({
            children: [
                new H1({ text: 'Counter Example' }),
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
