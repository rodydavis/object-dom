import { ObjectDomBase, Div, Heading1, Paragraph, Button, Row, render } from './dist/object-dom.es5.js';

class MyApp extends ObjectDomBase {
    counter = new Paragraph({ text: '0', style: { margin: '5px' } });
    increment = new Button({
        text: '+',
        style: { width: '50px', margin: '5px' },
        onClick: () => {
            this.counter.text = (Number(this.counter.text) + 1).toString();
        }
    })
    decrement = new Button({
        text: '-',
        style: { width: '50px', margin: '5px' },
        onClick: () => {
            this.counter.text = (Number(this.counter.text) - 1).toString();
        }
    });

    build() {
        return new Div({
            children: [
                new Heading1({ text: 'Counter Example' }),
                this.counter,
                new Row({ children: [this.decrement, this.increment] }),
            ]
        });
    }
}

render(new MyApp(), document.body.querySelector('#root'));