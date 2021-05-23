import type { ObjectDom } from "../base";

/**
 * Render the ObjectDom node at the given target.
 */
export function render(source: ObjectDom<HTMLElement>, target: HTMLElement = document.body) {
  let node = source.renderDom().node;
  source.update = () => {
    const _newNode = source.renderDom().node;
    target.parentNode?.replaceChild(_newNode, node);
    node = _newNode;
  };
  target.appendChild(node);
}
