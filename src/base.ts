export class ObjectDom<T extends HTMLElement | string> {
    constructor(public node: T, public styles: Styles, public children: Array<ObjectDom<HTMLElement>>) { }
    render(): string {
        const node = this.node;
        if (node instanceof HTMLElement) return nodeToHtml(node, this.styles, this.children);
        return node.toString();
    }
}

export interface Styles {
    width?: string;
    height?: string;
}  

function applyNodeStyles(node:HTMLElement, styles: Styles) {
    if (styles?.width) node.style.width = styles.width;
    if (styles?.height) node.style.height = styles.height;
}

function applyNodeChildren(node:HTMLElement, children: Array<ObjectDom<HTMLElement>>) {
    const nodes: string[] = [];
    for (const child of children) {
        const childHtml = child.render();
        nodes.push(childHtml);
    }
    if (nodes.length > 0) {
        node.innerHTML = nodes.join('\n');
    }
}

function nodeToHtml(node:HTMLElement, styles: Styles, children: Array<ObjectDom<HTMLElement>>) : string {
    applyNodeStyles(node, styles);
    applyNodeChildren(node, children);
    return node.outerHTML;
}
