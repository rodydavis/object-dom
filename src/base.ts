import { GlobalAttrs } from "./dom/attrs";

export type NodeArray = Array<ObjectDom | string>;

export interface NodeProps<T extends HTMLElement = HTMLElement> extends GlobalAttrs {
  node?: T;
  text?: string;
  children?: NodeArray;
}

export interface ObjectDomProps<T extends HTMLElement = HTMLElement> extends NodeProps<T> {
  node: T;
}

export class ObjectDom<T extends HTMLElement = HTMLElement> {
  build: () => T = () => {
    return this.render().build();
  };
  render: () => ObjectDom<T> = () => this;
  update: () => void = () => {};
}
