import { ObjectDomBase, Div, Heading1, Paragraph, Button, Row, render } from './dist/object-dom.es5.js';

class MyApp extends ObjectDomBase {
    value = 0

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
                        }),
                    ]
                }),
            ]
        });
    }
}

render(new MyApp(), document.body.querySelector('#root'));