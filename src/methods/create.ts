import { NodeArray } from '../base';
import { Head, Body, Html, Title, Style, Script, Link, Meta } from '../dom';

interface CreateProps {
  title: string;
  styles?: Style[];
  link?: Link[];
  meta?: Meta[];
  scripts?: Script[];
  children?: NodeArray;
}

export function create(props: CreateProps): Html {
  return new Html({
    children: [
      new Head({
        children: [
          new Title({ text: props.title }),
          ...(props.meta ? props.meta : []),
          ...(props.styles ? props.styles : []),
          ...(props.link ? props.link : [])
        ]
      }),
      new Body({
        children: [
          ...(props.children ? props.children : []),
          ...(props.scripts ? props.scripts : [])
        ]
      })
    ]
  });
}
