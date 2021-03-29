import { CoreDom, NodeProps } from '../base';

export class Div extends CoreDom<HTMLDivElement> {
  constructor(props: NodeProps<HTMLDivElement> = {}) {
    super({ node: document.createElement('div'), ...props });
  }
}

class Display extends Div {
  constructor(display: string, props: NodeProps<HTMLDivElement> = {}) {
    super(props);
    this.node.style.display = display;
  }
}

export class Grid extends Display {
  constructor(props: NodeProps<HTMLDivElement> = {}) {
    super('grid', props);
  }
}

export class Block extends Display {
  constructor(props: NodeProps<HTMLDivElement> = {}) {
    super('block', props);
  }
}

export class Inline extends Display {
  constructor(props: NodeProps<HTMLDivElement> = {}) {
    super('inline', props);
  }
}

export class InlineBlock extends Display {
  constructor(props: NodeProps<HTMLDivElement> = {}) {
    super('inline-block', props);
  }
}

export class Flex extends Display {
  constructor(props: NodeProps<HTMLDivElement> = {}) {
    super('flex', props);
  }
}

export interface RowProps extends NodeProps<HTMLDivElement> {
  direction?: 'row-reversed' | 'row';
}

export class Row extends Flex {
  constructor(props: RowProps = {}) {
    super(props);
    if (props?.direction) this.node.style.flexDirection = props.direction;
  }
}

export interface ColumnProps extends NodeProps<HTMLDivElement> {
  direction?: 'column-reversed' | 'column';
}

export class Column extends Flex {
  constructor(props: ColumnProps = {}) {
    super(props);
    if (props?.direction) this.node.style.flexDirection = props.direction;
  }
}

export interface WrapProps extends NodeProps<HTMLDivElement> {
  direction?: 'wrap-reversed' | 'wrap' | 'nowrap';
}

export class Wrap extends Flex {
  constructor(props: WrapProps = {}) {
    super(props);
    if (props?.direction) this.node.style.flexWrap = props.direction;
  }
}
