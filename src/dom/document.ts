import { Style, Link, Meta, Title, Head, Script, Html, Body } from "../dom";
import { NodeArray, ObjectDom } from "../base";

interface DocumentProps {
  title?: string;
  styles?: Style[];
  link?: Link[];
  meta?: Meta[];
  scripts?: Script[];
  children?: NodeArray;
}

/**
 * The HTML DOM document object is the owner
 * of all other objects in your web page.
 *
 * Reference: https://www.w3schools.com/js/js_htmldom_document.asp
 */
export class ObjectDocument extends ObjectDom {
  constructor(public props: DocumentProps = {}) {
    super();
  }

  render = () => {
    return new Html({
      children: [
        new Head({
          children: [
            new Title({ text: this.props.title }),
            ...(this.props.meta ? this.props.meta : []),
            ...(this.props.styles ? this.props.styles : []),
            ...(this.props.link ? this.props.link : []),
          ],
        }),
        new Body({
          children: [
            ...(this.props.children ? this.props.children : []),
            ...(this.props.scripts ? this.props.scripts : []),
          ],
        }),
      ],
    });
  };

  document() {
    const elem: Document = document.implementation.createHTMLDocument(this.props.title);
    const addToNode = (target: HTMLElement, children: NodeArray) => {
      for (const item of children) {
        if (item instanceof ObjectDom) {
          const node = item.render().node;
          target.append(node);
        } else {
          target.append(item);
        }
      }
    };
    if (this.props.meta) addToNode(elem.head, this.props.meta);
    if (this.props.styles) addToNode(elem.head, this.props.styles);
    if (this.props.link) addToNode(elem.head, this.props.link);
    if (this.props.children) addToNode(elem.body, this.props.children);
    if (this.props.scripts) addToNode(elem.body, this.props.scripts);
    return elem;
  }
}
