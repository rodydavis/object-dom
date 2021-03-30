import { GlobalDom, NodeProps } from '../base';

export class Math extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement('math'), ...props });
  }
}

export class MathRow extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement('mrow'), ...props });
  }
}

export class MathSup extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement('msup'), ...props });
  }
}

export class MathI extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement('mi'), ...props });
  }
}

export class MathO extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement('mo'), ...props });
  }
}

export class MStyle extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement('mstyle'), ...props });
  }
}
