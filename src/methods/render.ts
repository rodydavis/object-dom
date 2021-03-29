import { ObjectDom } from '../base';

export function render(source: ObjectDom<HTMLElement>, target: HTMLElement = document.body) {
  let node = source.render().node;
  source.update = () => {
    if (node) node.remove();
    node = source.render().node;
    target.appendChild(node);
  };
  target.appendChild(node);
}
