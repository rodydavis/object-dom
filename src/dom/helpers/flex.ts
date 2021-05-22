import { Div, DivProps } from "../tags/div";

interface DisplayProps extends DivProps {
  styles?: {
    display?: string;
  };
}

class Display extends Div {
  constructor(props: DisplayProps = { styles: { display: "unset" } }) {
    super(props);
  }
}

export class Grid extends Display {
  constructor(props: DisplayProps = { styles: { display: "grid" } }) {
    super(props);
  }
}

export class Block extends Display {
  constructor(props: DisplayProps = { styles: { display: "block" } }) {
    super(props);
  }
}

export class Inline extends Display {
  constructor(props: DisplayProps = { styles: { display: "inline" } }) {
    super(props);
  }
}

export class InlineBlock extends Display {
  constructor(props: DisplayProps = { styles: { display: "inline-block" } }) {
    super(props);
  }
}

export class Flex extends Display {
  constructor(props: DisplayProps = { styles: { display: "flex" } }) {
    super(props);
  }
}

interface RowProps extends DisplayProps {
  styles?: {
    display?: string;
    flexDirection?: "row-reversed" | "row";
  };
}

export class Row extends Flex {
  constructor(props: RowProps = { styles: { flexDirection: "row", display: "flex" } }) {
    super(props);
  }
}

interface ColumnProps extends DisplayProps {
  styles?: {
    display?: string;
    flexDirection?: "column-reversed" | "column";
  };
}

export class Column extends Flex {
  constructor(props: ColumnProps = { styles: { flexDirection: "column", display: "flex" } }) {
    super(props);
  }
}

interface WrapProps extends DisplayProps {
  styles?: {
    display?: string;
    flexWrap?: "wrap-reversed" | "wrap" | "nowrap";
  };
}

export class Wrap extends Flex {
  constructor(props: WrapProps = { styles: { flexWrap: "wrap", display: "flex" } }) {
    super(props);
  }
}
