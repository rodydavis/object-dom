import { GlobalDom, NodeProps } from '../base';
import { NodeAttr } from './attrs';

interface MathProps extends NodeProps<HTMLElement> {
  href?: string;
  mathbackground?: string;
  mathcolor?: string;
  display?: 'block' | 'inline';
}
export class Math extends GlobalDom<HTMLElement> {
  constructor(props: MathProps = {}) {
    super({ node: document.createElement('math'), ...props });
    this.href = new NodeAttr(this, 'href', props?.href);
    this.mathbackground = new NodeAttr(this, 'mathbackground', props?.mathbackground);
    this.mathcolor = new NodeAttr(this, 'mathcolor', props?.mathcolor);
    this.display = new NodeAttr(this, 'display', props?.display);
  }
  href: NodeAttr;
  mathbackground: NodeAttr;
  mathcolor: NodeAttr;
  display: NodeAttr;
}

// export class MathRow extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mrow'), ...props });
//   }
// }

// export class MathSup extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('msup'), ...props });
//   }
// }

// export class MathI extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mi'), ...props });
//   }
// }

// export class MathO extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mo'), ...props });
//   }
// }

// export class MStyle extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mstyle'), ...props });
//   }
// }
