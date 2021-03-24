# object_dom

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)
[![Dev Dependencies](https://david-dm.org/alexjoverm/typescript-library-starter/dev-status.svg)](https://david-dm.org/alexjoverm/typescript-library-starter?type=dev)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/AJoverMorales)

JS Declarative HTML Dom

```html
<div id="root"></div>
<script type="module">
    import { Div, Text, Button, Row, Column, render } from './object-dom.es5.js';

    const label = new Text({ text: 'Hello World!' });
    const button = new Button({
        text: 'Update',
        style: { width: '100px' },
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
                    }),
                ],
            }),
        ]
    });
    button.onClick = () => {
        label.text = 'New Update!';
    };
    render(app, document.body.querySelector('#root'));
</script>
```

Or take a class approach:

```html
<div id="root"></div>
<script type="module">
    import { Div, Heading1, Paragraph, Button, Row, Column, render } from './object-dom.es5.js';

    class MyApp extends Div {
        constructor() {
            super();
            const counter = new Paragraph({ text: '0' });
            const increment = new Button({
                text: '+',
                style: { width: '50px' },
            });
            increment.onClick = () => {
                counter.text = (Number(counter.text) + 1).toString();
            };
            const decrement = new Button({
                text: '-',
                style: { width: '50px' },
            });
            decrement.onClick = () => {
                counter.text = (Number(counter.text) - 1).toString();
            };
            this.addChild(new Column({
                children: [
                    new Heading1({ text: 'Counter Example' }),
                    counter,
                    new Row({ children: [decrement, increment] }),
                ],
            }));
        }
    }

    render(new MyApp(), document.body.querySelector('#root'));
</script>
```
