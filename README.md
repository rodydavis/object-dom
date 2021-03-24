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

    const text = new Text('Hello World!');
    const button = new Button('Update', {
        style: {
            width: '100px'
        },
    });
    const app = new Div({
        children: [
            new Column({
                children: [
                    text,
                    button,
                    new Row({
                        style: {
                            padding: '10px'
                        },
                        children: [
                            'A', 'B', 'C'
                        ]
                    }),
                ],
            }),
        ]
    });
    button.onClick = () => {
        text.value = 'New Update!';
    };
    render(app, document.body.querySelector('#root'));
</script>
```
