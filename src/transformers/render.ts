import type { ObjectDom } from "../base";

/**
 * Render the ObjectDom node at the given target.
 */
export function render(source: ObjectDom<HTMLElement>, target: HTMLElement = document.body) {
  let node = source.render().node;
  source.update = () => {
    const _newNode = source.render().node;
    target.parentNode?.replaceChild(_newNode, node);
    node = _newNode;
  };
  target.appendChild(node);
}
