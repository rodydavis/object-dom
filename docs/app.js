import { ObjectDomBase, Div, Heading1, Paragraph, Button, Row, render } from './dist/object-dom.es5.js';

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
                        }), new Button({
                            text: '+',
                            style: { width: '50px', margin: '5px' },
                            onClick: () => {
                                this.counter.text = (Number(this.counter.text) + 1).toString();
                            }
                        }),
                    ]
                }),
            ]
        });
    }
}

render(new MyApp(), document.body.querySelector('#root'));