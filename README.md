# object-dom

JS Declarative HTML Dom

```html
<div id="root"></div>
    <script type="module">
        import { Div, Text, render } from './dist/object-dom.es5.js';
        const app = new Div({
            children: [
                new Text('Hello World!'),
            ]
        });
        render(app, document.body.querySelector('#root'));
    </script>
```