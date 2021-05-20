import type { ObjectDom } from "../base";

export function render(source: ObjectDom<HTMLElement>, target: HTMLElement = document.body) {
  let node = source.render().build();
  source.update = () => {
    if (node) node.remove();
    node = source.render().build();
    target.appendChild(node);
  };
  target.appendChild(node);
}
