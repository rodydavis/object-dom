import { ObjectDom } from "./base";
export { ObjectDom } from './base';
export * from './dom';

export function render<T extends HTMLElement>( source: ObjectDom<T>, target: HTMLElement = document.body) {
  const htmlResult = source.render();
  console.log(htmlResult);
  target.innerHTML = htmlResult;
}
