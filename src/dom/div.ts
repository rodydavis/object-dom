import { ObjectDom, NodeProps } from '../base';

export class Div extends ObjectDom<HTMLDivElement> {
  constructor(props: NodeProps = {}) {
    super({ node: document.createElement('div'), ...props });
  }
}

class Display extends Div {
  constructor(display: string, props: NodeProps = {}) {
    super(props);
    this.node.style.display = display;
  }
}

export class Grid extends Display {
  constructor(props: NodeProps = {}) {
    super('grid', props);
  }
}

export class Block extends Display {
  constructor(props: NodeProps = {}) {
    super('block', props);
  }
}

export class Inline extends Display {
  constructor(props: NodeProps = {}) {
    super('inline', props);
  }
}

export class InlineBlock extends Display {
  constructor(props: NodeProps = {}) {
    super('inline-block', props);
  }
}

export class Flex extends Display {
  constructor(props: NodeProps = {}) {
    super('flex', props);
  }
}

export interface RowProps extends NodeProps {
  direction?: 'row-reversed' | 'row';
}

export class Row extends Flex {
  constructor(props: RowProps = {}) {
    super(props);
    if (props?.direction) this.node.style.flexDirection = props.direction;
  }
}

export interface ColumnProps extends NodeProps {
  direction?: 'column-reversed' | 'column';
}

export class Column extends Flex {
  constructor(props: ColumnProps = {}) {
    super(props);
    if (props?.direction) this.node.style.flexDirection = props.direction;
  }
}

export interface WrapProps extends NodeProps {
  direction?: 'wrap-reversed' | 'wrap' | 'nowrap';
}

export class Wrap extends Flex {
  constructor(props: WrapProps = {}) {
    super(props);
    if (props?.direction) this.node.style.flexWrap = props.direction;
  }
}
