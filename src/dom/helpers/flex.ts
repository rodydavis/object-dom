import { Div, DivProps } from "../tags/div";

class Display extends Div {
  constructor(display: string, props: DivProps = {}) {
    super(props);
    this.addStyle("display", display);
  }
}

export class Grid extends Display {
  constructor(props: DivProps = {}) {
    super("grid", props);
  }
}

export class Block extends Display {
  constructor(props: DivProps = {}) {
    super("block", props);
  }
}

export class Inline extends Display {
  constructor(props: DivProps = {}) {
    super("inline", props);
  }
}

export class InlineBlock extends Display {
  constructor(props: DivProps = {}) {
    super("inline-block", props);
  }
}

export class Flex extends Display {
  constructor(props: DivProps = {}) {
    super("flex", props);
  }
}

interface RowProps extends DivProps {
  direction?: "row-reversed" | "row";
}

export class Row extends Flex {
  constructor(props: RowProps = {}) {
    super(props);
    this.addStyle("flex-direction", props?.direction);
  }
}

interface ColumnProps extends DivProps {
  direction?: "column-reversed" | "column";
}

export class Column extends Flex {
  constructor(props: ColumnProps = {}) {
    super(props);
    this.addStyle("flex-direction", props?.direction);
  }
}

interface WrapProps extends DivProps {
  direction?: "wrap-reversed" | "wrap" | "nowrap";
}

export class Wrap extends Flex {
  constructor(props: WrapProps = {}) {
    super(props);
    this.addStyle("flex-wrap", props?.direction);
  }
}
