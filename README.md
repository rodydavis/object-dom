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

<!-- BEGIN_TAGS -->

| Tag            | Class      | Description                                                                                              |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| [`<a> `](https://www.w3schools.com/TAGS/tag_a.asp) | A | Defines a hyperlink |
| [`<abbr> `](https://www.w3schools.com/TAGS/tag_abbr.asp) | Abbr | Defines an abbreviation or an acronym |
| [`<address> `](https://www.w3schools.com/TAGS/tag_address.asp) | Address | Defines contact information for the author/owner of a document |
| [`<area> `](https://www.w3schools.com/TAGS/tag_area.asp) | Area | Defines an area inside an image map |
| [`<article> `](https://www.w3schools.com/TAGS/tag_article.asp) | Article | Defines an article |
| [`<aside> `](https://www.w3schools.com/TAGS/tag_aside.asp) | Aside | Defines content aside from the page content |
| [`<audio> `](https://www.w3schools.com/TAGS/tag_audio.asp) | Audio | Defines embedded sound content |
| [`<b> `](https://www.w3schools.com/TAGS/tag_b.asp) | B | Defines bold text |
| [`<base> `](https://www.w3schools.com/TAGS/tag_base.asp) | Base | Specifies the base URL/target for all relative URLs in a document |
| [`<bdi> `](https://www.w3schools.com/TAGS/tag_bdi.asp) | Bdi | Isolates a part of text that might be formatted in a different direction  from other text outside it |
| [`<bdo> `](https://www.w3schools.com/TAGS/tag_bdo.asp) | Bdo | Overrides the current text direction |
| [`<blockquote> `](https://www.w3schools.com/TAGS/tag_blockquote.asp) | Blockquote | Defines a section that is quoted from another source |
| [`<body> `](https://www.w3schools.com/TAGS/tag_body.asp) | Body | Defines the document's body |
| [`<br> `](https://www.w3schools.com/TAGS/tag_br.asp) | Br | Defines a single line break |
| [`<button> `](https://www.w3schools.com/TAGS/tag_button.asp) | Button | Defines a clickable button |
| [`<canvas> `](https://www.w3schools.com/TAGS/tag_canvas.asp) | Canvas | Used to draw graphics, on the fly, via scripting (usually JavaScript) |
| [`<caption> `](https://www.w3schools.com/TAGS/tag_caption.asp) | Caption | Defines a table caption |
| [`<cite> `](https://www.w3schools.com/TAGS/tag_cite.asp) | Cite | Defines the title of a work |
| [`<code> `](https://www.w3schools.com/TAGS/tag_code.asp) | Code | Defines a piece of computer code |
| [`<col> `](https://www.w3schools.com/TAGS/tag_col.asp) | Col | Specifies column properties for each column within a `<colgroup>` element |
| [`<colgroup> `](https://www.w3schools.com/TAGS/tag_colgroup.asp) | Colgroup | Specifies a group of one or more columns in a table for formatting |
| [`<data> `](https://www.w3schools.com/TAGS/tag_data.asp) | Data | Adds a machine-readable  translation of a given content |
| [`<datalist> `](https://www.w3schools.com/TAGS/tag_datalist.asp) | Datalist | Specifies a list of pre-defined options for input controls |
| [`<dd> `](https://www.w3schools.com/TAGS/tag_dd.asp) | Dd | Defines a description/value of a term in a description list |
| [`<del> `](https://www.w3schools.com/TAGS/tag_del.asp) | Del | Defines text that has been deleted from a document |
| [`<details> `](https://www.w3schools.com/TAGS/tag_details.asp) | Details | Defines additional details that the user can view or hide |
| [`<dfn> `](https://www.w3schools.com/TAGS/tag_dfn.asp) | Dfn | Specifies a term that is going to be defined within the content |
| [`<dialog> `](https://www.w3schools.com/TAGS/tag_dialog.asp) | Dialog | Defines a dialog box or window |
| [`<div> `](https://www.w3schools.com/TAGS/tag_div.asp) | Div | Defines a section in a document |
| [`<dl> `](https://www.w3schools.com/TAGS/tag_dl.asp) | Dl | Defines a description list |
| [`<dt> `](https://www.w3schools.com/TAGS/tag_dt.asp) | Dt | Defines a term/name in a description list |
| [`<em> `](https://www.w3schools.com/TAGS/tag_em.asp) | Em | Defines emphasized text |
| [`<embed> `](https://www.w3schools.com/TAGS/tag_embed.asp) | Embed | Defines a container for an external application |
| [`<fieldset> `](https://www.w3schools.com/TAGS/tag_fieldset.asp) | Fieldset | Groups related elements in a form |
| [`<figcaption> `](https://www.w3schools.com/TAGS/tag_figcaption.asp) | Figcaption | Defines a caption for a `<figure>` element |
| [`<figure> `](https://www.w3schools.com/TAGS/tag_figure.asp) | Figure | Specifies self-contained content |
| [`<footer> `](https://www.w3schools.com/TAGS/tag_footer.asp) | Footer | Defines a footer for a document or section |
| [`<form> `](https://www.w3schools.com/TAGS/tag_form.asp) | Form | Defines an HTML form for user input |
| [`<h1> `](https://www.w3schools.com/TAGS/tag_h1.asp) | H1 | Defines HTML headings |
| [`<h2> `](https://www.w3schools.com/TAGS/tag_h2.asp) | H2 | Defines HTML headings |
| [`<h3> `](https://www.w3schools.com/TAGS/tag_h3.asp) | H3 | Defines HTML headings |
| [`<h4> `](https://www.w3schools.com/TAGS/tag_h4.asp) | H4 | Defines HTML headings |
| [`<h5> `](https://www.w3schools.com/TAGS/tag_h5.asp) | H5 | Defines HTML headings |
| [`<h6> `](https://www.w3schools.com/TAGS/tag_h6.asp) | H6 | Defines HTML headings |
| [`<head> `](https://www.w3schools.com/TAGS/tag_head.asp) | Head | Contains metadata/information for the document |
| [`<header> `](https://www.w3schools.com/TAGS/tag_header.asp) | Header | Defines a header for a document or section |
| [`<hr> `](https://www.w3schools.com/TAGS/tag_hr.asp) | Hr | Defines a thematic change in the content |
| [`<html> `](https://www.w3schools.com/TAGS/tag_html.asp) | Html | Defines the root of an HTML document |
| [`<i> `](https://www.w3schools.com/TAGS/tag_i.asp) | I | Defines a part of text in an alternate voice or mood |
| [`<iframe> `](https://www.w3schools.com/TAGS/tag_iframe.asp) | Iframe | Defines an inline frame |
| [`<img> `](https://www.w3schools.com/TAGS/tag_img.asp) | Img | Defines an image |
| [`<input> `](https://www.w3schools.com/TAGS/tag_input.asp) | Input | Defines an input control |
| [`<ins> `](https://www.w3schools.com/TAGS/tag_ins.asp) | Ins | Defines a text that has been inserted into a document |
| [`<kbd> `](https://www.w3schools.com/TAGS/tag_kbd.asp) | Kbd | Defines keyboard input |
| [`<label> `](https://www.w3schools.com/TAGS/tag_label.asp) | Label | Defines a label for an `<input>` element |
| [`<legend> `](https://www.w3schools.com/TAGS/tag_legend.asp) | Legend | Defines a caption for a `<fieldset>` element |
| [`<li> `](https://www.w3schools.com/TAGS/tag_li.asp) | Li | Defines a list item |
| [`<link> `](https://www.w3schools.com/TAGS/tag_link.asp) | Link | Defines the relationship between a document and an external resource (most  used to link to style sheets) |
| [`<main> `](https://www.w3schools.com/TAGS/tag_main.asp) | Main | Specifies the main content of a document |
| [`<map> `](https://www.w3schools.com/TAGS/tag_map.asp) | Map | Defines an image map |
| [`<mark> `](https://www.w3schools.com/TAGS/tag_mark.asp) | Mark | Defines marked/highlighted text |
| [`<meta> `](https://www.w3schools.com/TAGS/tag_meta.asp) | Meta | Defines metadata about an HTML document |
| [`<meter> `](https://www.w3schools.com/TAGS/tag_meter.asp) | Meter | Defines a scalar measurement within a known range (a gauge) |
| [`<nav> `](https://www.w3schools.com/TAGS/tag_nav.asp) | Nav | Defines navigation links |
| [`<noscript> `](https://www.w3schools.com/TAGS/tag_noscript.asp) | Noscript | Defines an alternate content for users that do not support  client-side scripts |
| [`<object> `](https://www.w3schools.com/TAGS/tag_object.asp) | Obj | Defines a container for an external application |
| [`<ol> `](https://www.w3schools.com/TAGS/tag_ol.asp) | Ol | Defines an ordered list |
| [`<optgroup> `](https://www.w3schools.com/TAGS/tag_optgroup.asp) | Optgroup | Defines a group of related options in a drop-down list |
| [`<option> `](https://www.w3schools.com/TAGS/tag_option.asp) | Option | Defines an option in a drop-down list |
| [`<output> `](https://www.w3schools.com/TAGS/tag_output.asp) | Output | Defines the result of a calculation |
| [`<p> `](https://www.w3schools.com/TAGS/tag_p.asp) | P | Defines a paragraph |
| [`<param> `](https://www.w3schools.com/TAGS/tag_param.asp) | Param | Defines a parameter for an object |
| [`<picture> `](https://www.w3schools.com/TAGS/tag_picture.asp) | Picture | Defines a container for multiple image resources |
| [`<pre> `](https://www.w3schools.com/TAGS/tag_pre.asp) | Pre | Defines preformatted text |
| [`<progress> `](https://www.w3schools.com/TAGS/tag_progress.asp) | Progress | Represents the progress of a task |
| [`<q> `](https://www.w3schools.com/TAGS/tag_q.asp) | Q | Defines a short quotation |
| [`<rp> `](https://www.w3schools.com/TAGS/tag_rp.asp) | Rp | Defines what to show in browsers that do not support ruby annotations |
| [`<rt> `](https://www.w3schools.com/TAGS/tag_rt.asp) | Rt | Defines an explanation/pronunciation of characters (for East Asian  typography) |
| [`<ruby> `](https://www.w3schools.com/TAGS/tag_ruby.asp) | Ruby | Defines a ruby annotation (for East Asian typography) |
| [`<s> `](https://www.w3schools.com/TAGS/tag_s.asp) | S | Defines text that is no longer correct |
| [`<samp> `](https://www.w3schools.com/TAGS/tag_samp.asp) | Samp | Defines sample output from a computer program |
| [`<script> `](https://www.w3schools.com/TAGS/tag_script.asp) | Script | Defines a client-side script |
| [`<section> `](https://www.w3schools.com/TAGS/tag_section.asp) | Section | Defines a section in a document |
| [`<select> `](https://www.w3schools.com/TAGS/tag_select.asp) | Select | Defines a drop-down list |
| [`<small> `](https://www.w3schools.com/TAGS/tag_small.asp) | Small | Defines smaller text |
| [`<source> `](https://www.w3schools.com/TAGS/tag_source.asp) | Source | Defines multiple media resources for media elements (`<video>` and <audio>) |
| [`<span> `](https://www.w3schools.com/TAGS/tag_span.asp) | Span | Defines a section in a document |
| [`<strong> `](https://www.w3schools.com/TAGS/tag_strong.asp) | Strong | Defines important text |
| [`<style> `](https://www.w3schools.com/TAGS/tag_style.asp) | Style | Defines style information for a document |
| [`<sub> `](https://www.w3schools.com/TAGS/tag_sub.asp) | Sub | Defines subscripted text |
| [`<summary> `](https://www.w3schools.com/TAGS/tag_summary.asp) | Summary | Defines a visible heading for a `<details>` element |
| [`<sup> `](https://www.w3schools.com/TAGS/tag_sup.asp) | Sup | Defines superscripted text |
| [`<svg> `](https://www.w3schools.com/TAGS/tag_svg.asp) | Svg | Defines a container for SVG graphics |
| [`<table> `](https://www.w3schools.com/TAGS/tag_table.asp) | Table | Defines a table |
| [`<tbody> `](https://www.w3schools.com/TAGS/tag_tbody.asp) | Tbody | Groups the body content in a table |
| [`<td> `](https://www.w3schools.com/TAGS/tag_td.asp) | Td | Defines a cell in a table |
| [`<template> `](https://www.w3schools.com/TAGS/tag_template.asp) | Template | Defines a container for content that should be hidden when the page loads |
| [`<textarea> `](https://www.w3schools.com/TAGS/tag_textarea.asp) | Textarea | Defines a multiline input control (text area) |
| [`<tfoot> `](https://www.w3schools.com/TAGS/tag_tfoot.asp) | Tfoot | Groups the footer content in a table |
| [`<th> `](https://www.w3schools.com/TAGS/tag_th.asp) | Th | Defines a header cell in a table |
| [`<thead> `](https://www.w3schools.com/TAGS/tag_thead.asp) | Thead | Groups the header content in a table |
| [`<time> `](https://www.w3schools.com/TAGS/tag_time.asp) | Time | Defines a specific time (or datetime) |
| [`<title> `](https://www.w3schools.com/TAGS/tag_title.asp) | Title | Defines a title for the document |
| [`<tr> `](https://www.w3schools.com/TAGS/tag_tr.asp) | Tr | Defines a row in a table |
| [`<track> `](https://www.w3schools.com/TAGS/tag_track.asp) | Track | Defines text tracks for media elements (`<video>` and <audio>) |
| [`<u> `](https://www.w3schools.com/TAGS/tag_u.asp) | U | Defines some text that is unarticulated and styled differently from normal  text |
| [`<ul> `](https://www.w3schools.com/TAGS/tag_ul.asp) | Ul | Defines an unordered list |
| [`<var> `](https://www.w3schools.com/TAGS/tag_var.asp) | Var | Defines a variable |
| [`<video> `](https://www.w3schools.com/TAGS/tag_video.asp) | Video | Defines embedded video content |
| [`<wbr> `](https://www.w3schools.com/TAGS/tag_wbr.asp) | Wbr | Defines a possible line-break |
<!-- END_TAGS -->

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
  import { Div, P, Button, Row, Column, render } from "object-dom";

  const label = new P({ text: "Hello World!" });
  const button = new Button({
    text: "Update",
    style: { width: "100px" },
  });
  const app = new Div({
    children: [
      new Column({
        children: [
          label,
          button,
          new Row({
            style: { padding: "10px" },
            children: ["A", "B", "C"],
          }),
        ],
      }),
    ],
  });
  button.addEventListener('click', () => {
     label.text = "New Update!";
  }, false);
  render(app, document.body.querySelector("#root"));
</script>
```

### Class Approach

```js
import { ObjectDom, Div, H1, Button, Row, render } from "object-dom";

class MyApp extends ObjectDom {
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
              events: {
                click: () => {
                  this.value -= 1;
                  this.update();
                },
              },
            }),
            new Button({
              text: "+",
              style: { width: "50px", marginLeft: "5px" },
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
  };
}

render(new MyApp(), document.body.querySelector("#root"));
```

### JSON Table

```js
jsonTable(
  [
    {
      first_name: "John",
      last_name: "Smith",
      company: "N/A",
    },
    {
      first_name: "Steve",
      last_name: "Jobs",
      company: "Apple",
    },
    {
      first_name: "Bill",
      last_name: "Gates",
      company: "Microsoft",
    },
    {
      first_name: "Elon",
      last_name: "Musk",
      company: "Tesla",
    },
  ],
  { style: { margin: "10px" } }
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
