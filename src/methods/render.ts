import { ObjectDom } from '../base';

export function render(source: ObjectDom, target: HTMLElement = document.body) {
  target.innerHTML = '';
  let node = source.build().node;
  source.update = () => {
    node.remove();
    node = source.build().node;
    target.appendChild(node);
  };
  target.appendChild(node);
}
